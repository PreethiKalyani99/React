import { createContext, Suspense, lazy } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import UseStateHook from './UseState';
import { UseContextHook } from './UseContext';
import { UseReducerHook } from './UseReducer';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useConsoleLog } from './customHook';
import InstaPost from '../src/InstagramPost/InstaPost';
import WeatherMap from '../src/WeatherApp/WeatherMap';
import StopWatch from '../src/UseRef';
import { Alert, DeleteButton } from './AlertPopup';


export const globalProp = createContext(null)
// const StopWatch = lazy(() => import ('../src/UseRef'))


function App() {
  let isDarkModeOn = true
  useConsoleLog(isDarkModeOn, "modesd", 'slkdfjs')
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <globalProp.Provider value='Preethi'>
          <nav className='navigation'>
            <Link to='/stopwatch' className='me-4'>StopWatch</Link>
            <Link to='/instapost' className='me-4'>Insta Post</Link>
            <Link to='/weathermap'>Weather Map</Link>
          </nav>
          <Routes>
            <Route path='/' element={<UseReducerHook/>}/>
            <Route path='/state' element={<UseStateHook/>} />
            <Route path='/context' element={<UseContextHook/>} />
            <Route path='/stopwatch' element={<StopWatch/>} />
            <Route path='/instapost' element={<InstaPost/>} />
            <Route path='/weathermap' element={<WeatherMap/>} />
          </Routes>
          {/* <Alert>
            <h4>Alert</h4>
            <p>Do you really want to delete this ?</p>
            <DeleteButton/>
          </Alert> */}
        </globalProp.Provider>
      </Suspense>
    </Router>
      
  )
}

export default App;
