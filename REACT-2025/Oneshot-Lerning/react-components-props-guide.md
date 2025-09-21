# React Components & Props: Complete In-Depth Guide

## Table of Contents
1. [Components Overview](#components-overview)
2. [Functional Components](#functional-components)
3. [Class Components](#class-components)
4. [Props Deep Dive](#props-deep-dive)
5. [Advanced Component Patterns](#advanced-component-patterns)
6. [Best Practices](#best-practices)
7. [Practice Questions with Answers](#practice-questions)
8. [Interview Questions](#interview-questions)
9. [Summary](#summary)
10. [Project: Personal Dashboard](#project)

---

## Components Overview

### What are Components?
Components are the building blocks of React applications. They are reusable pieces of code that return JSX (JavaScript XML) to describe what should appear on the screen.

**Key Characteristics:**
- **Reusable**: Write once, use multiple times
- **Composable**: Combine to build complex UIs
- **Isolated**: Each component manages its own state and logic
- **Declarative**: Describe what the UI should look like

### Component Types
1. **Functional Components** (Modern, Preferred)
2. **Class Components** (Legacy, but still important to understand)

---

## Functional Components

### Basic Functional Component
```jsx
// Simple functional component
function Welcome() {
  return <h1>Hello, World!</h1>;
}

// Arrow function syntax
const Welcome = () => {
  return <h1>Hello, World!</h1>;
};

// Implicit return for simple JSX
const Welcome = () => <h1>Hello, World!</h1>;
```

### Component with Props
```jsx
function Greeting({ name, age = 25 }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
}

// Usage
<Greeting name="Alice" age={30} />
<Greeting name="Bob" /> // Uses default age of 25
```

### Functional Component with Hooks
```jsx
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser(userId).then(userData => {
      setUser(userData);
      setLoading(false);
    });
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
```

---

## Class Components

### Basic Class Component
```jsx
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}
```

### Class Component with Props and State
```jsx
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount || 0
    };
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// Usage
<Counter initialCount={10} />
```

### Component Lifecycle Methods
```jsx
class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null, loading: true };
  }

  componentDidMount() {
    this.fetchUser();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.fetchUser();
    }
  }

  componentWillUnmount() {
    // Cleanup
  }

  fetchUser = async () => {
    this.setState({ loading: true });
    const user = await api.getUser(this.props.userId);
    this.setState({ user, loading: false });
  };

  render() {
    const { user, loading } = this.state;
    
    if (loading) return <div>Loading...</div>;
    
    return (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    );
  }
}
```

---

## Props Deep Dive

### What are Props?
Props (properties) are read-only data passed from parent to child components. They enable components to be dynamic and reusable.

### Passing Props
```jsx
// Parent Component
function App() {
  const user = {
    name: 'Alice',
    age: 30,
    hobbies: ['reading', 'swimming']
  };

  return (
    <div>
      <UserCard 
        name={user.name}
        age={user.age}
        hobbies={user.hobbies}
        isOnline={true}
      />
    </div>
  );
}

// Child Component
function UserCard({ name, age, hobbies, isOnline }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Status: {isOnline ? 'Online' : 'Offline'}</p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
```

### Props Destructuring
```jsx
// Object destructuring in parameters
function ProductCard({ name, price, description, onAddToCart }) {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>${price}</p>
      <p>{description}</p>
      <button onClick={() => onAddToCart(name)}>
        Add to Cart
      </button>
    </div>
  );
}

// Destructuring in function body
function ProductCard(props) {
  const { name, price, description, onAddToCart } = props;
  // ... rest of component
}
```

### Default Props
```jsx
// Modern approach with default parameters
function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick = () => {} 
}) {
  return (
    <button 
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// Legacy approach with defaultProps
Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  onClick: () => {}
};
```

### PropTypes Validation
```jsx
import PropTypes from 'prop-types';

function UserProfile({ name, age, email, hobbies, onEdit }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <ul>
        {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
      </ul>
      <button onClick={onEdit}>Edit Profile</button>
    </div>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  email: PropTypes.string.isRequired,
  hobbies: PropTypes.arrayOf(PropTypes.string),
  onEdit: PropTypes.func.isRequired
};
```

### Children Prop
```jsx
// Card component that wraps other content
function Card({ children, title, className = '' }) {
  return (
    <div className={`card ${className}`}>
      {title && <div className="card-header">{title}</div>}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

// Usage
function App() {
  return (
    <Card title="User Information" className="user-card">
      <p>Name: John Doe</p>
      <p>Email: john@example.com</p>
      <button>Edit Profile</button>
    </Card>
  );
}
```

### Props Drilling Problem
```jsx
// Props drilling - passing props through multiple levels
function App() {
  const user = { name: 'Alice', theme: 'dark' };
  
  return <Dashboard user={user} />;
}

function Dashboard({ user }) {
  return (
    <div>
      <Header user={user} />
      <Sidebar user={user} />
    </div>
  );
}

function Header({ user }) {
  return <Navigation user={user} />;
}

function Navigation({ user }) {
  return (
    <nav className={`nav nav-${user.theme}`}>
      <span>Welcome, {user.name}</span>
    </nav>
  );
}

// Solution: Context API or State Management
import { createContext, useContext } from 'react';

const UserContext = createContext();

function App() {
  const user = { name: 'Alice', theme: 'dark' };
  
  return (
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
}

function Navigation() {
  const user = useContext(UserContext);
  
  return (
    <nav className={`nav nav-${user.theme}`}>
      <span>Welcome, {user.name}</span>
    </nav>
  );
}
```

---

## Advanced Component Patterns

### Higher-Order Components (HOCs)
```jsx
// HOC for adding loading functionality
function withLoading(WrappedComponent) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div className="loading">Loading...</div>;
    }
    
    return <WrappedComponent {...props} />;
  };
}

// Usage
const UserProfileWithLoading = withLoading(UserProfile);

// In parent component
<UserProfileWithLoading 
  isLoading={loading}
  user={user}
  onEdit={handleEdit}
/>
```

### Render Props Pattern
```jsx
// Mouse tracker with render props
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return render(position);
}

// Usage
function App() {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <div>
          <p>Mouse position: ({x}, {y})</p>
          <div 
            style={{
              position: 'absolute',
              left: x,
              top: y,
              width: 10,
              height: 10,
              backgroundColor: 'red'
            }}
          />
        </div>
      )}
    />
  );
}
```

### Compound Components
```jsx
// Accordion compound component
function Accordion({ children, ...props }) {
  return <div className="accordion" {...props}>{children}</div>;
}

function AccordionItem({ children, isOpen = false }) {
  const [open, setOpen] = useState(isOpen);
  
  return (
    <div className="accordion-item">
      {React.Children.map(children, child =>
        React.cloneElement(child, { open, setOpen })
      )}
    </div>
  );
}

function AccordionHeader({ children, open, setOpen }) {
  return (
    <div 
      className="accordion-header"
      onClick={() => setOpen(!open)}
    >
      {children}
      <span>{open ? '−' : '+'}</span>
    </div>
  );
}

function AccordionContent({ children, open }) {
  return open ? (
    <div className="accordion-content">{children}</div>
  ) : null;
}

// Compound pattern usage
function App() {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionHeader>Section 1</AccordionHeader>
        <AccordionContent>Content for section 1</AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader>Section 2</AccordionHeader>
        <AccordionContent>Content for section 2</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```

### Lists and Keys
```jsx
// Proper key usage for lists
function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id} // Use unique, stable identifier
          todo={todo}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </ul>
  );
}

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
      />
      <span>{todo.text}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

// Avoid using array index as key when order can change
// Bad example:
{todos.map((todo, index) => (
  <TodoItem key={index} todo={todo} /> // Don't do this!
))}
```

---

## Best Practices

### 1. Component Naming and Organization
```jsx
// Use PascalCase for component names
function UserProfile() { /* ... */ }

// Use descriptive names
function ProductCardWithActions() { /* ... */ } // Good
function Card() { /* ... */ } // Too generic

// Organize by feature
src/
  components/
    common/
      Button/
        Button.jsx
        Button.test.js
        Button.module.css
    user/
      UserProfile/
        UserProfile.jsx
        UserProfile.test.js
```

### 2. Props Best Practices
```jsx
// Use object destructuring for props
function UserCard({ name, email, avatar, isOnline }) {
  // Good: Clear what props are expected
}

function UserCard(props) {
  // Avoid: Less clear, harder to track dependencies
}

// Use specific prop names
function Button({ onClick, isDisabled, variant }) {
  // Good: Specific and clear
}

function Button({ handler, disabled, type }) {
  // Confusing: 'type' could mean many things
}
```

### 3. Component Composition
```jsx
// Good: Small, focused components
function Header() {
  return (
    <header>
      <Logo />
      <Navigation />
      <UserMenu />
    </header>
  );
}

function Logo() {
  return <img src="/logo.png" alt="Company Logo" />;
}

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
    </nav>
  );
}
```

### 4. State vs Props Guidelines
```jsx
// Props: Data passed from parent
function UserProfile({ user, onEdit }) {
  // user comes from parent - it's props
}

// State: Data managed within component
function UserProfile({ user, onEdit }) {
  const [isEditing, setIsEditing] = useState(false); // Internal state
  
  return (
    <div>
      {isEditing ? (
        <EditForm user={user} onSave={onEdit} />
      ) : (
        <DisplayUser user={user} onEdit={() => setIsEditing(true)} />
      )}
    </div>
  );
}
```

---

## Practice Questions with Answers

### Question 1: Basic Component Creation
**Q:** Create a functional component called `ProductCard` that accepts `name`, `price`, and `description` as props and displays them in a card format.

**Answer:**
```jsx
function ProductCard({ name, price, description }) {
  return (
    <div className="product-card">
      <h3 className="product-name">{name}</h3>
      <p className="product-price">${price}</p>
      <p className="product-description">{description}</p>
    </div>
  );
}

// Usage example
function App() {
  return (
    <ProductCard
      name="Wireless Headphones"
      price={99.99}
      description="High-quality wireless headphones with noise cancellation"
    />
  );
}
```

### Question 2: Default Props and PropTypes
**Q:** Enhance the `ProductCard` component with default props and prop validation.

**Answer:**
```jsx
import PropTypes from 'prop-types';

function ProductCard({ 
  name, 
  price, 
  description = 'No description available',
  currency = 'USD',
  onAddToCart
}) {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>{currency === 'USD' ? '$' : '€'}{price}</p>
      <p>{description}</p>
      <button onClick={() => onAddToCart(name)}>
        Add to Cart
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  currency: PropTypes.oneOf(['USD', 'EUR']),
  onAddToCart: PropTypes.func.isRequired
};

ProductCard.defaultProps = {
  description: 'No description available',
  currency: 'USD'
};
```

### Question 3: Component Composition
**Q:** Create a reusable `Modal` component that uses the children prop to display any content.

**Answer:**
```jsx
function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose} className="close-button">×</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
}

// Usage
function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="User Profile"
      >
        <p>Name: John Doe</p>
        <p>Email: john@example.com</p>
        <button>Edit Profile</button>
      </Modal>
    </div>
  );
}
```

### Question 4: Lists and Keys
**Q:** Create a `BookList` component that renders a list of books with proper key usage.

**Answer:**
```jsx
function BookList({ books, onBookSelect }) {
  if (!books || books.length === 0) {
    return <p>No books available</p>;
  }

  return (
    <div className="book-list">
      {books.map(book => (
        <BookItem
          key={book.id} // Use unique ID, not array index
          book={book}
          onClick={() => onBookSelect(book)}
        />
      ))}
    </div>
  );
}

function BookItem({ book, onClick }) {
  return (
    <div className="book-item" onClick={onClick}>
      <h3>{book.title}</h3>
      <p>by {book.author}</p>
      <p>{book.genre}</p>
      <span className="price">${book.price}</span>
    </div>
  );
}

// Usage
function App() {
  const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", price: 12.99 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", price: 14.99 }
  ];

  const handleBookSelect = (book) => {
    console.log('Selected book:', book.title);
  };

  return <BookList books={books} onBookSelect={handleBookSelect} />;
}
```

---

## Interview Questions

### Beginner Level

**Q1: What is the difference between props and state?**
**Answer:**
- **Props**: Read-only data passed from parent to child components. They are immutable within the receiving component.
- **State**: Mutable data managed within a component. Changes to state trigger re-renders.

```jsx
// Props example
function ChildComponent({ message }) { // message is props
  return <p>{message}</p>; // Cannot modify message here
}

// State example
function ParentComponent() {
  const [count, setCount] = useState(0); // count is state
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**Q2: Why are keys important in React lists?**
**Answer:**
Keys help React identify which items have changed, been added, or removed. They should be unique and stable.

```jsx
// Good: Using unique ID
{items.map(item => <Item key={item.id} data={item} />)}

// Bad: Using array index (can cause issues when list order changes)
{items.map((item, index) => <Item key={index} data={item} />)}
```

### Intermediate Level

**Q3: What are Higher-Order Components (HOCs)?**
**Answer:**
HOCs are functions that take a component and return a new component with additional functionality.

```jsx
function withAuth(WrappedComponent) {
  return function AuthenticatedComponent(props) {
    const { isAuthenticated } = useContext(AuthContext);
    
    if (!isAuthenticated) {
      return <LoginPrompt />;
    }
    
    return <WrappedComponent {...props} />;
  };
}

// Usage
const ProtectedProfile = withAuth(UserProfile);
```

**Q4: Explain the concept of "lifting state up".**
**Answer:**
When multiple components need to share state, you move the state to their closest common ancestor.

```jsx
function App() {
  const [count, setCount] = useState(0); // Lifted state
  
  return (
    <div>
      <Display count={count} />
      <Controls onIncrement={() => setCount(count + 1)} />
    </div>
  );
}

function Display({ count }) {
  return <h2>Count: {count}</h2>;
}

function Controls({ onIncrement }) {
  return <button onClick={onIncrement}>+</button>;
}
```

### Advanced Level

**Q5: What are Compound Components and when would you use them?**
**Answer:**
Compound components work together to form a cohesive UI. They provide a flexible API while maintaining internal coordination.

```jsx
// Flexible API that allows users to compose as needed
<Select value={value} onChange={setValue}>
  <SelectTrigger>
    <SelectValue placeholder="Select option..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

**Q6: How do you optimize component re-renders?**
**Answer:**
- Use `React.memo()` for functional components
- Use `useMemo()` and `useCallback()` hooks
- Split components to isolate state changes
- Avoid creating objects/functions in render

```jsx
// Memoized component
const ExpensiveComponent = React.memo(({ data, onUpdate }) => {
  return <div>{/* expensive rendering */}</div>;
});

// In parent component
function Parent() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({});
  
  // Memoize callback to prevent unnecessary re-renders
  const handleUpdate = useCallback((newData) => {
    setData(newData);
  }, []);
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <ExpensiveComponent data={data} onUpdate={handleUpdate} />
    </div>
  );
}
```

---

## Summary

### Key Takeaways

1. **Components are the Foundation**: Everything in React is a component. Master component creation and composition.

2. **Functional Components are Preferred**: Modern React heavily favors functional components with hooks over class components.

3. **Props Enable Reusability**: Props make components flexible and reusable by allowing data to be passed from parent to child.

4. **Composition Over Inheritance**: React follows composition patterns rather than class inheritance.

5. **Key Principles**:
   - **Single Responsibility**: Each component should do one thing well
   - **Reusability**: Write components that can be used in multiple contexts
   - **Predictability**: Props in, UI out
   - **Maintainability**: Keep components small and focused

6. **Common Patterns**:
   - Container/Presentational components
   - Higher-Order Components
   - Render Props
   - Compound Components

7. **Performance Considerations**:
   - Use proper keys for lists
   - Memoize expensive operations
   - Avoid inline objects/functions in props

### React Component Mental Model
```
Props (Input) → Component Logic → JSX (Output)
     ↓              ↓              ↓
  Read-only    Processing &     Virtual DOM
   Data        State Updates    Representation
```

---

## Project: Personal Dashboard

Let's build a comprehensive personal dashboard that demonstrates all the concepts we've covered. This project will include multiple components, props passing, list rendering, and advanced patterns.

The dashboard will feature:
- User profile display
- Task management
- Weather widget  
- Recent activities feed
- Settings panel

This project demonstrates:
- ✅ Functional components
- ✅ Props passing and validation
- ✅ Component composition
- ✅ Lists and keys
- ✅ State management
- ✅ Higher-order components
- ✅ Compound components
- ✅ Best practices

The code structure shows real-world React patterns and demonstrates how to build maintainable, reusable components that work together to create a cohesive application.