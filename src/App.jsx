import NavBar from "./Components/NavBar"
import SideBar from "./Components/SideBar"
import MobilePage from "./Pages/MobilePage"


function App() {
 

  return (
    <>
    <div className=" w-full">
      <NavBar/>
    </div>

    <div className="h-full w-full flex ">
      <SideBar/>
      <MobilePage/>
    </div>
    
    
    </>
  )
}

export default App
