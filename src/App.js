import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button type="button" class="btn btn-dark">Subscribe to Wedding Updates (👋 Recommended)</button>
        <br />
        <button type="button" class="btn btn-dark">Visit Our Official Wedding Site</button>
        <br />
        <button type="button" class="btn btn-dark">Download Wedding Guide (PDF)</button>
      </header>
    </div>
  );
}

export default App;
