---

## **17. RTK QUERY (Continued)**

### **Advanced RTK Query Features:**

#### **6. Optimistic Updates:**

```javascript
updatePost: builder.mutation({
  query: ({ id, ...patch }) => ({
    url: `/posts/${id}`,
    method: 'PATCH',
    body: patch
  }),
  
  // Optimistic update
  async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
    // Update cache immediately
    const patchResult = dispatch(
      apiSlice.util.updateQueryData('getPostById', id, (draft) => {
        Object.assign(draft, patch);  // Apply changes optimistically
      })
    );
    
    try {
      await queryFulfilled;  // Wait for server response
    } catch {
      patchResult.undo();  // Rollback on error
    }
  }
})
```

---

#### **7. Conditional Fetching:**

```javascript
function PostDetail({ postId }) {
  const {
    data: post
  } = useGetPostByIdQuery(postId, {
    skip: !postId,  // Skip query if no postId
    pollingInterval: 5000,  // Poll every 5 seconds
    refetchOnMountOrArgChange: 30,  // Refetch if data older than 30s
    refetchOnFocus: true,  // Refetch when window regains focus
    refetchOnReconnect: true  // Refetch on network reconnect
  });
  
  return <div>{post?.title}</div>;
}
```

---

#### **8. Manual Cache Manipulation:**

```javascript
import { apiSlice } from './api/apiSlice';

function Component() {
  const dispatch = useDispatch();
  
  const handleManualUpdate = () => {
    // Manually update cached data
    dispatch(
      apiSlice.util.updateQueryData('getPosts', undefined, (draft) => {
        draft.push({ id: 999, title: 'Manual Post' });
      })
    );
    
    // Invalidate cache
    dispatch(apiSlice.util.invalidateTags(['Post']));
    
    // Prefetch data
    dispatch(apiSlice.endpoints.getPosts.initiate());
  };
}
```

---

#### **9. Transforming Responses:**

```javascript
getPosts: builder.query({
  query: () => '/posts',
  
  // Transform response before caching
  transformResponse: (response) => {
    return response.data.map(post => ({
      ...post,
      title: post.title.toUpperCase(),
      timestamp: new Date(post.createdAt)
    }));
  },
  
  // Transform error
  transformErrorResponse: (response) => {
    return response.status === 404 
      ? 'Posts not found' 
      : 'An error occurred';
  }
})
```

---

#### **10. Authentication & Headers:**

```javascript
const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: 'https://api.example.com',
  
  prepareHeaders: (headers, { getState }) => {
    // Get token from Redux state
    const token = getState().auth.token;
    
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    
    headers.set('Content-Type', 'application/json');
    return headers;
  }
});

// Handle token refresh
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQueryWithAuth(args, api, extraOptions);
  
  if (result.error?.status === 401) {
    // Try to refresh token
    const refreshResult = await baseQueryWithAuth('/refresh', api, extraOptions);
    
    if (refreshResult.data) {
      // Store new token
      api.dispatch(setToken(refreshResult.data.token));
      
      // Retry original query
      result = await baseQueryWithAuth(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({...})
});
```

---

#### **11. Code Splitting (Lazy Loading Endpoints):**

```javascript
// api/apiSlice.js - Base API
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Post', 'User'],
  endpoints: () => ({})  // Empty initially
});

// features/posts/postsApiSlice.js - Inject endpoints
import { apiSlice } from '../../api/apiSlice';

export const postsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
      providesTags: ['Post']
    })
  })
});

export const { useGetPostsQuery } = postsApiSlice;

// features/users/usersApiSlice.js - Separate feature
export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
      providesTags: ['User']
    })
  })
});

export const { useGetUsersQuery } = usersApiSlice;
```

---

## **18. COMPLETE REDUX TOOLKIT EXAMPLE**

Let's build a **Task Manager** with all concepts:

### **Project Structure:**
```
src/
├── app/
│   └── store.js                 # Store configuration
├── features/
│   └── tasks/
│       ├── tasksSlice.js        # Tasks slice
│       ├── tasksApiSlice.js     # RTK Query API
│       └── TasksList.jsx        # Component
├── middleware/
│   └── logger.js                # Custom middleware
└── App.jsx
```

---

### **1. Store Configuration:**

