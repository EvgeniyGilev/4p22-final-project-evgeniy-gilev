import './App.css';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello world!</h1>
        <div className="App-cardContainer">
          <Card />
          <Card />
          <Card />
        </div>
      </header>
    </div>
  );
}

export default App;
