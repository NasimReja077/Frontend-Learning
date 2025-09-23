/* Using Object State with Spread Operator
//todo Tasks:
//? Refactor the registration form to use a single object (formData) as the initial state.
//? Update input fields to use object properties.
//? Use the spread operator to update the form data state efficiently.
//? Discuss the benefits of using object state over multiple state variables.
*/


import React, { useState } from 'react'
export const RegistrationForm2 = () => {
     // one state vareable and initial value convert to object (key, value)
     const [user, setUser] = useState({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          phoneNumber: "",
     });

     const handleInputChange =(e)=> {
          const { name, value } = e.target;
          // setUser((prev) => ({...prev, name: value})); 

          //(prev) => {...} is an arrow function that receives the previous state as a parameter (prev)

          // The {...prev} is using the spread operator to create a new object that copies all properties from the previous state

          // , name: value} adds or updates the name property with the new value
          // but we exgest thig valu update then we creat dinamic
          setUser((prev) => ({...prev, [name]: value}));
          // [name]: value uses computed property syntax to dynamically update a property 
          // When this runs with name="email" and value="new@example.com"

          // when [name] this is not mach with formData then creat new propaty if mach this propaty then update

     };

     const handleFormSubmit = (event) =>{
          event.preventDefault();
          console.log(user);
     };
     return(
     <>
     <form onSubmit={handleFormSubmit}>
          <div className='container'>
               <h1>Sign Up</h1>
               <p>Please fill in this to create an account.</p>
               
               <label htmlFor="firstName">
                    <b>First name</b>
               </label>
               
               <input 
               type='text' 
               name='firstName'  /* name attribute */
               placeholder='Enter Your FirstName'
               required
               value={user.firstName}
               onChange={handleInputChange}
               />
               <label htmlFor="lastName">
                    <b>Last Name</b>
               </label>
               <input 
               type='text' name='lastName' 
               placeholder='Enter Your LastName'
               required
               value={user.lastName}
               onChange={handleInputChange}
               />
               <label htmlFor="email">
                    <b>Email</b>
               </label>
               <input 
               type="text" placeholder='Enter Your Email' 
               name="email" required 
               value={user.email}
               onChange={handleInputChange}
               />
               <label htmlFor="password">
                    <b>Password</b>
               </label>
               <input type="password" placeholder='Enter youer Password'
               name='password'
               required
               value={user.password}
               onChange={handleInputChange}
               />
               <label htmlFor='phone'>
                    <b>Phone Number</b>
               </label>
               <input type='phone' name='phoneNumber' place="9123456789" required value={user.phoneNumber} onChange={handleInputChange}/>
               <p>By Creating an account youagree to our
                    <a href="#" text-color="pink">Terms & Privacy</a>
               </p>
               <div>
                    <button type='submit' >Sign Up</button>
               </div>
          </div>
     </form> 
     <section>
          <p>
               Hellow , My Name Is
               <span>
                    {user.firstName}{user.lastName}
               </span>
               my Email is <span>{user.email}</span> and my phone number is <span>{user.phoneNumber}</span>
          </p>
     </section>
     </>
     )
}