```javascript
// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/tasksSlice';
import { apiSlice } from '../features/tasks/tasksApiSlice';
import logger from '../middleware/logger';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,                    // Local tasks state
    [apiSlice.reducerPath]: apiSlice.reducer  // API cache
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(logger),  // Custom middleware
  
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
```

---

### **2. Custom Logger Middleware:**

```javascript
// middleware/logger.js
const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info('Previous State:', store.getState());
  console.info('Action:', action);
  
  const result = next(action);
  
  console.info('Next State:', store.getState());
  console.groupEnd();
  
  return result;
};

export default logger;
```

---

### **3. Tasks Slice (Local State):**

```javascript
// features/tasks/tasksSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  items: [],
  filter: 'all',  // 'all' | 'completed' | 'incomplete'
  loading: 'idle',
  error: null
};

// Async thunk for fetching tasks
export const fetchTasksThunk = createAsyncThunk(
  'tasks/fetchTasks',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/tasks');
      if (!response.ok) throw new Error('Failed to fetch');
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Create slice
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  
  // Synchronous reducers
  reducers: {
    addTask: (state, action) => {
      state.items.push({
        id: Date.now(),
        text: action.payload.text,
        completed: false,
        createdAt: new Date().toISOString()
      });
    },
    
    deleteTask: (state, action) => {
      state.items = state.items.filter(task => task.id !== action.payload);
    },
    
    toggleTask: (state, action) => {
      const task = state.items.find(t => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    
    updateTask: (state, action) => {
      const { id, text } = action.payload;
      const task = state.items.find(t => t.id === id);
      if (task) {
        task.text = text;
      }
    },
    
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    
    clearCompleted: (state) => {
      state.items = state.items.filter(task => !task.completed);
    }
  },
  
  // Handle async thunk actions
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksThunk.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchTasksThunk.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTasksThunk.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload;
      });
  }
});

// Export action creators
export const {
  addTask,
  deleteTask,
  toggleTask,
  updateTask,
  setFilter,
  clearCompleted
} = tasksSlice.actions;

// Selectors
export const selectAllTasks = (state) => state.tasks.items;

export const selectFilteredTasks = (state) => {
  const { items, filter } = state.tasks;
  
  switch (filter) {
    case 'completed':
      return items.filter(task => task.completed);
    case 'incomplete':
      return items.filter(task => !task.completed);
    default:
      return items;
  }
};

export const selectTaskById = (state, taskId) =>
  state.tasks.items.find(task => task.id === taskId);

export const selectTasksCount = (state) => ({
  total: state.tasks.items.length,
  completed: state.tasks.items.filter(t => t.completed).length,
  incomplete: state.tasks.items.filter(t => !t.completed).length
});

// Export reducer
export default tasksSlice.reducer;
```

---

### **4. RTK Query API Slice:**

```javascript
// features/tasks/tasksApiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }),
  
  tagTypes: ['Task'],
  
  endpoints: (builder) => ({
    // Fetch all tasks
    getTasks: builder.query({
      query: () => '/todos',
      transformResponse: (response) => response.slice(0, 10),  // Limit to 10
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Task', id })),
              { type: 'Task', id: 'LIST' }
            ]
          : [{ type: 'Task', id: 'LIST' }]
    }),
    
    // Fetch single task
    getTaskById: builder.query({
      query: (id) => `/todos/${id}`,
      providesTags: (result, error, id) => [{ type: 'Task', id }]
    }),
    
    // Add new task
    addTask: builder.mutation({
      query: (newTask) => ({
        url: '/todos',
        method: 'POST',
        body: newTask
      }),
      invalidatesTags: [{ type: 'Task', id: 'LIST' }]
    }),
    
    // Update task
    updateTask: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/todos/${id}`,
        method: 'PATCH',
        body: patch
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Task', id }]
    }),
    
    // Delete task
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Task', id }]
    })
  })
});

// Export hooks
export const {
  useGetTasksQuery,
  useGetTaskByIdQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation
} = apiSlice;
```

---

### **5. React Component:**

```javascript
// features/tasks/TasksList.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilteredTasks,
  selectTasksCount,
  addTask,
  deleteTask,
  toggleTask,
  setFilter,
  clearCompleted
} from './tasksSlice';
import { useGetTasksQuery, useAddTaskMutation } from './tasksApiSlice';

