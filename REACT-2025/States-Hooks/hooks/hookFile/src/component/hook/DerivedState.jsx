/* eslint-disable no-unused-vars */
 
 import { useState } from "react";
 
const users = [
     {name: "Nasim", age: 23},
     {name: "Reja", age: 25},
     {name: "Joi", age: 22},
     {name: "Bob", age: 20},
]


// with-out useState
// export const DerivedState = () =>{
//      return(
//           <div>
//                <h1>Users List</h1>
//                <ul>
//                     {users.map((curElem, index) =>( 
//                          <li key={index}>
//                               {curElem.name} - {curElem.age} year old
//                          </li>
//                     ))}
//                </ul>
//           </div>
//      )
// }


// with useState
// useState with Objects

export const DerivedState = () =>{
     const [users, setUsers] = useState([
          {name: "Nasim", age: 23},
          {name: "Reja", age: 25},
          {name: "Joi", age: 24},
          {name: "Joi", age: 22},
          {name: "Bob", age: 20},]
     );

     // Derived stsate: count of users
     console.log(users);
     const userCount = users.length; // userCount this varial is called Derived stsate // this valu toltal depand on state and propes this patuculer vareal call Derived stsate
     const averageAge = 
     (users.reduce((accum, curElem) => accum + curElem.age, 0)) / userCount ;



     // Js part
     // reduce((accumulator, currentValue)
     // arr.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
     return(
          <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Users List</h1>
               <ul className="space-y-2">
                    {users.map((curElem, index) =>( 
                         <li key={index} className="text-lg">
                              {curElem.name} - {curElem.age} year old
                         </li>
                    ))}
               </ul>
               <p className="mt-4 text-blue-600 font-semibold">
        Total Users: {userCount}
      </p>
      <p className="text-green-600 font-semibold">
        Average Age: {averageAge}
      </p>
          </div>
     )
}

// note
//useState([]) -> why emptey array
//ouer users is arrayOfaObject [{}] that resen we are use [] in useState // it {}, "",numbers, etc

/**
 * What is Derived State in React?
Derived state is any state that can be computed based on other state or props. It is not stored directly in the component's state but is calculated when needed. This approach helps avoid duplication and keeps the state simpler and more manageable.

Ex: const userCount = users.length;

Benefits of Derived State
Avoid Redundancy: By deriving values from existing state, you avoid storing redundant data.

Consistency: Ensures that derived values are always in sync with the underlying state or props.

Simplicity: Reduces the complexity of state management by minimizing the number of state variables.
 */





// import { useState } from "react";

// const initialUsers = [
//   { name: "Nasim", age: 23 },
//   { name: "Reja", age: 25 },
//   { name: "Joi", age: 22 },
//   { name: "Bob", age: 20 },
// ];

// export const DerivedState = () => {
//   const [users, setUsers] = useState(initialUsers);

//   const sortByAge = () => {
//     const sortedUsers = [...users].sort((a, b) => a.age - b.age);
//     setUsers(sortedUsers);
//   };

//   const filterAdults = () => {
//     const filteredUsers = initialUsers.filter((user) => user.age > 21);
//     setUsers(filteredUsers);
//   };

//   const resetList = () => {
//     setUsers(initialUsers);
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-10 p-6 bg-gray-100 rounded-xl shadow-lg">
//       <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
//         Users List
//       </h1>

//       <div className="flex justify-center gap-4 mb-6">
//         <button
//           onClick={sortByAge}
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//         >
//           Sort by Age
//         </button>
//         <button
//           onClick={filterAdults}
//           className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
//         >
//           Show Age &gt; 21
//         </button>
//         <button
//           onClick={resetList}
//           className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
//         >
//           Reset
//         </button>
//       </div>

//       <ul className="space-y-3">
//         {users.map((curElem, index) => (
//           <li
//             key={index}
//             className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md"
//           >
//             <span className="font-medium text-gray-700">{curElem.name}</span>
//             <span className="text-gray-500 text-sm">
//               {curElem.age} years old
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
