import { useState } from "react"


export const ContactForm = () => {
     // const [username, setUsername] = useState("");
     // const [email, setEmail] = useState("");
     // const [message, setMessage] = useState("");

     const [contacts, setContacts] = useState({
          username: "",
          email: "",
          message: "",
     });
     const handleInputChange = (e) => {
          const { name, value} = e.target;
          setContacts((prev) => ({
               ...prev,
               [name]: value,
          }));
     };

     const handleFromSubmit = (e) => {
          e.preventDefault();
          // const contactData = {
          //      username,
          //      email,
          //      message,
          // };
          // console.log(contactData);

          console.log(contacts);
     };

     return(
          <div className="flex justify-center items-center min-h-screen bg-gray-100 container ">
               <div className="bg-white shadow-xl rounded-2xl p-8 w-96">

                    <h1 className="text-2xl font-bold text-center mb-6 text-blue-600" >Contact Form</h1>

                    <form onSubmit={handleFromSubmit} className="flex flex-col space-y-4">

                         <label htmlFor="username" className="text-sm font-semibold text-gray-700 mb-1">
                              UserName
                         </label>
                         <input type="text" name="username" required autoComplete="off"
                         value={contacts.username}
                         // onChange={(e) => setUsername(e.target.value)}
                         onChange={handleInputChange}
                         className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />

                         <label htmlFor="password" className="text-sm font-semibold text-gray-700 mb-1" >Email</label>
                         <input type="email"name="email" required autoComplete="off"
                         value={contacts.email}
                         // onChange={(e) => setEmail(e.target.value)}
                         onChange={handleInputChange}
                          className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />

                         <label htmlFor="message">Message</label>
                         <textarea 
                         type="password"
                         name="message" 
                         required autoComplete="off" 
                         rows="7"
                         className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                         value={contacts.message}
                         // onChange={(e) => setMessage(e.target.value)}
                         onChange={handleInputChange}
                         ></textarea>

                         <button
                         type="submit"
                         className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200">
                              Submit
                         </button>
                    </form>
               </div>
          </div>
     )
}