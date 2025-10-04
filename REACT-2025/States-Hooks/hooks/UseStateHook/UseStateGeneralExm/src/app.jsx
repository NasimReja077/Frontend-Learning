import { Ex11ToggleProfileInfo } from "./component/Ex11ToggleProfileInfo";
import { Ex16ThemeToggle } from "./component/Ex16ThemeToggle";
import { Ex1HideImage } from "./component/Ex1HideImage";
import { Ex2Counter2 } from "./component/Ex2Counter2";
import { Ex9TextColorChanger } from "./component/Ex9TextColorChanger";
// import { Ex2Counter } from "./component/Ex2Counter";

export const App =()=>{
  return (
    <>
    <Ex1HideImage />
    <Ex11ToggleProfileInfo />
    <Ex16ThemeToggle />
    {/* <Ex2Counter /> */}
    <Ex2Counter2 />
    <Ex9TextColorChanger />
    </>
  )
}