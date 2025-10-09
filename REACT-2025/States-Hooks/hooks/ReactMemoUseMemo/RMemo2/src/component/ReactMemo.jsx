import { useState } from "react";
import { Counts } from "./MemoCount";
import { useMemo } from "react";

export const ReactMemo2 = () => {
  const [count, setCount] = useState(0);

  const myBiodata = useMemo(() =>{
    return{
      name: "Bonku",
      age: 30,
    }
  },[]);
  return (
    <>
      <div className="p-4 h-52 font-display tracking-wider flex-col justify-end items-center ">
        <h1>{count}</h1>
        <button
          className="btn bg-cyan-500 py-1 px-3"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment
        </button>
      </div>
      <Counts bioData={myBiodata} />
    </>
  );
};