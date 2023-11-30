import './App.css';
import {Routes, Route} from 'react-router-dom';
import WelcomePage from './Components/Welcome/WelcomePage';
import BgAnimation from './Components/AnimationPage/BgAnimation';


function App() {

  return (
    <>
      <Routes>
        <Route path='/'  element={<WelcomePage />}></Route>
        <Route path='/animation' element={<BgAnimation />}></Route>
      </Routes>
    </>
  )

}

export default App;
