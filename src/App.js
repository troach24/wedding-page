import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button type="button" className="btn btn-dark">Subscribe to Wedding Updates (👋 Recommended)</button>
        <br />
        <a href="https://zola.com/wedding/alex-y-travis" target="_blank" rel="noreferrer">
          <button type="button" className="btn btn-dark" onClick={test}>Visit Our Official Wedding Site</button>
        </a>
        <br />
        <button type="button" className="btn btn-dark">Download Wedding Guide (PDF)</button>
      </header>
    </div>
  );
}

function test() {
  console.log('TEST');
}

export default App;
