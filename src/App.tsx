import './App.css'
import Footer from './components/footer/Footer'
import Menu from './components/menu/Menu'
import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import './styles/global.scss';

function App() {

  return (
    <>
      <h1>hello world</h1>
    </>
  )
}

export const Layout = () => {
  return (
    <div className='main'>
      <Navbar />
      <div className='container'>
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />  
          </div>
      </div>
      <Footer />
    </div>
  )
}



export default App