function TasksList() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  
  // Local state selectors
  const tasks = useSelector(selectFilteredTasks);
  const counts = useSelector(selectTasksCount);
  const filter = useSelector(state => state.tasks.filter);
  
  // RTK Query
  const {
    data: apiTasks,
    isLoading,
    isError,
    error
  } = useGetTasksQuery();
  
  const [addApiTask, { isLoading: isAdding }] = useAddTaskMutation();
  
  // Handlers
  const handleAddTask = () => {
    if (inputValue.trim()) {
      dispatch(addTask({ text: inputValue }));
      setInputValue('');
    }
  };
  
  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };
  
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  
  const handleFilterChange = (newFilter) => {
    dispatch(setFilter(newFilter));
  };
  
  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };
  
  const handleAddApiTask = async () => {
    try {
      await addApiTask({
        title: inputValue,
        completed: false,
        userId: 1
      }).unwrap();
      setInputValue('');
    } catch (err) {
      console.error('Failed to add task:', err);
    }
  };
  
  return (
    <div className="tasks-container">
      <h1>Task Manager</h1>
      
      {/* Input Section */}
      <div className="input-section">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
          placeholder="Enter task..."
        />
        <button onClick={handleAddTask}>Add Local Task</button>
        <button onClick={handleAddApiTask} disabled={isAdding}>
          {isAdding ? 'Adding...' : 'Add API Task'}
        </button>
      </div>
      
      {/* Filter Buttons */}
      <div className="filters">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => handleFilterChange('all')}
        >
          All ({counts.total})
        </button>
        <button
          className={filter === 'incomplete' ? 'active' : ''}
          onClick={() => handleFilterChange('incomplete')}
        >
          Active ({counts.incomplete})
        </button>
        <button
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => handleFilterChange('completed')}
        >
          Completed ({counts.completed})
        </button>
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </div>
      
      {/* Local Tasks List */}
      <div className="tasks-list">
        <h2>Local Tasks</h2>
        {tasks.length === 0 ? (
          <p>No tasks found</p>
        ) : (
          tasks.map(task => (
            <div key={task.id} className="task-item">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
              />
              <span className={task.completed ? 'completed' : ''}>
                {task.text}
              </span>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
      
      {/* API Tasks List */}
      <div className="api-tasks">
        <h2>API Tasks</h2>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {error.message}</p>}
        {apiTasks && (
          <ul>
            {apiTasks.map(task => (
              <li key={task.id}>
                {task.title} - {task.completed ? '✓' : '✗'}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TasksList;
```

---

### **6. App Entry Point:**

```javascript
// App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import TasksList from './features/tasks/TasksList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TasksList />
      </div>
    </Provider>
  );
}

export default App;
```

---

## **19. ADVANCED PATTERNS**

### **1. Normalized State Structure:**

```javascript
// Instead of arrays, use normalized objects
const initialState = {
  entities: {
    // id-based lookup
    '1': { id: '1', text: 'Task 1', completed: false },
    '2': { id: '2', text: 'Task 2', completed: true }
  },
  ids: ['1', '2']  // Order preservation
};

// Easier updates
reducers: {
  updateTask: (state, action) => {
    const { id, ...changes } = action.payload;
    if (state.entities[id]) {
      Object.assign(state.entities[id], changes);
    }
  }
}

// Selectors
export const selectAllTasks = (state) =>
  state.tasks.ids.map(id => state.tasks.entities[id]);
```

---

### **2. Entity Adapters:**

```javascript
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

// Create adapter
const tasksAdapter = createEntityAdapter({
  selectId: (task) => task.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt)
});

// Initial state from adapter
const initialState = tasksAdapter.getInitialState({
  loading: 'idle',
  error: null
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // Adapter provides CRUD methods
    taskAdded: tasksAdapter.addOne,
    tasksReceived: tasksAdapter.setAll,
    taskUpdated: tasksAdapter.updateOne,
    taskRemoved: tasksAdapter.removeOne
  }
});

// Get selectors
const tasksSelectors = tasksAdapter.getSelectors((state) => state.tasks);

export const {
  selectAll: selectAllTasks,
  selectById: selectTaskById,
  selectIds: selectTaskIds
} = tasksSelectors;
```

---

### **3. Reselect for Memoization:**

```javascript
import { createSelector } from '@reduxjs/toolkit';

// Input selectors
const selectTasks = (state) => state.tasks.items;
const selectFilter = (state) => state.tasks.filter;

// Memoized selector - only recomputes when inputs change
export const selectFilteredTasks = createSelector(
  [selectTasks, selectFilter],
  (tasks, filter) => {
    console.log('Computing filtered tasks');  // Only logs when inputs change
    
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'incomplete':
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  }
);

// Parametric selector
export const makeSelectTasksByUser = () =>
  createSelector(
    [selectTasks, (state, userId) => userId],
    (tasks, userId) => tasks.filter(task => task.userId === userId)
  );
```

---

## **20. TESTING REDUX**

### **Testing Reducers:**

```javascript
import tasksReducer, { addTask, toggleTask } from './tasksSlice';

describe('tasks reducer', () => {
  const initialState = { items: [], filter: 'all' };
  
  it('should handle initial state', () => {
    expect(tasksReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });
  
  it('should handle addTask', () => {
    const actual = tasksReducer(initialState, addTask({ text: 'Test' }));
    expect(actual.items).toHaveLength(1);
    expect(actual.items[0].text).toBe('Test');
  });
  
  it('should handle toggleTask', () => {
    const previousState = {
      items: [{ id: 1, text: 'Test', completed: false }],
      filter: 'all'
    };
    
    const actual = tasksReducer(previousState, toggleTask(1));
    expect(actual.items[0].completed).toBe(true);
  });
});
```

---

### **Testing Async Thunks:**

```javascript
import { fetchTasksThunk } from './tasksSlice';
import { configureStore } from '@reduxjs/toolkit';

describe('fetchTasksThunk', () => {
  it('should fetch tasks successfully', async () => {
    const store = configureStore({ reducer: { tasks: tasksReducer } });
    
    await store.dispatch(fetchTasksThunk());
    
    const state = store.getState();
    expect(state.tasks.loading).toBe('succeeded');
    expect(state.tasks.items).toHaveLength(10);
  });
});
```

---

### **Testing Components:**

```javascript
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import TasksList from './TasksList';
import tasksReducer from './tasksSlice';

function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore({ reducer: { tasks: tasksReducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

test('renders task list', () => {
  renderWithProviders(<TasksList />, {
    preloadedState: {
      tasks: {
        items: [{ id: 1, text: 'Test Task', completed: false }],
        filter: 'all'
      }
    }
  });
  
  expect(screen.getByText('Test Task')).toBeInTheDocument();
});
```

---

## **21. BEST PRACTICES**

### **1. File Structure:**
```
features/
├── tasks/
│   ├── tasksSlice.js          # Slice + sync logic
│   ├── tasksApiSlice.js       # RTK Query API
│   ├── tasksSelectors.js      # Reusable selectors
│   ├── tasksThunks.js         # Complex async logic
│   ├── TasksList.jsx          # Main component
│   └── __tests__/
│       └── tasksSlice.test.js
```

### **2. Naming Conventions:**
- **Slices**: `featureSlice.js` (e.g., `tasksSlice.js`)
- **Actions**: `verbNoun` (e.g., `addTask`, `fetchUsers`)
- **Selectors**: `selectData` (e.g., `selectAllTasks`)
- **Thunks**: `actionThunk` (e.g., `fetchTasksThunk`)

### **3. State Shape:**
```javascript
{
  entities: {},        // Normalized data
  ids: [],             // Order
  loading: 'idle',     // 'idle' | 'pending' | 'succeeded' | 'failed'
  error: null          // Error messages
}
```

### **4. Don't:**
- Mutate state outside Immer (in extraReducers with returned objects)
- Put functions/promises in state
- Store derived data (use selectors)
- Dispatch actions in reducers
- Put all state in Redux (use local state for UI-only data)

---

## **SUMMARY CHECKLIST**

✅ **Store**: Use `configureStore()` instead of `createStore()`  
✅ **Slices**: Use `createSlice()` for all Redux logic  
✅ **Actions**: Auto-generated from `createSlice()`  
✅ **Reducers**: Write "mutative" code with Immer  
✅ **Async**: Use `createAsyncThunk()` for API calls  
✅ **Selectors**: Use `useSelector()` and memoize with `createSelector`  
✅ **Dispatch**: Use `useDispatch()` hook  
✅ **Provider**: Wrap app with `<Provider store={store}>`  
✅ **API Calls**: Use RTK Query for data fetching  
✅ **Testing**: Test reducers, thunks, and components separately  
✅ **DevTools**: Enabled by default in development  

---

This covers **all Redux Toolkit concepts** with theory and practical examples! 🎉