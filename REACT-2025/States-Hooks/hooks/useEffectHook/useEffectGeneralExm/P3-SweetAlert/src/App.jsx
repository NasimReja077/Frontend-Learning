// import { SweetAlertExample } from "./component/SweetAlertExample"
import { CardWithLoginPopup } from "./component/CardWithLoginPopup"
import DeleteConfirmAlert from "./component/DeleteConfirmAlert"
import { InfoPopup } from "./component/InfoPopup"

import { SuccessPopup } from "./component/SuccessPopup"
import { ThemeToggleAlert } from "./component/ThemeToggleAlert"


const App =()=> {
  return (
    <>
    {/* <SweetAlertExample/> */}
    <ThemeToggleAlert />
    <DeleteConfirmAlert />
    <SuccessPopup />
    <InfoPopup />
    <CardWithLoginPopup/>
    </>
  )
}

export default App