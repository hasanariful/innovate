import Banner from "./Components/Layouts/Banner"
import Blog from "./Components/Layouts/Blog"
import Footer from "./Components/Layouts/Footer"
import Navbar from "./Components/Layouts/Navbar"
import Process from "./Components/Layouts/Process"
import Review from "./Components/Layouts/Review"
import Service from "./Components/Layouts/Service"
import Who from "./Components/Layouts/Who"
import Work from "./Components/Layouts/Work"


function App() {


  return (
    <>
     <Navbar/>
     <Banner/>
     <Service/>
     <Who/>
     <Work/>
     <Process/>
     <Review/>
     <Blog/>
     <Footer/>
    </>
  )
}

export default App
