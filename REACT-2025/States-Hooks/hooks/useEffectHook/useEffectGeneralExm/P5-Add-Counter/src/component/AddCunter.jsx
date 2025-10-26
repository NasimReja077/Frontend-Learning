import React, { useEffect, useState } from 'react'

export const AddCounter =()=> {
     const [students, setStudents] = useState(["Nasim","Reja","Mondal","Piku","Sam"])
     const [newUpdate, setNewUpdate] = useState(5)

     useEffect(() =>{
          if(newUpdate > 0){
               console.log("New Data Added!")
          }
     },[newUpdate])

     const addStudent = (name)=>{
          setStudents([
               ...students, name
          ])
          setNewUpdate(newUpdate + 1)
     }
  return (
    <div className='p-12'>
     <h1 className='text-4xl font-bold'>Student`s List - {newUpdate}</h1>
     <ul>
          {
               students.map((item, index) =>(
                    <li key={index}>{item}</li>
               ))
          }
     </ul>
     <button onClick={()=>addStudent("Student1")}>Add Student</button>
    </div>
  )
}