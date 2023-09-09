import './App.css'
import Counter from './counter';
import Friends from './Friends';
import Team from './Team';
import Users from './User';

function App() {

  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 = () =>{
    alert('button click 2')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h1>React core concepts 2</h1> 
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      {/* <button onclick="handleClick">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>    
      <button onClick={handleClick2}>Click Me</button>    
      <button onClick={() => alert('third clicked')}>Click Me</button>  
        {/* vejailla */}
      <button onClick={() => addToFive(3)}>Four</button>    
    </>
  )
}

export default App
