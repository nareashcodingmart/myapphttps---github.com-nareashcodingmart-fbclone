import axios from 'axios';
import React, { useState } from 'react'

const Sigup = () => {
 let [data,setData]=useState(
  {name:"",
  password:""
 }
 );
 const fun=(e)=>{
  const newdata={...data};
  newdata[e.target.id]=e.target.value;
   setData(newdata);
   console.log(newdata);
  // console.log(e.target.value,e.target.id)
 }
async function callapi(e){
  e.preventDefault();
    console.log("call.....api",data);
   let res=await axios.post('http://localhost:8080/signup',data);
  //  let r= await res.json();
  //  .then(res=>console.log(res)).catch(err=>console.log(err))
  if(res.status===201){
    console.log("success",res);
    console.log(res.data.message)
  }
  

 }
  return (
    <form onSubmit={(e)=>callapi(e)}>
      <input  onChange={(e)=>fun(e)} id="name" value={data.name} placeholder='name' type="text"/>
      <input onChange={(e)=>fun(e)} id="password"  value={data.password} placeholder='password' type="password"/>
      <button> submit</button>
    </form>
  )
}

export default Sigup
