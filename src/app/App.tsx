
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainPage } from '../pages/mainPage/ui/MainPage'
import { ProjectPage } from '../pages/projectPage'
import { Topbar } from '../widgets/topbar'
import '../App.css'

const App = () => {

  return (
    <Router>
      <Topbar />
      <div className="home__images">
        <div className="home__img"><img src="./src/assets/bg-gadgets.jpg" alt="backgraund img" /></div>
        <div className="home__img"></div>
        <div className="home__img"><img src="./src/assets/bg-instr.jpg" alt="backgraund img" /></div>
      </div>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/projects' element={<ProjectPage />} />
        </Routes>
    </Router>
  )
}

export default App
