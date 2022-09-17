// import logo from './logo.svg';
import ringBride from './assets/ring-bride.png';
import ringGroom from './assets/ring-groom.png';
import './App.css';
import * as Journey from './journey';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='ring-container'>
          <img src={ringGroom} className="App-logo" alt="logo" Style="margin-right: -175px;" />
          <img src={ringBride} className="App-logo-right" alt="logo" />
        </div>
        <br />
        <button type="button" className="btn btn-dark" onClick={signupRequest}>Subscribe to Wedding Updates</button>
        <br />
        <div>

        </div>
        <a href="https://zola.com/wedding/alex-y-travis" target="_blank" rel="noreferrer">
          <button type="button" className="btn btn-dark">Visit Our Official Wedding Site</button>
        </a>
        <br />
        <button type="button" className="btn btn-dark">Download Wedding Guide (PDF)</button>
      </header>
    </div>
  );
}

async function signupRequest() {
  console.log('sending signup request..');
  await Journey.get();
}

// function showSubscriptionForm() {

// }


export default App;
