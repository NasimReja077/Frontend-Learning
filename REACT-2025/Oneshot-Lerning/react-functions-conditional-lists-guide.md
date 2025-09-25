# React Functions, Conditional Rendering & Lists - Complete Guide

## Table of Contents
1. [Function Components vs Class Components](#function-vs-class)
2. [Function Chaining in React](#function-chaining)
3. [Array Methods in React](#array-methods)
4. [Conditional Rendering](#conditional-rendering)
5. [Lists and Keys](#lists-keys)
6. [Practice Questions (30+)](#practice-questions)
7. [Interview Questions](#interview-questions)
8. [Summary](#summary)

## Function Components vs Class Components {#function-vs-class}

### Function Components (Modern Approach)

Function components are JavaScript functions that return JSX. They're the preferred way to write components in modern React.

```jsx
// Function Component with Hooks
import React, { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser(userId).then(userData => {
      setUser(userData);
      setLoading(false);
    });
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default UserProfile;
```

### Class Components (Legacy Approach)

Class components extend React.Component and use lifecycle methods for state and effects.

```jsx
// Class Component
import React, { Component } from 'react';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.fetchUser();
    }
  }

  fetchUser = () => {
    fetchUser(this.props.userId).then(userData => {
      this.setState({
        user: userData,
        loading: false
      });
    });
  };

  render() {
    const { user, loading } = this.state;
    
    if (loading) return <div>Loading...</div>;
    if (!user) return <div>User not found</div>;

    return (
      <div className="user-profile">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    );
  }
}

export default UserProfile;
```

### Key Differences:

| Function Components | Class Components |
|-------------------|-----------------|
| Simpler syntax | More verbose |
| Use Hooks for state/effects | Use lifecycle methods |
| Better performance | Slightly heavier |
| Easier to test | More complex testing |
| Modern React approach | Legacy approach |
| No `this` binding issues | Requires `this` binding |

## Function Chaining in React {#function-chaining}

Function chaining allows you to call multiple methods on the same data in sequence. This is particularly useful with array methods.

### Basic Function Chaining

```jsx
const ProcessedData = ({ data }) => {
  // Chaining array methods
  const processedItems = data
    .filter(item => item.active)           // Filter active items
    .map(item => ({ ...item, processed: true }))  // Transform items
    .sort((a, b) => a.priority - b.priority)      // Sort by priority
    .slice(0, 10);                                // Take first 10

  return (
    <div>
      {processedItems.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};
```

### Advanced Function Chaining with Custom Functions

```jsx
const DataProcessor = ({ rawData }) => {
  // Custom utility functions
  const filterByCategory = (category) => (item) => item.category === category;
  const sortByDate = (a, b) => new Date(b.date) - new Date(a.date);
  const addDisplayName = (item) => ({
    ...item,
    displayName: `${item.firstName} ${item.lastName}`
  });

  // Complex chaining
  const processedData = rawData
    .filter(item => item.status === 'published')
    .filter(filterByCategory('tech'))
    .map(addDisplayName)
    .sort(sortByDate)
    .reduce((acc, item, index) => {
      if (index % 2 === 0) acc.even.push(item);
      else acc.odd.push(item);
      return acc;
    }, { even: [], odd: [] });

  return (
    <div>
      <div>Even items: {processedData.even.length}</div>
      <div>Odd items: {processedData.odd.length}</div>
    </div>
  );
};
```

## Array Methods in React {#array-methods}

### map() - Transform and Render Arrays

The `map()` method creates a new array by transforming each element.

```jsx
const ProductList = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

// Complex mapping with transformations
const EnhancedProductList = ({ products }) => {
  return (
    <div>
      {products
        .map(product => ({
          ...product,
          discountedPrice: product.price * 0.9,
          isOnSale: product.discount > 0
        }))
        .map(product => (
          <div key={product.id} className={`product ${product.isOnSale ? 'on-sale' : ''}`}>
            <h3>{product.name}</h3>
            <div className="pricing">
              <span className="original">${product.price}</span>
              {product.isOnSale && (
                <span className="discounted">${product.discountedPrice.toFixed(2)}</span>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};
```

### filter() - Eliminate Array Data

The `filter()` method creates a new array with elements that pass a test.

```jsx
const FilterableList = ({ items, searchTerm, category }) => {
  const filteredItems = items
    .filter(item => {
      // Multiple filter conditions
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category === 'all' || item.category === category;
      const isPublished = item.status === 'published';
      
      return matchesSearch && matchesCategory && isPublished;
    });

  return (
    <div>
      <p>Showing {filteredItems.length} of {items.length} items</p>
      {filteredItems.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

// Advanced filtering with multiple criteria
const AdvancedFilter = ({ data }) => {
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 1000,
    category: 'all',
    inStock: false
  });

  const filteredData = data.filter(item => {
    return (
      item.price >= filters.minPrice &&
      item.price <= filters.maxPrice &&
      (filters.category === 'all' || item.category === filters.category) &&
      (!filters.inStock || item.stock > 0)
    );
  });

  return (
    <div>
      {/* Filter controls here */}
      <div className="results">
        {filteredData.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
```

### Other Useful Array Methods

```jsx
const ArrayMethodsExample = ({ data }) => {
  // reduce() - Calculate totals, group data
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);
  
  const groupedByCategory = data.reduce((groups, item) => {
    const category = item.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {});

  // find() - Get first matching item
  const featuredItem = data.find(item => item.featured);

  // some() - Check if any item matches condition
  const hasExpensiveItems = data.some(item => item.price > 100);

  // every() - Check if all items match condition
  const allInStock = data.every(item => item.stock > 0);

  // sort() - Sort array
  const sortedByPrice = [...data].sort((a, b) => a.price - b.price);

  return (
    <div>
      <p>Total Value: ${totalValue}</p>
      <p>Has Expensive Items: {hasExpensiveItems ? 'Yes' : 'No'}</p>
      <p>All In Stock: {allInStock ? 'Yes' : 'No'}</p>
      
      {featuredItem && (
        <div className="featured">
          <h3>Featured: {featuredItem.name}</h3>
        </div>
      )}

      {Object.entries(groupedByCategory).map(([category, items]) => (
        <div key={category}>
          <h3>{category} ({items.length})</h3>
          {items.map(item => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      ))}
    </div>
  );
};
```

## Conditional Rendering {#conditional-rendering}

### 1. If/Else Statements

```jsx
const UserDashboard = ({ user, isAuthenticated }) => {
  if (!isAuthenticated) {
    return (
      <div className="login-prompt">
        <h2>Please Log In</h2>
        <button>Login</button>
      </div>
    );
  }

  if (!user) {
    return <div className="loading">Loading user data...</div>;
  }

  return (
    <div className="dashboard">
      <h1>Welcome, {user.name}!</h1>
      <UserStats user={user} />
      <UserActions user={user} />
    </div>
  );
};

// Using if/else with multiple conditions
const OrderStatus = ({ order }) => {
  const renderStatus = () => {
    if (order.status === 'pending') {
      return <div className="status pending">⏳ Order Pending</div>;
    } else if (order.status === 'processing') {
      return <div className="status processing">⚙️ Processing Order</div>;
    } else if (order.status === 'shipped') {
      return <div className="status shipped">🚚 Order Shipped</div>;
    } else if (order.status === 'delivered') {
      return <div className="status delivered">✅ Order Delivered</div>;
    } else {
      return <div className="status unknown">❓ Unknown Status</div>;
    }
  };

  return (
    <div className="order-card">
      <h3>Order #{order.id}</h3>
      {renderStatus()}
    </div>
  );
};
```

### 2. Ternary Operator

```jsx
const ToggleableContent = ({ isVisible, content }) => {
  return (
    <div>
      {isVisible ? (
        <div className="content-visible">
          <h3>Content is shown</h3>
          <p>{content}</p>
          <button>Hide Content</button>
        </div>
      ) : (
        <div className="content-hidden">
          <p>Content is hidden</p>
          <button>Show Content</button>
        </div>
      )}
    </div>
  );
};

// Nested ternary operators (use sparingly)
const UserBadge = ({ user }) => {
  return (
    <div className="user-badge">
      {user ? (
        user.isPremium ? (
          <span className="premium">👑 {user.name}</span>
        ) : (
          <span className="regular">👤 {user.name}</span>
        )
      ) : (
        <span className="guest">👥 Guest User</span>
      )}
    </div>
  );
};

// Complex ternary with JSX
const NotificationBanner = ({ notifications, user }) => {
  return (
    <div className="banner">
      {notifications.length > 0 ? (
        <div className="has-notifications">
          <span>
            {user.name}, you have {notifications.length} new 
            {notifications.length === 1 ? ' notification' : ' notifications'}
          </span>
          <button>View All</button>
        </div>
      ) : (
        <div className="no-notifications">
          <span>No new notifications</span>
        </div>
      )}
    </div>
  );
};
```

### 3. Short-Circuit Evaluation (&&)

```jsx
const ConditionalElements = ({ user, showDetails, hasPermission }) => {
  return (
    <div>
      {/* Simple conditional rendering */}
      {user && <h1>Welcome, {user.name}!</h1>}
      
      {/* Multiple conditions */}
      {user && showDetails && (
        <div className="user-details">
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      )}
      
      {/* Conditional with complex JSX */}
      {hasPermission && (
        <div className="admin-panel">
          <h3>Admin Controls</h3>
          <button>Manage Users</button>
          <button>System Settings</button>
        </div>
      )}
      
      {/* Conditional with array length */}
      {user && user.notifications?.length > 0 && (
        <div className="notifications">
          <h4>Recent Notifications</h4>
          {user.notifications.slice(0, 3).map(notification => (
            <div key={notification.id}>{notification.message}</div>
          ))}
        </div>
      )}
    </div>
  );
};

// Common patterns with &&
const ShoppingCart = ({ items, user, isOpen }) => {
  return (
    <div className="shopping-cart">
      {/* Show cart only when open */}
      {isOpen && (
        <div className="cart-dropdown">
          <h3>Shopping Cart</h3>
          
          {/* Show items or empty message */}
          {items.length > 0 ? (
            <div>
              {items.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
              <div className="cart-total">
                Total: ${items.reduce((sum, item) => sum + item.price, 0)}
              </div>
            </div>
          ) : (
            <p>Your cart is empty</p>
          )}
          
          {/* Show checkout only when logged in and has items */}
          {user && items.length > 0 && (
            <button className="checkout-btn">Proceed to Checkout</button>
          )}
        </div>
      )}
    </div>
  );
};
```

### 4. Switch Statements for Complex Conditions

```jsx
const ComponentSwitcher = ({ componentType, data }) => {
  const renderComponent = () => {
    switch (componentType) {
      case 'chart':
        return <ChartComponent data={data} />;
      case 'table':
        return <TableComponent data={data} />;
      case 'list':
        return <ListComponent data={data} />;
      case 'cards':
        return <CardGridComponent data={data} />;
      default:
        return <div>Unknown component type: {componentType}</div>;
    }
  };

  return (
    <div className="dynamic-content">
      <h2>Data Visualization</h2>
      {renderComponent()}
    </div>
  );
};
```

## Lists and Keys {#lists-keys}

### Why Keys Are Important

Keys help React identify which items have changed, been added, or removed. They should be stable, predictable, and unique among siblings.

```jsx
// ❌ BAD: Using array index as key (can cause bugs)
const BadExample = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
};

// ✅ GOOD: Using unique, stable identifier
const GoodExample = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};
```

### Key Generation Strategies

```jsx
const KeyStrategies = ({ data }) => {
  return (
    <div>
      {/* Strategy 1: Use unique ID */}
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}

      {/* Strategy 2: Combine multiple fields */}
      {data.map(item => (
        <div key={`${item.category}-${item.name}`}>
          {item.name}
        </div>
      ))}

      {/* Strategy 3: Use slug or unique string */}
      {data.map(item => (
        <div key={item.slug || `item-${item.id}`}>
          {item.name}
        </div>
      ))}

      {/* Strategy 4: Generate stable key for items without ID */}
      {data.map((item, index) => (
        <div key={item.uniqueProperty || `fallback-${item.name}-${index}`}>
          {item.name}
        </div>
      ))}
    </div>
  );
};
```

### Dynamic Lists with State

```jsx
const DynamicTodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: true },
  ]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all'); // all, active, completed

  const addTodo = () => {
    if (newTodo.trim()) {
      const todo = {
        id: Date.now(), // Simple ID generation
        text: newTodo,
        completed: false
      };
      setTodos([...todos, todo]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // 'all'
  });

  return (
    <div className="todo-app">
      <div className="add-todo">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a new todo..."
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <div className="filters">
        {['all', 'active', 'completed'].map(filterType => (
          <button
            key={filterType}
            onClick={() => setFilter(filterType)}
            className={filter === filterType ? 'active' : ''}
          >
            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
          </button>
        ))}
      </div>

      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {filteredTodos.length === 0 && (
        <p className="empty-state">
          {filter === 'all' 
            ? 'No todos yet. Add one above!' 
            : `No ${filter} todos.`}
        </p>
      )}
    </div>
  );
};
```

### Complex List Rendering

```jsx
const ComplexDataGrid = ({ data, groupBy, sortBy }) => {
  // Group data by specified field
  const groupedData = data.reduce((groups, item) => {
    const key = item[groupBy] || 'Ungrouped';
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {});

  // Sort groups and items within groups
  const sortedGroups = Object.entries(groupedData)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([groupName, items]) => ({
      groupName,
      items: [...items].sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'date') return new Date(b.date) - new Date(a.date);
        if (sortBy === 'price') return b.price - a.price;
        return 0;
      })
    }));

  return (
    <div className="data-grid">
      {sortedGroups.map(({ groupName, items }) => (
        <div key={groupName} className="group">
          <h3 className="group-header">
            {groupName} ({items.length})
          </h3>
          
          <div className="group-items">
            {items.map(item => (
              <div key={item.id} className="item-card">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                
                {/* Conditional rendering within lists */}
                {item.price && (
                  <span className="price">${item.price}</span>
                )}
                
                {item.tags && item.tags.length > 0 && (
                  <div className="tags">
                    {item.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
```

## Practice Questions (30+) {#practice-questions}

### Function Components vs Class Components (Questions 1-10)

**1. Q: What's the main difference between function and class components?**
A: Function components are JavaScript functions that return JSX and use Hooks for state/effects. Class components extend React.Component and use lifecycle methods. Function components are simpler and the modern preferred approach.

**2. Q: How do you convert this class component to a function component?**
```jsx
class Counter extends Component {
  state = { count: 0 };
  increment = () => this.setState({ count: this.state.count + 1 });
  render() {
    return <button onClick={this.increment}>{this.state.count}</button>;
  }
}
```
A: 
```jsx
const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return <button onClick={increment}>{count}</button>;
};
```

**3. Q: What are the advantages of function components over class components?**
A: Simpler syntax, better performance, easier testing, no `this` binding issues, Hooks provide more powerful state logic, smaller bundle size, and better tree shaking.

**4. Q: Can you use lifecycle methods in function components?**
A: No, but you can achieve the same functionality using Hooks like useEffect, useLayoutEffect, etc.

**5. Q: What's the equivalent of componentDidMount in function components?**
A: `useEffect(() => { /* mount logic */ }, [])`

**6. Q: How do you handle componentDidUpdate in function components?**
A: 
```jsx
useEffect(() => {
  // Update logic
}, [dependency]); // Runs when dependency changes
```

**7. Q: What's the performance difference between function and class components?**
A: Function components are slightly more performant because they don't need to create class instances, and React can optimize them better.

**8. Q: How do you access props in function vs class components?**
A: Function: `const MyComponent = (props) => { /* use props directly */ }`
Class: `class MyComponent extends Component { /* use this.props */ }`

**9. Q: Can you use React.memo with function components?**
A: Yes, `React.memo` is specifically for function components to prevent unnecessary re-renders.

**10. Q: What happens if you try to use setState in a function component?**
A: You'll get an error because setState doesn't exist. Use useState Hook instead.

### Function Chaining and Array Methods (Questions 11-20)

**11. Q: What does this chain return?**
```jsx
[1, 2, 3, 4, 5]
  .filter(n => n > 2)
  .map(n => n * 2)
  .reduce((sum, n) => sum + n, 0)
```
A: 18 (filters [3,4,5], maps to [6,8,10], reduces to 6+8+10=24)

**12. Q: How do you chain multiple array methods in React rendering?**
A:
```jsx
{data
  .filter(item => item.active)
  .sort((a, b) => a.name.localeCompare(b.name))
  .map(item => <div key={item.id}>{item.name}</div>)
}
```

**13. Q: What's wrong with this code?**
```jsx
const result = data.map(item => item.name).filter(name => name.length > 5);
```
A: Nothing wrong, but it could be more efficient as:
```jsx
const result = data.filter(item => item.name.length > 5).map(item => item.name);
```

**14. Q: How do you remove duplicates from an array in React?**
A:
```jsx
const unique = array.filter((item, index) => array.indexOf(item) === index);
// Or using Set
const unique = [...new Set(array)];
```

**15. Q: What's the difference between map() and forEach() in React?**
A: `map()` returns a new array (used for rendering), `forEach()` returns undefined (used for side effects).

**16. Q: How do you sort an array of objects by multiple criteria?**
A:
```jsx
data.sort((a, b) => {
  if (a.priority !== b.priority) return a.priority - b.priority;
  return a.name.localeCompare(b.name);
});
```

**17. Q: How do you group array data by a property?**
A:
```jsx
const grouped = data.reduce((groups, item) => {
  const key = item.category;
  if (!groups[key]) groups[key] = [];
  groups[key].push(item);
  return groups;
}, {});
```

**18. Q: What's the performance implication of chaining many array methods?**
A: Each method creates a new array, which can be inefficient for large datasets. Consider using a single reduce() or for...of loop for better performance.

**19. Q: How do you find and transform a specific item in an array?**
A:
```jsx
const updated = items.map(item => 
  item.id === targetId ? { ...item, ...updates } : item
);
```

**20. Q: How do you calculate the sum of a property in an array?**
A:
```jsx
const total = items.reduce((sum, item) => sum + item.price, 0);
```

### Conditional Rendering (Questions 21-30)

**21. Q: What are the three main ways to conditionally render in React?**
A: 1. If/else statements, 2. Ternary operator (?:), 3. Short-circuit evaluation (&&)

**22. Q: When should you use each conditional rendering method?**
A: 
- If/else: Complex conditions, early returns
- Ternary: Simple either/or scenarios
- &&: Show/hide elements based on conditions

**23. Q: What's wrong with this code?**
```jsx
{user && user.name && <div>Hello {user.name}</div>}
```
A: It's verbose. Better: `{user?.name && <div>Hello {user.name}</div>}`

**24. Q: How do you render different components based on user role?**
A:
```jsx
const renderByRole = () => {
  switch(user.role) {
    case 'admin': return <AdminPanel />;
    case 'user': return <UserPanel />;
    default: return <GuestPanel />;
  }
};
```

**25. Q: What happens if a condition renders `0`?**
A: React will render "0" on the page. Use `{items.length > 0 && <List />}` instead of `{items.length && <List />}`.

**26. Q: How do you conditionally add CSS classes?**
A:
```jsx
<div className={`base-class ${isActive ? 'active' : ''}`}>
// Or using classNames library
<div className={classNames('base-class', { active: isActive })}>
```

**27. Q: What's the difference between `null` and `undefined` in conditional rendering?**
A: Both render nothing in React, but `null` is explicit intention to render nothing, while `undefined` might indicate an error.

**28. Q: How do you handle loading states?**
A:
```jsx
if (loading) return <LoadingSpinner />;
if (error) return <ErrorMessage error={error} />;
if (!data) return <NoDataMessage />;
return <DataComponent data={data} />;
```

**29. Q: What's a common mistake with && operator?**
A: Forgetting that falsy values like 0, "", NaN render literally. Always use explicit boolean conditions.

**30. Q: How do you render lists conditionally?**
A:
```jsx
{items.length > 0 ? (
  <ul>
    {items.map(item => <li key={item.id}>{item.name}</li>)}
  </ul>
) : (
  <p>No items to display</p>
)}
```

### Lists and Keys (Questions 31-40)

**31. Q: Why are keys important in React lists?**
A: Keys help React identify which items have changed, been added, or removed. They enable efficient re-rendering by allowing React to match elements between renders, preserving component state and improving performance.

**32. Q: What makes a good key?**
A: A good key should be:
- Unique among siblings
- Stable (doesn't change between renders)
- Predictable (same item = same key)
- Preferably a unique ID rather than array index

**33. Q: When is it acceptable to use array index as a key?**
A: Only when:
- The list is static (never changes)
- Items are never reordered
- Items are never added/removed from middle
- You don't need to preserve component state

**34. Q: What happens if you don't provide keys?**
A: React will use array indices as keys by default, but you'll get a warning. This can cause performance issues and bugs with component state.

**35. Q: How do you generate keys for items without unique IDs?**
A:
```jsx
// Combine multiple unique properties
key={`${item.name}-${item.category}-${item.createdAt}`}

// Use a hash function
key={generateHash(JSON.stringify(item))}

// Create stable IDs when creating items
const newItem = { id: Date.now() + Math.random(), ...data };
```

**36. Q: What's wrong with this key generation?**
```jsx
{items.map((item, index) => (
  <div key={Math.random()}>{item.name}</div>
))}
```
A: `Math.random()` generates different keys on each render, causing React to recreate elements unnecessarily and losing component state.

**37. Q: How do you handle nested lists with keys?**
A:
```jsx
{categories.map(category => (
  <div key={category.id}>
    <h3>{category.name}</h3>
    {category.items.map(item => (
      <div key={`${category.id}-${item.id}`}>{item.name}</div>
    ))}
  </div>
))}
```

**38. Q: Can you use the same key in different list components?**
A: Yes, keys only need to be unique among siblings, not globally unique.

**39. Q: What happens when you change an item's key?**
A: React treats it as a completely different item, unmounting the old component and mounting a new one, losing any internal state.

**40. Q: How do you optimize rendering for large lists?**
A:
```jsx
// Use React.memo to prevent unnecessary re-renders
const ListItem = React.memo(({ item, onUpdate }) => (
  <div>{item.name}</div>
));

// Use virtualization for very large lists
import { FixedSizeList as List } from 'react-window';

const VirtualizedList = ({ items }) => (
  <List height={600} itemCount={items.length} itemSize={50}>
    {({ index, style }) => (
      <div style={style} key={items[index].id}>
        {items[index].name}
      </div>
    )}
  </List>
);
```

## Interview Questions {#interview-questions}

### Beginner Level

**1. Explain the difference between function and class components.**
Function components are JavaScript functions that return JSX and use Hooks for state and lifecycle features. Class components extend React.Component and use class methods and lifecycle methods. Function components are simpler, more performant, and the modern preferred approach in React.

**2. What is the purpose of keys in React lists?**
Keys help React identify which items have changed, are added, or are removed. They enable efficient reconciliation by allowing React to match elements between renders, preserving component state and improving performance by minimizing DOM manipulation.

**3. Show three ways to conditionally render a component.**
```jsx
// 1. If/else statement
if (condition) return <ComponentA />;
return <ComponentB />;

// 2. Ternary operator
{condition ? <ComponentA /> : <ComponentB />}

// 3. Short-circuit evaluation
{condition && <ComponentA />}
```

### Intermediate Level

**4. How would you convert this class component to a function component?**
```jsx
class UserList extends Component {
  state = { users: [], loading: true };
  
  componentDidMount() {
    this.fetchUsers();
  }
  
  fetchUsers = async () => {
    const users = await api.getUsers();
    this.setState({ users, loading: false });
  };
  
  render() {
    if (this.state.loading) return <div>Loading...</div>;
    return (
      <ul>
        {this.state.users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
}
```

**Answer:**
```jsx
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await api.getUsers();
      setUsers(users);
      setLoading(false);
    };
    
    fetchUsers();
  }, []);
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
```

**5. Explain the problem with using array indices as keys and provide a solution.**
Using array indices as keys can cause issues when:
- Items are reordered (wrong items receive updates)
- Items are added/removed from middle (state gets mixed up)
- Performance suffers from unnecessary re-renders

**Solution:**
```jsx
// Bad
{items.map((item, index) => <Item key={index} data={item} />)}

// Good - use unique, stable identifier
{items.map(item => <Item key={item.id} data={item} />)}

// If no ID exists, create one when adding items
const addItem = (newItemData) => {
  const newItem = {
    id: `${Date.now()}-${Math.random()}`, // or use uuid
    ...newItemData
  };
  setItems([...items, newItem]);
};
```

**6. How would you implement a search and filter system for a list?**
```jsx
const SearchableList = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  
  const filteredData = data
    .filter(item => {
      // Apply search
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      
      // Apply filter
      const matchesFilter = filter === 'all' || item.category === filter;
      
      return matchesSearch && matchesFilter;
    });
  
  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All Categories</option>
        <option value="tech">Tech</option>
        <option value="business">Business</option>
      </select>
      
      {filteredData.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};
```

### Advanced Level

**7. How would you optimize rendering for a large list with complex items?**
```jsx
import React, { memo, useMemo, useCallback } from 'react';
import { FixedSizeList as List } from 'react-window';

// Memoize individual list items
const ListItem = memo(({ item, onUpdate, onDelete }) => {
  const handleUpdate = useCallback(() => {
    onUpdate(item.id);
  }, [item.id, onUpdate]);
  
  const handleDelete = useCallback(() => {
    onDelete(item.id);
  }, [item.id, onDelete]);
  
  return (
    <div className="list-item">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
});

const OptimizedList = ({ data, onUpdate, onDelete }) => {
  // Memoize callback functions to prevent unnecessary re-renders
  const memoizedUpdate = useCallback(onUpdate, []);
  const memoizedDelete = useCallback(onDelete, []);
  
  // Use virtualization for very large lists
  const Row = ({ index, style }) => (
    <div style={style}>
      <ListItem
        item={data[index]}
        onUpdate={memoizedUpdate}
        onDelete={memoizedDelete}
      />
    </div>
  );
  
  return (
    <List
      height={600}
      itemCount={data.length}
      itemSize={120}
    >
      {Row}
    </List>
  );
};
```

**8. Implement a dynamic form builder that renders different input types based on a configuration.**
```jsx
const DynamicForm = ({ fieldConfig, onSubmit }) => {
  const [formData, setFormData] = useState({});
  
  const handleChange = useCallback((fieldName, value) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }));
  }, []);
  
  const renderField = useCallback((field) => {
    const commonProps = {
      key: field.name,
      value: formData[field.name] || '',
      onChange: (e) => handleChange(field.name, e.target.value)
    };
    
    switch (field.type) {
      case 'text':
        return <input type="text" {...commonProps} placeholder={field.placeholder} />;
      
      case 'email':
        return <input type="email" {...commonProps} placeholder={field.placeholder} />;
      
      case 'select':
        return (
          <select {...commonProps}>
            <option value="">Select {field.label}</option>
            {field.options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      
      case 'checkbox':
        return (
          <input
            type="checkbox"
            key={field.name}
            checked={formData[field.name] || false}
            onChange={(e) => handleChange(field.name, e.target.checked)}
          />
        );
      
      case 'textarea':
        return <textarea {...commonProps} rows={field.rows || 3} />;
      
      default:
        return <div>Unsupported field type: {field.type}</div>;
    }
  }, [formData, handleChange]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {fieldConfig.map(field => (
        <div key={field.name} className="form-field">
          <label>{field.label}</label>
          {renderField(field)}
          {field.required && <span className="required">*</span>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

// Usage
const formConfig = [
  { name: 'name', type: 'text', label: 'Name', required: true },
  { name: 'email', type: 'email', label: 'Email', required: true },
  { 
    name: 'country', 
    type: 'select', 
    label: 'Country',
    options: [
      { value: 'us', label: 'United States' },
      { value: 'ca', label: 'Canada' }
    ]
  },
  { name: 'newsletter', type: 'checkbox', label: 'Subscribe to newsletter' }
];
```

**9. How would you implement infinite scroll with a list?**
```jsx
const InfiniteScrollList = ({ fetchData }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  
  const observer = useRef();
  
  const lastItemRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });
    
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);
  
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const newItems = await fetchData(page);
        if (newItems.length === 0) {
          setHasMore(false);
        } else {
          setItems(prev => [...prev, ...newItems]);
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, [page, fetchData]);
  
  return (
    <div>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div
            key={item.id}
            ref={isLast ? lastItemRef : null}
            className="list-item"
          >
            {item.name}
          </div>
        );
      })}
      
      {loading && <div>Loading more...</div>}
      {!hasMore && <div>No more items to load</div>}
    </div>
  );
};
```

**10. Create a reusable component that handles complex list operations (sort, filter, paginate).**
```jsx
const useListOperations = (data, config = {}) => {
  const [filteredData, setFilteredData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState(null);
  const [filters, setFilters] = useState({});
  
  const { itemsPerPage = 10 } = config;
  
  // Apply filters
  const applyFilters = useCallback(() => {
    let filtered = [...data];
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value && value !== '') {
        filtered = filtered.filter(item => {
          const itemValue = item[key]?.toString().toLowerCase();
          const filterValue = value.toString().toLowerCase();
          return itemValue?.includes(filterValue);
        });
      }
    });
    
    return filtered;
  }, [data, filters]);
  
  // Apply sorting
  const applySorting = useCallback((data) => {
    if (!sortConfig) return data;
    
    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      
      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [sortConfig]);
  
  // Process data through filters and sorting
  useEffect(() => {
    const filtered = applyFilters();
    const sorted = applySorting(filtered);
    setFilteredData(sorted);
    setCurrentPage(1); // Reset to first page when data changes
  }, [data, filters, sortConfig, applyFilters, applySorting]);
  
  // Pagination
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, currentPage, itemsPerPage]);
  
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  
  const sort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev?.key === key && prev?.direction === 'asc' ? 'desc' : 'asc'
    }));
  };
  
  const filter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };
  
  const clearFilters = () => {
    setFilters({});
  };
  
  return {
    data: paginatedData,
    totalItems: filteredData.length,
    currentPage,
    totalPages,
    setCurrentPage,
    sort,
    sortConfig,
    filter,
    filters,
    clearFilters
  };
};

// Usage component
const AdvancedDataTable = ({ data, columns }) => {
  const {
    data: paginatedData,
    totalItems,
    currentPage,
    totalPages,
    setCurrentPage,
    sort,
    sortConfig,
    filter,
    filters,
    clearFilters
  } = useListOperations(data, { itemsPerPage: 10 });
  
  return (
    <div className="data-table">
      {/* Filters */}
      <div className="filters">
        {columns.map(column => (
          <input
            key={column.key}
            placeholder={`Filter by ${column.label}`}
            value={filters[column.key] || ''}
            onChange={(e) => filter(column.key, e.target.value)}
          />
        ))}
        <button onClick={clearFilters}>Clear Filters</button>
      </div>
      
      {/* Table */}
      <table>
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.key} onClick={() => sort(column.key)}>
                {column.label}
                {sortConfig?.key === column.key && (
                  <span>{sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map(item => (
            <tr key={item.id}>
              {columns.map(column => (
                <td key={column.key}>{item[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Pagination */}
      <div className="pagination">
        <button 
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        
        <span>{currentPage} of {totalPages} ({totalItems} items)</span>
        
        <button 
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
```

## Summary {#summary}

### Key Takeaways:

**Function Components:**
- Modern React standard using Hooks
- Simpler syntax and better performance
- No `this` binding complications
- Easier testing and debugging

**Function Chaining:**
- Powerful way to transform data using array methods
- Chain filter(), map(), sort(), reduce() for complex operations
- Consider performance implications with large datasets
- Makes code more readable and functional

**Conditional Rendering:**
- Three main approaches: if/else, ternary, short-circuit (&&)
- Choose method based on complexity and readability
- Be careful with falsy values in && operations
- Use early returns for cleaner code structure

**Lists and Keys:**
- Keys are essential for React's reconciliation process
- Use unique, stable identifiers rather than array indices
- Keys enable efficient re-rendering and preserve component state
- Consider performance optimizations for large lists

### Best Practices:

1. **Prefer Function Components** with Hooks over class components
2. **Use meaningful keys** - unique IDs over array indices
3. **Chain array methods efficiently** - filter before map when possible
4. **Choose appropriate conditional rendering** based on complexity
5. **Optimize large lists** with virtualization and memoization
6. **Handle edge cases** - empty lists, loading states, errors
7. **Use TypeScript** for better type safety with complex data structures

### Common Pitfalls:

- Using array index as keys in dynamic lists
- Forgetting that 0, "", false render literally with &&
- Not memoizing expensive operations in lists
- Creating new functions in render causing unnecessary re-renders
- Not handling loading and error states properly
- Overusing complex conditional logic instead of extracting to functions