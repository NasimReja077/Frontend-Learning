import { Outlet, useNavigation } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { Lodding } from './Loading'
// Create Global Loading States in React Using React Router & useNavigation
const AppLayout =()=> {
  const navigation = useNavigation() //useNavigate is defarent //useNavigate is funtion
  console.log(navigation);
  if (navigation.state === "loading") return <Lodding />
  return (
    <>
    <Header />
    <Outlet/>
    <Footer />
    </>
  )
}

export default AppLayout
