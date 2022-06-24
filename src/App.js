import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <div className='mainContainer'>
        <Counter startvalue={10} increase={1}/>
        <Counter increase={20} />
        <Counter startvalue={5} />
      </div>
    </div>
  );
}

export default App;
