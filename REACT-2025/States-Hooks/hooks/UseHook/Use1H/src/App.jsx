import { BioProvider } from "./component"
import { About } from "./component/About"
import { Home } from "./component/Home"
import { Services } from "./component/Services"



export const App = () => {

  return(
    <>
    <BioProvider>
      <Home />
      <About />
      <Services />
    </BioProvider>
    {/* <Services /> */}
    </>
  )
}

// In the Context API, the data provided by a context can only be accessed by the components that are its children within the component tree. This means that any component that needs access to the context data must be a descendant of the provider component that supplies the context value.