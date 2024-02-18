import './App.css';

function Greeting(props){
  // console.log(props)
  return <div className='container'>Hello {props.name}</div>
}

function App() {
  var viewportWidth  = document.documentElement.clientWidth;
var viewportHeight = document.documentElement.clientHeight;
console.log(viewportHeight,viewportWidth)
  return <Greeting name= "Preethi"/>
}

export default App;
