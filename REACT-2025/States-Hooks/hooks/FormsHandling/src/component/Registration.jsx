// The Hard Way // not do that way //bade pactice

//* Registration from using multiple state variables
//? Set up a functional component in React.

//? Create five separate state variables (firstName, lastName, email, password, phoneNumber).

//? Create input fields for each piece of information.

//? Implement onChange handlers to update state variables.

//? Discuss the benefits and drawbacks of this approach.
import React, { useState } from 'react'

export const Registration = () => {
     // state vareabel
     const [firstName, setFirstname] = useState("");
     const [lastName, setLastName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [phoneNumber, setPhoneNumber] = useState("");

     const handleInputChange =(e)=> {

          const { name, value } = e.target;
          switch(name){
               case "firstName":
                    setFirstname(value);
                    break;
               case "lastName":
                    setLastName(value);
                    break;
               case "email":
                    setEmail(value);
                    break;
               case "password":
                    setPassword(value);
                    break;
               case "phone":
                    setPhoneNumber(value);
                    break;
               
               
          }

          // setFirstname(e.target.value);
          // setLastName(e.target.value);
          // setEmail(e.target.value);
          // setPassword(e.target.value);
          // setPhoneNumber(e.target.value);



     }
     const handleFormSubmit = (event) =>{
          event.preventDefault();
          const formData = {
               firstName,
               lastName,
               email,
               password,
               phoneNumber,
          };
          console.log(formData);
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
               name='firstName' 
               placeholder='Enter Your FirstName'
               required
               value={firstName}
               onChange={handleInputChange}
               />
               <label htmlFor="lastName">
                    <b>Last Name</b>
               </label>
               <input 
               type='text' name='lastName' 
               placeholder='Enter Your LastName'
               required
               value={lastName}
               onChange={handleInputChange}
               />
               <label htmlFor="email">
                    <b>Email</b>
               </label>
               <input 
               type="text" placeholder='Enter Your Email' 
               naame="email" required 
               value={email}
               onChange={handleInputChange}
               />
               <label htmlFor="password">
                    <b>Password</b>
               </label>
               <input type="password" placeholder='Enter youer Password'
               name='password'
               required
               value={password}
               onChange={handleInputChange}
               />
               <label htmlFor='phone'>
                    <b>Phone Number</b>
               </label>
               <input type='phone' name='phone' place="9123456789" required value={phoneNumber} onChange={handleInputChange}/>
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
                    {firstName}{lastName}
               </span>
               my Email is <span>{email}</span> and my phone number is <span>{phoneNumber}</span>
          </p>
     </section>
     </>
     )
}