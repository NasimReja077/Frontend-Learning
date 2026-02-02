import { ECard } from "./component/ECard"
import { Counter } from "./component/Counter"
import type { ItemCard } from "./types"
import { ItemList } from "../src/component/ItemList"
import { OrderForm } from "./component/OrderForm"
import { Cards } from "./component/Cards"
import { WeatherDisplay } from "./component/WeatherDisplay"

const menu: ItemCard[] = [
  {id: 1, name: "Ipad", price: 15000},
  {id: 2, name: "Iphone", price: 30000},
  {id: 3, name: "Macbook", price: 80000},
]
const App =()=> {
  return (
    <>
      <div>
        <h1>Vite + React + TS</h1>
        <ECard name={"8TB RAM"} price={5000} />
        <ECard name={"Phone"} price={15000} />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <ItemList items={menu}/>
      </div>
      <div>
        <OrderForm 
        onSubmit={(order) => {
          console.log("Placed", order.name, order.itemos);
        }}
        />
      </div>
      <div>
        <Cards title="React with Typescript" footer={<button>Order Now</button>}/>
      </div>
      <div>
        <WeatherDisplay />
      </div>
    </>
  )
}

export default App
