// import logo from './logo.svg';
import ringBride from './assets/ring-bride.png';
import ringGroom from './assets/ring-groom.png';
import './App.css';
import * as Journey from './journey';
import { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  return <div>
    <br />
    <input type="text" value={name} onChange={e=> setName(e.target.value)} placeholder="Name" class="input input-bordered w-full max-w-xs" />
    <input type="text" value={email} onChange={e=> setEmail(e.target.value)} placeholder="Email" class="input input-bordered w-full max-w-xs" />
    <input type="text" value={phone} onChange={e=> setPhone(e.target.value)} placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
    <br />
    <div>
      <button class="btn" onClick={() => submitForm(name, email, phone)}>SUBMIT</button>
    </div>
  </div>
}

async function submitForm(name, email, phone) {
  console.log('sending signup request..');
  await Journey.sendSubscriptionRequest({
    name: name,
    email: email,
    phone: phone
  });
}

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showMap, setShowMap] = useState(false);

  function showSignupForm() {
    setShowModal(!showModal);
  }
  
  function mapLink() {
    setShowMap(!showMap);
  }

  function openPDF() {
    window.open('./alex-y-travis-wedding-guide.pdf');
  }

  function openMap() {
    // window.open('./alex-y-travis-wedding-map.jpg');
    window.open('./alex-y-travis-wedding-map.jpg', '_blank', 'noopener,noreferrer');
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className='ring-container'>
          {/* <img src={ringGroom} className="App-logo" alt="logo" Style="margin-right: -175px;" />
          <img src={ringBride} className="App-logo-right" alt="logo" /> */}
          {/* <img className="mask mask-circle" src="./t-a.jpg" alt='main' /> */}
          <img className="mask mask-circle" src="./t-a2.png" alt='main' />
          {/* <img className="mask mask-circle" src="./TRAVIS_ALEX-11.png" alt='main' /> */}
          {/* <img className="mask mask-circle" src="./TRAVIS_ALEX-22.png" alt='main' /> */}
          {/* <img className="mask mask-circle" src="./TRAVIS_ALEX-30.png" alt='main' /> */}
          {/* <img className="mask mask-circle" src="./TRAVIS_ALEX-31.png" alt='main' /> */}
          {/* <img className="mask mask-circle" src="./TRAVIS_ALEX-35.png" alt='main' /> */}
          {/* <img className="mask mask-circle" src="./TRAVIS_ALEX-84.png" alt='main' /> */}
        </div>
        <br />
        <button type="button" className="btn btn-dark" onClick={showSignupForm}>Subscribe to Wedding Updates</button>
        {showModal ? (<Form />) : (<></>)}
        <br />
        <a href="https://zola.com/wedding/alex-y-travis" target="_blank" rel="noreferrer">
          <button type="button" className="btn btn-dark">Visit Our Official Wedding Site</button>
        </a>
        <br />
        <button type="button" className="btn btn-dark" onClick={openPDF}>Download Wedding Guide PDF</button>
        <br />
        {/* <button type="button" className="btn btn-dark" onClick={() => openMap()}>Download Activity Map</button> */}
      </header>
    </div>
  );
}

export default App;
