# React Event Handling - Complete Guide

## Table of Contents
1. [Introduction to Event Handling in React](#introduction)
2. [Synthetic Events vs Native Events](#synthetic-events)
3. [Basic Event Handling](#basic-event-handling)
4. [Event Binding Methods](#event-binding)
5. [Passing Parameters to Event Handlers](#passing-parameters)
6. [Event Flow Control](#event-flow-control)
7. [Conditional Rendering](#conditional-rendering)
8. [Lists and Keys](#lists-and-keys)
9. [Form Handling](#form-handling)
10. [Practice Questions (30+)](#practice-questions)
11. [Interview Questions](#interview-questions)
12. [Summary](#summary)

## Introduction to Event Handling in React {#introduction}

Event handling in React is the process of capturing and responding to user interactions such as clicks, form submissions, keyboard input, and mouse movements. React provides a unified way to handle events across different browsers through its Synthetic Event System.

### Key Concepts:
- **Events**: Actions performed by users (clicks, typing, scrolling)
- **Event Handlers**: Functions that execute when events occur
- **Event Objects**: Objects containing information about the event
- **Event Binding**: Connecting event handlers to components

## Synthetic Events vs Native Events {#synthetic-events}

### Synthetic Events
React wraps native DOM events in `SyntheticEvent` objects, providing:
- **Cross-browser compatibility**: Same API across all browsers
- **Consistent behavior**: Unified event handling
- **Performance optimization**: Event pooling (though removed in React 17+)

```jsx
function Button() {
  const handleClick = (event) => {
    console.log(event); // SyntheticEvent object
    console.log(event.nativeEvent); // Access to native event
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

### Key Differences:
| Synthetic Events | Native Events |
|-----------------|---------------|
| Cross-browser compatible | Browser-specific |
| Pooled (React <17) | Not pooled |
| preventDefault() works consistently | Browser differences |
| stopPropagation() unified behavior | Varies by browser |

## Basic Event Handling {#basic-event-handling}

### Common Event Types:
- **onClick**: Mouse clicks
- **onChange**: Input value changes
- **onSubmit**: Form submissions
- **onFocus/onBlur**: Focus events
- **onMouseEnter/onMouseLeave**: Mouse hover
- **onKeyDown/onKeyUp**: Keyboard events

```jsx
function EventExamples() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    console.log('Button clicked!');
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with:', message);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log('Enter pressed!');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={message}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
```

## Event Binding Methods {#event-binding}

### 1. Arrow Functions in JSX (Most Common)
```jsx
function Component() {
  const handleClick = () => {
    console.log('Clicked!');
  };

  return <button onClick={handleClick}>Click</button>;
}
```

### 2. Inline Arrow Functions
```jsx
function Component() {
  return (
    <button onClick={() => console.log('Clicked!')}>
      Click
    </button>
  );
}
```

### 3. Class Component Binding
```jsx
class Component extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Clicked!');
  }

  render() {
    return <button onClick={this.handleClick}>Click</button>;
  }
}
```

### 4. Arrow Functions in Class Components
```jsx
class Component extends React.Component {
  handleClick = () => {
    console.log('Clicked!');
  };

  render() {
    return <button onClick={this.handleClick}>Click</button>;
  }
}
```

## Passing Parameters to Event Handlers {#passing-parameters}

### Method 1: Using Arrow Functions
```jsx
function ItemList() {
  const items = ['Apple', 'Banana', 'Cherry'];

  const handleItemClick = (item, index) => {
    console.log(`Clicked ${item} at index ${index}`);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li 
          key={index}
          onClick={() => handleItemClick(item, index)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
```

### Method 2: Using bind()
```jsx
function ItemList() {
  const items = ['Apple', 'Banana', 'Cherry'];

  const handleItemClick = (item, index, event) => {
    console.log(`Clicked ${item} at index ${index}`);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li 
          key={index}
          onClick={handleItemClick.bind(null, item, index)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
```

### Method 3: Using Closures
```jsx
function ItemList() {
  const items = ['Apple', 'Banana', 'Cherry'];

  const createClickHandler = (item, index) => {
    return (event) => {
      console.log(`Clicked ${item} at index ${index}`);
    };
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li 
          key={index}
          onClick={createClickHandler(item, index)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
```

## Event Flow Control {#event-flow-control}

### preventDefault()
Prevents the default behavior of an event:

```jsx
function Form() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page refresh
    console.log('Form submitted without page refresh');
  };

  const handleLinkClick = (event) => {
    event.preventDefault(); // Prevents navigation
    console.log('Link clicked but navigation prevented');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
      
      <a href="https://google.com" onClick={handleLinkClick}>
        Click me (won't navigate)
      </a>
    </div>
  );
}
```

### stopPropagation()
Stops event bubbling up the DOM tree:

```jsx
function NestedComponents() {
  const handleParentClick = () => {
    console.log('Parent clicked');
  };

  const handleChildClick = (event) => {
    event.stopPropagation(); // Prevents parent handler from running
    console.log('Child clicked');
  };

  return (
    <div onClick={handleParentClick} style={{ padding: '20px', border: '1px solid red' }}>
      Parent
      <button onClick={handleChildClick} style={{ margin: '10px' }}>
        Child (click won't trigger parent)
      </button>
    </div>
  );
}
```

### stopImmediatePropagation()
Stops both bubbling and other handlers on the same element:

```jsx
function MultipleHandlers() {
  const handler1 = (event) => {
    console.log('Handler 1');
    event.stopImmediatePropagation(); // Stops handler2 from running
  };

  const handler2 = () => {
    console.log('Handler 2 - will not run');
  };

  return (
    <button 
      onClick={(event) => {
        handler1(event);
        handler2();
      }}
    >
      Click me
    </button>
  );
}
```

## Conditional Rendering {#conditional-rendering}

### Using Logical AND (&&)
```jsx
function ConditionalComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);

  return (
    <div>
      {isLoggedIn && <h1>Welcome back!</h1>}
      {hasNotifications && <div className="notification">You have new messages</div>}
      
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}
```

### Using Ternary Operator
```jsx
function UserStatus() {
  const [user, setUser] = useState(null);

  const handleLogin = () => setUser({ name: 'John Doe' });
  const handleLogout = () => setUser(null);

  return (
    <div>
      {user ? (
        <div>
          <h2>Hello, {user.name}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please log in</h2>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}
```

### Using Switch Statements
```jsx
function StatusComponent() {
  const [status, setStatus] = useState('loading');

  const renderContent = () => {
    switch (status) {
      case 'loading':
        return <div>Loading...</div>;
      case 'success':
        return <div>Data loaded successfully!</div>;
      case 'error':
        return <div>Error loading data</div>;
      default:
        return <div>Unknown status</div>;
    }
  };

  return (
    <div>
      {renderContent()}
      <button onClick={() => setStatus('loading')}>Loading</button>
      <button onClick={() => setStatus('success')}>Success</button>
      <button onClick={() => setStatus('error')}>Error</button>
    </div>
  );
}
```

## Lists and Keys {#lists-and-keys}

### Basic List Rendering
```jsx
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: true },
    { id: 3, text: 'Get a job', completed: false }
  ]);

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id 
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          <span onClick={() => toggleTodo(todo.id)}>
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
```

### Keys Best Practices
```jsx
// ❌ Bad: Using array index as key
{items.map((item, index) => (
  <div key={index}>{item.name}</div>
))}

// ✅ Good: Using unique, stable identifier
{items.map(item => (
  <div key={item.id}>{item.name}</div>
))}

// ✅ Good: Using compound key when no unique id
{items.map((item, index) => (
  <div key={`${item.category}-${item.name}-${index}`}>
    {item.name}
  </div>
))}
```

## Form Handling {#form-handling}

### Controlled Components
```jsx
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    category: 'general'
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
      category: 'general'
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Category:</label>
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="general">General</option>
          <option value="support">Support</option>
          <option value="billing">Billing</option>
        </select>
      </div>

      <div>
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
```

### Uncontrolled Components
```jsx
function UncontrolledForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const fileRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('name', nameRef.current.value);
    formData.append('email', emailRef.current.value);
    formData.append('file', fileRef.current.files[0]);

    console.log('Name:', nameRef.current.value);
    console.log('Email:', emailRef.current.value);
    console.log('File:', fileRef.current.files[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nameRef} placeholder="Name" />
      <input type="email" ref={emailRef} placeholder="Email" />
      <input type="file" ref={fileRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Practice Questions (30+) {#practice-questions}

### Basic Event Handling (Questions 1-10)

**1. Q: How do you handle a button click in React?**
A: Use the `onClick` prop with a function:
```jsx
function Button() {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  return <button onClick={handleClick}>Click me</button>;
}
```

**2. Q: What's the difference between onClick and onclick?**
A: `onClick` (camelCase) is React's synthetic event prop, while `onclick` (lowercase) is the native HTML attribute. React uses camelCase for all event props.

**3. Q: How do you access the event object in a React event handler?**
A: The event object is automatically passed as the first parameter:
```jsx
const handleClick = (event) => {
  console.log(event.type); // "click"
  console.log(event.target); // the clicked element
};
```

**4. Q: How do you prevent form submission from refreshing the page?**
A: Use `event.preventDefault()` in the onSubmit handler:
```jsx
const handleSubmit = (event) => {
  event.preventDefault();
  // Handle form submission
};
```

**5. Q: What happens if you don't bind 'this' in a class component event handler?**
A: `this` will be undefined in the handler function, causing errors when trying to access component methods or state.

**6. Q: How do you handle input changes in React?**
A: Use the `onChange` event:
```jsx
const [value, setValue] = useState('');
const handleChange = (event) => {
  setValue(event.target.value);
};
return <input value={value} onChange={handleChange} />;
```

**7. Q: What's the difference between onChange and onInput?**
A: In React, `onChange` fires on every change (like onInput), not just on blur like native HTML. React doesn't have an `onInput` prop.

**8. Q: How do you handle keyboard events?**
A: Use `onKeyDown`, `onKeyUp`, or `onKeyPress`:
```jsx
const handleKeyDown = (event) => {
  if (event.key === 'Enter') {
    // Handle Enter key
  }
};
```

**9. Q: How do you access the value of an input field in an event handler?**
A: Through `event.target.value`:
```jsx
const handleChange = (event) => {
  console.log(event.target.value);
};
```

**10. Q: What's the correct way to handle multiple input fields?**
A: Use a single handler with dynamic property names:
```jsx
const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData(prev => ({ ...prev, [name]: value }));
};
```

### Event Binding and Parameters (Questions 11-20)

**11. Q: How do you pass parameters to an event handler?**
A: Use an arrow function or bind:
```jsx
// Arrow function
<button onClick={() => handleClick(param)}>Click</button>
// Bind
<button onClick={handleClick.bind(null, param)}>Click</button>
```

**12. Q: What's wrong with this code: `<button onClick={handleClick(param)}>Click</button>`?**
A: This calls the function immediately during render instead of on click. Should be `onClick={() => handleClick(param)}`.

**13. Q: How do you access both the event object and custom parameters?**
A: Pass the event explicitly:
```jsx
<button onClick={(event) => handleClick(event, param)}>Click</button>
```

**14. Q: What's the performance consideration with inline arrow functions?**
A: They create new functions on every render, which can cause unnecessary re-renders of child components. Consider useCallback for optimization.

**15. Q: How do you bind events in class components?**
A: Three ways:
```jsx
// Constructor binding
constructor(props) {
  this.handleClick = this.handleClick.bind(this);
}

// Arrow function property
handleClick = () => {};

// Inline arrow function
onClick={() => this.handleClick()}
```

**16. Q: What's the difference between these binding methods in terms of performance?**
A: Constructor binding and arrow function properties create the function once. Inline arrow functions create new functions on each render.

**17. Q: How do you handle events on dynamically generated elements?**
A: Use event delegation or pass identifiers:
```jsx
{items.map(item => (
  <button key={item.id} onClick={() => handleClick(item.id)}>
    {item.name}
  </button>
))}
```

**18. Q: Can you use regular function expressions for event handlers?**
A: Yes, but you need to bind `this` in class components:
```jsx
function handleClick() {
  // this is undefined without binding
}
```

**19. Q: How do you create a reusable event handler factory?**
A: Use closures:
```jsx
const createHandler = (id) => (event) => {
  console.log('Clicked item:', id);
};
```

**20. Q: What's the best practice for event handler naming?**
A: Use descriptive names starting with "handle": `handleSubmit`, `handleInputChange`, `handleUserClick`.

### Event Flow and Control (Questions 21-30)

**21. Q: What does event.stopPropagation() do?**
A: It prevents the event from bubbling up to parent elements, so parent event handlers won't be triggered.

**22. Q: When would you use event.preventDefault()?**
A: To prevent default browser behaviors like form submission, link navigation, or context menus.

**23. Q: What's the difference between stopPropagation() and stopImmediatePropagation()?**
A: `stopPropagation()` prevents bubbling to parents. `stopImmediatePropagation()` also prevents other handlers on the same element from running.

**24. Q: How do you handle both parent and child click events?**
A: Either use stopPropagation() in child or check event.target in parent:
```jsx
const handleParentClick = (event) => {
  if (event.target === event.currentTarget) {
    // Only handle if clicked directly on parent
  }
};
```

**25. Q: What is event delegation and how is it useful in React?**
A: Event delegation involves handling events on a parent element instead of individual children. React uses this internally for performance.

**26. Q: How do you prevent a form from submitting?**
A: Use preventDefault() in the onSubmit handler:
```jsx
const handleSubmit = (event) => {
  event.preventDefault();
  // Validation or custom handling
};
```

**27. Q: What's the event flow in React?**
A: React follows the DOM event flow: capturing phase (top to bottom), target phase, and bubbling phase (bottom to top).

**28. Q: How do you handle right-click context menus?**
A: Use onContextMenu:
```jsx
const handleContextMenu = (event) => {
  event.preventDefault(); // Prevent default context menu
  // Show custom context menu
};
```

**29. Q: Can you stop event propagation in React Synthetic Events?**
A: Yes, using event.stopPropagation() works the same way as native events.

**30. Q: How do you handle events during the capturing phase?**
A: Use the capture version of event props:
```jsx
<div onClickCapture={handleCapture}>
  <button onClick={handleClick}>Click</button>
</div>
```

### Advanced Questions (Questions 31-35)

**31. Q: How do you debounce event handlers in React?**
A: Use useCallback with a debounce utility or custom hook:
```jsx
const debouncedHandler = useCallback(
  debounce((value) => {
    // Handle debounced input
  }, 300),
  []
);
```

**32. Q: How do you handle file upload events?**
A: Use onChange on input[type="file"] and access files through event.target.files:
```jsx
const handleFileChange = (event) => {
  const files = event.target.files;
  // Process files
};
```

**33. Q: What's the difference between controlled and uncontrolled components?**
A: Controlled components have their value controlled by React state. Uncontrolled components manage their own state internally.

**34. Q: How do you handle focus and blur events?**
A: Use onFocus and onBlur:
```jsx
const [isFocused, setIsFocused] = useState(false);
<input 
  onFocus={() => setIsFocused(true)}
  onBlur={() => setIsFocused(false)}
/>
```

**35. Q: How do you handle custom events in React?**
A: Create and dispatch custom events using the native DOM API:
```jsx
const dispatchCustomEvent = () => {
  const event = new CustomEvent('myEvent', { detail: data });
  document.dispatchEvent(event);
};
```

## Interview Questions {#interview-questions}

### Beginner Level

**1. Explain event handling in React.**
Event handling in React involves responding to user interactions through event handlers. React uses SyntheticEvent, which wraps native DOM events to provide cross-browser compatibility. Event handlers are functions that execute when specific events occur.

**2. What are Synthetic Events in React?**
Synthetic Events are React's wrapper around native DOM events. They provide a consistent API across different browsers, have the same interface as native events, and include additional features like event pooling (in older versions).

**3. How do you pass parameters to event handlers?**
You can pass parameters using arrow functions, bind method, or closures:
```jsx
// Arrow function
onClick={() => handleClick(param)}
// Bind
onClick={handleClick.bind(null, param)}
// Closure
onClick={createHandler(param)}
```

### Intermediate Level

**4. Explain the difference between controlled and uncontrolled components.**
- **Controlled Components**: Form data is handled by React state. The component controls the input value through props.
- **Uncontrolled Components**: Form data is handled by the DOM itself. You access values using refs.

**5. What is event bubbling and how do you control it?**
Event bubbling is when events travel from the target element up through its ancestors. You control it using:
- `event.stopPropagation()`: Stops bubbling to parent elements
- `event.stopImmediatePropagation()`: Stops bubbling and other handlers on the same element

**6. How would you optimize event handling in a large list?**
- Use event delegation with a single handler on the parent
- Use useCallback to memoize handlers
- Avoid inline functions when possible
- Consider virtualization for very large lists

### Advanced Level

**7. Explain event pooling in React and its current status.**
Event pooling was a performance optimization where React reused event objects. The event object was nullified after the event handler finished. This was removed in React 17+ because modern browsers are more efficient.

**8. How would you implement a custom event system in React?**
```jsx
const useCustomEvent = () => {
  const [listeners, setListeners] = useState({});
  
  const emit = (eventName, data) => {
    if (listeners[eventName]) {
      listeners[eventName].forEach(callback => callback(data));
    }
  };
  
  const subscribe = (eventName, callback) => {
    setListeners(prev => ({
      ...prev,
      [eventName]: [...(prev[eventName] || []), callback]
    }));
  };
  
  return { emit, subscribe };
};
```

**9. How do you handle race conditions in async event handlers?**
Use cleanup functions, abort controllers, or state checks:
```jsx
const handleAsyncEvent = useCallback(async () => {
  const controller = new AbortController();
  
  try {
    const data = await fetchData({ signal: controller.signal });
    if (!controller.signal.aborted) {
      setData(data);
    }
  } catch (error) {
    if (error.name !== 'AbortError') {
      setError(error);
    }
  }
  
  return () => controller.abort();
}, []);
```

**10. Explain how you would create a universal event handler system.**
```jsx
const useUniversalHandler = (handlers) => {
  return useCallback((event) => {
    const { type, target } = event;
    const handler = handlers[type];
    
    if (handler) {
      handler(event, target);
    }
  }, [handlers]);
};

// Usage
const handlers = {
  click: (event, target) => console.log('Clicked:', target),
  keydown: (event, target) => console.log('Key pressed:', event.key)
};

const universalHandler = useUniversalHandler(handlers);
```

## Summary {#summary}

### Key Takeaways:

1. **Event Handling**: React uses SyntheticEvent for cross-browser compatibility
2. **Event Binding**: Multiple methods available, each with performance implications
3. **Parameter Passing**: Use arrow functions or bind to pass additional parameters
4. **Event Flow Control**: preventDefault() and stopPropagation() control default behaviors and event bubbling
5. **Conditional Rendering**: Use logical operators and ternary expressions for dynamic UI
6. **Lists and Keys**: Always provide unique, stable keys for list items
7. **Form Handling**: Choose between controlled and uncontrolled components based on needs
8. **Performance**: Consider memoization and event delegation for optimization

### Best Practices:

- Use descriptive handler names (handleSubmit, handleInputChange)
- Avoid inline functions in render for performance-critical components
- Use preventDefault() to control default browser behaviors
- Implement proper error handling in async event handlers
- Use controlled components for form validation and complex interactions
- Provide stable, unique keys for dynamic lists
- Consider accessibility when handling keyboard and focus events

### Common Pitfalls to Avoid:

- Calling functions instead of passing them: `onClick={handleClick()}` vs `onClick={handleClick}`
- Using array indexes as keys in dynamic lists
- Forgetting to bind `this` in class components
- Not preventing default behaviors when needed
- Creating new functions on every render without memoization
- Ignoring event flow and propagation in nested components