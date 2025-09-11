/* eslint-disable no-unused-vars */
import React from 'react'

// JSX attributes define properties of elements, similar to HTML but with JavaScript integration and camelCase naming. They are passed to React.createElement as the props object.
// Syntax:
// Static: <div className="box">Text</div>
// Dynamic: <img src={imageUrl} alt={description} />

// Key Differences from HTML:
// CamelCase: class → className, onclick → onClick, for → htmlFor.
// Boolean Attributes: disabled={true} or shorthand disabled; disabled={false} omits the attribute.
// Custom Attributes: Use data- prefix (e.g., data-test="value").
// Expressions: Use {} for dynamic values (e.g., className={isActive ? 'active' : ''})


const src = "logo.png";
const isDisabled = false;

function Attributes() {
  return (
    <div>
    <img src={src} alt="Logo" data-id="123" />
    <button onClick={() => alert("Clicked")} disabled={isDisabled}>
      Click
    </button>
    <label htmlFor="input">Name</label>
    <input id="input" type="text" />
  </div>
  )
}

export default Attributes


// Special Attributes:
// key: For list rendering (e.g., <li key={id}>); not passed to component props.
// ref: For DOM access (e.g., <input ref={myRef} />).
// dangerouslySetInnerHTML: Sets raw HTML (avoid due to XSS risks).jsx

// <div dangerouslySetInnerHTML={{ __html: '<p>Risky</p>' }} />


// Children in JSX
<div>Welcome to React</div>
<section>
     <header>
          Header
     </header>
     <main>Main Content</main>
</section>
const items = ["Nasim","Reja"];
<ul>{items.map(items => <li key={items}>{items}</li>)}</ul>
// component children
function  Card({children}){
     return <div className='"card'>{children}</div>
}

<Card>
     <h2>Title</h2>
     <p>Content</p>
</Card>