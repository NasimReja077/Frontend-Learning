/* eslint-disable no-unused-vars */
// React does not render **`false`**, **`null`**, **`undefined`**, or **`NaN`** in the DOM. These values, when used in JSX, will result in nothing being displayed.

// ---

// However, **`0`** and empty strings (`""`) are exceptions:

// * **`0`** is rendered in the DOM because it is considered a valid React node. This means that if `0` is the result of an expression, it will appear in your UI.
// * **Empty strings** (`""`) are also considered valid nodes and are rendered as well.


import React from 'react'

function Interview() {
     // const students = [];
     const students = [5,6];

     return (
     <>
     {/* <p>{students.length && "No students found"}</p> */}
     {/* 1st */}
     {/* <p>{students.length === 0 && "No students found"}</p> */}
     {/* 2nd */}
     {/* <p>{!students.length && "No students found"}</p> */}
     {/* 3rd */}
     <p>{!Boolean(students.length) && "No Student found"}</p>
     <p>Number of students: {students.length}</p>
    </>
  );
}

export default Interview
