import { useState } from 'react';
import './login.css';
import logo from './fblogin.svg';
function App() {
  const [emailfocus, setEmailfocus] = useState(false)
  const [passwordfocus, setPasswordfocus] = useState(false)
  const getvalue=()=>{
    let a=document.getElementsByName("id");
    console.log(a[0].value,a[1].value);
    alert(a[0].value+" "+a[1].value);
  }
  return (
    <div id="outer">
      <div id="leftcontainer">
        <img src={logo} alt="logo" />
        <h2>Facebook helps you connect and share with the people in your life.</h2>
      </div>
      <div id="rightcontainer">

        <form >
          <input onFocus={() => setEmailfocus(true)}
            onBlur={() => setEmailfocus(false)}
            id={emailfocus ? "active" : ""}
            type="text" placeholder='Email address or phone number' name='id'></input>


          <input onFocus={() => setPasswordfocus(true)}
            onBlur={() => setPasswordfocus(false)}
            id={passwordfocus ? "active" : ""}
             name="id" type="password" placeholder='Password'></input>

          <button id="logbutton" onClick={getvalue} >Log in </button>
          <a href="">Forgotten password?</a>
          <div id="line"></div>
          <button id="createbutton">Create new account</button>
        </form>
        <div id="page"><b>Create a Page</b> for a celebrity, brand or business.</div>
      </div>
    </div>
  );
}

export default App;
