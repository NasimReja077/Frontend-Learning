import { ChaiCard } from "./component/ChaiCard"

const App =()=> {
  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <ChaiCard name={"Ipad"} price={15000} />
        <ChaiCard name={"Iphone"} price={30000} />
        <ChaiCard name={"Macbook"} price={80000} />
      </div>
    </>
  )
}

export default App
