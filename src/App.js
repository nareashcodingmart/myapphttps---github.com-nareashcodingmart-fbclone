import { useState } from 'react';
import './login.css';
import logo from './fblogin.svg';
function App() {
  const [emailfocus, setEmailfocus] = useState(false)
  const [passwordfocus, setPasswordfocus] = useState(false)
 
//   useEffect( ()=>{
//     const getUserdata= async()=>{
//         const reqData= await fetch("http://localhost:8080/login");
//        const resData= await reqData.json();
//        console.log(reqData);
//     }
//     // getUserdata();
// },[]);
// const getUserdata= async()=>{
//   let email=document.getElementsByName("id");
//   const reqData= await fetch("http://localhost:8080/signup");
//     alert("hiii");
    // let res = await fetch("http://localhost:8080/signup", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     name: email[0],
    //     password:email[1]
    //   }),
    // });
    // // let resJson = await res.json();
    // if (res.status === 200) {
    //   console.log("sucess");
    // } 
// }
  return (
    
    <div id="outer">
      
      <div id="leftcontainer">
        <img src={logo} alt="logo" />
        <h2>Facebook helps you connect and share with the people in your life.</h2>
      </div>
      <div id="rightcontainer">

        <form action='/signup' method='POST' >
          <input onFocus={() => setEmailfocus(true)}
            onBlur={() => setEmailfocus(false)}
            id={emailfocus ? "active" : ""}
            type="text" placeholder='Email address or phone number' name='name'></input>


          <input onFocus={() => setPasswordfocus(true)}
            onBlur={() => setPasswordfocus(false)}
            id={passwordfocus ? "active" : ""}
             name="password" type="password" placeholder='Password'></input>

          <button id="logbutton" type="submit">Log in </button>
          <a href=" ">Forgotten password?</a>
          <div id="line"></div>
          <button id="createbutton">Create new account</button>
        </form>
        <div id="page"><b>Create a Page</b> for a celebrity, brand or business.</div>
      </div>
    </div>
  );
}

export default App;
