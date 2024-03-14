import { createContext, useContext } from 'react';
import './App.css';
import UseStateHook from './UseState';
import { UseContextHook } from './UseContext';
import { UseReducerHook } from './UseReducer';
import { UseRefHook, StopWatch } from './UseRef';
import { UseRefForm } from './UseRefForm';
import { Route, Routes, Link } from 'react-router-dom';
import { Calculator } from './Calculator';
import { Player } from './ReactPlayerPackage';
import { SongSelection } from './SongSelection';
import { InstaPost } from './InstagramPost/InstaPost';
import { CalculatorUsingReducer } from './CalculatorUsingReducer';
import { WeatherMap } from './WeatherApp/WeatherMap';
import { useConsoleLog } from './customHook';

export const globalProp = createContext(null)

function App() {
  let isDarkModeOn = true
  function handleClick(){
    
    isDarkModeOn = !isDarkModeOn
    if(isDarkModeOn){
      console.log("Dark mode on")
    }
    else{
      console.log('Light mode on')
    }
  }
  useConsoleLog(isDarkModeOn, "modesd", 'slkdfjsak')
  return (
    <>
    <globalProp.Provider value='Preethi'>
    {/* <SongSelection/> */}
    {/* <Player/> */}
    {/* <Calculator/> */}
    {/* <CalculatorUsingReducer/> */}
      <nav>
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
    {/* <UseRefForm/> <br/>
    <UseRefHook /> <br/> */}
    {/* {isDarkModeOn ? <h1>Dark mode on</h1> : <h1>Light mode on</h1>}
    {console.log("asflkd")}
    <button onClick={handleClick}>Click me</button> */}
    </globalProp.Provider>
    </>
  )
}

export default App;
