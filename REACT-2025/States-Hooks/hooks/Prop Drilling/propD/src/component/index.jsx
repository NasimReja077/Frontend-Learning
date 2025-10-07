export const ParentComponent = () =>{
     return(
          <section >
               <h1>Component A</h1>
               <ChildComponent data="React JS" />
          </section>
     )
}

const ChildComponent = (props) =>{
     return(
          <>
               <h1>Hello, I am Component B</h1>
               <GrandChildComponent data={props.data} />
          </>
     )
}


const GrandChildComponent = (props) =>{
     return(
          <>
               <h1>Hello, I am Component C</h1>
               <GrandGrandChildComponent data={props.data} />
          </>
     )
}


const GrandGrandChildComponent = (props) =>{
     return(
          <>
               <h1>Hello, I am Love {props.data}</h1>
               <br />
               <h2>And This Is Prop Drilling Exgample</h2>
               <br />
               <h4>Prop drilling refers to the practice of passing data through several layers of nested components in React, even though intermediate components don't directly utilize this data. This means that a middle component doesn't necessarily need the data, but it must still pass it down to the next component, creating an unnecessary and sometimes lengthy chain of props.</h4>
          </>
     )
}