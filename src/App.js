import './App.css';
import * as Journey from './journey';
import { useState } from 'react';

let signupRequest;
let analyticsRequest;

function Form({ showSignupForm, evalSignupResponse }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [signupPending, setShowSignupPending] = useState(false);
  
  function toggleSignupPending() {
    setShowSignupPending(!signupPending);
  }
  
  return <div>
    <br />
    <input type="text" value={name} onChange={e=> setName(e.target.value)} placeholder="Name" class="input input-bordered w-full max-w-xs" />
    <input type="text" value={email} onChange={e=> setEmail(e.target.value)} placeholder="Email" class="input input-bordered w-full max-w-xs" />
    <input type="text" value={phone} onChange={e=> setPhone(e.target.value)} placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
    <br />
    <div>
      <button
        className={signupPending ? 'btn loading' : 'btn'}
        loading={signupPending ? true : undefined}
        onClick={() => {
          toggleSignupPending();
          submitForm(name, email, phone, setShowSignupPending, evalSignupResponse);
          showSignupForm(false)
        }}
      >
        SUBMIT
      </button>
    </div>
  </div>
}


async function submitForm(name, email, phone, showLoading, response) {
  console.log('sending signup request..');
  signupRequest = await Journey.sendSubscriptionRequest({
    name: name,
    email: email,
    phone: phone
  });
  showLoading();
  if (signupRequest.ok) {
    console.log('signup error');
    response(false);
    return response;
  } else {
    console.log('signup success');
    response(true);
    return response;
  }
}

async function sendAnalytics(button) {
  console.log('sending analytics..');
  analyticsRequest = await Journey.updateAnalytics({
    button_pressed: button
  });
  if (analyticsRequest.ok) {
    console.log('analytics error');
  } else {
    console.log('analytics success');
  }
}

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showSignupResponse, setSignupResponse] = useState(null);
  
  function weddingSiteClick() {
    sendAnalytics('website');
    window.open("https://zola.com/wedding/alex-y-travis", "_blank", 'noopener,noreferrer');
  }

  // <field name="website" label="Website Button" type="integer" />
  //       <field name="subscribe" label="Subscribe Button" type="integer" />
  //       <field name="rsvp" label="RSVP Button" type="integer" />
  //       <field name="wedding_guide" label="Wedding Guide Button" type="integer" />
  //       <field name="map" label="Map Button" type="integer" />
  //       <field name="contact" label="Contact Button" type="integer" />

  function showSignupForm() {
    sendAnalytics('subscribe');
    setShowModal(!showModal);
  }
  
  function evalSignupResponse() {
    setSignupResponse(!showSignupResponse);
  }
  
  function mapLink() {
    setShowMap(!showMap);
  }

  function openRSVP() {
    sendAnalytics('rsvp');
    window.open('https://zola.com/wedding/alex-y-travis/rsvp', "_blank", 'noopener,noreferrer');
  }

  function openContact() {
    sendAnalytics('contact');
    window.open('mailto:alexandtravis2023@gmail.com', "_blank", 'noopener,noreferrer');
    // window.location.href = "mailto:alexandtravis2023@gmail.com";
  }
  
  function openPDF() {
    sendAnalytics('wedding_guide');
    window.open('./alex-y-travis-wedding-guide.pdf');
  }
  
  const openInNewTab = () => {
    sendAnalytics('map');
    const newWindow = window.open("./alex-y-travis-wedding-map.jpg", '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const onClickUrl = () => openInNewTab();

  return (
    <div className="App">
      <header className="App-header">
        <div className='ring-container'>
          <img className="mask mask-circle" src="./t-a2.png" alt='main' />
        </div>
        <div className='button-group'>
          <button type="button" className="btn btn-dark btn-custom-width" onClick={weddingSiteClick}>Visit Our Official Wedding Site</button>
          <div>
            <button type="button" className="btn btn-dark btn-custom-width" onClick={showSignupForm}>Subscribe to Wedding Updates</button>
            {
              showSignupResponse === true ? (
                <div className="alert alert-success shadow-lg mt-4">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Signup Successful! Stay tuned...</span>
                  </div>
                </div>
                ) :
              showSignupResponse === false ? (
                <div className="alert alert-error shadow-lg mt-4">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Signup Error! Please contact Alex & Travis</span>
                  </div>
                </div>
              ) :
              (<></>)
            }
            {showModal ? (<Form showSignupForm={showSignupForm} evalSignupResponse={evalSignupResponse} />) : (<></>)}
          </div>
          {/* <a href="https://zola.com/wedding/alex-y-travis/rsvp" target="_blank" rel="noreferrer">
          </a> */}
          <button type="button" className="btn btn-dark btn-custom-width" onClick={openRSVP}>RSVP - Direct Link</button>
          <button type="button" className="btn btn-dark btn-custom-width" onClick={openPDF}>Download Wedding Guide</button>
          {/* <button type="button" className="btn btn-dark btn-custom-width" onClick={onClickUrl}>Download Activity Map</button> */}
          {/* <a href="mailto:alexandtravis2023@gmail.com" target="_blank" rel="noreferrer">
          </a> */}
          <button type="button" className="btn btn-dark btn-custom-width" onClick={openContact}>Contact Us</button>
        </div>
      </header>
    </div>
  );
}

export default App;
