// import './App.css';
// import { useState } from 'react'
// import './counter.css';
//  function Login() {
//    const [name, setName] = useState("")
//    const [password, setPassword] = useState("")
//    const [error, setError] = useState("")
//    const handleClick = (e) => { e.preventDefault(); if(!(name && password)) {setError('please enter the name and password')}}
//    return (
//      <div className="app">

//        <h1>
//        LOGIN        </h1>
//        <lable>Username</lable>
//        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
//        <lable>Password</lable>
//        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
//        <button onClick={(e) => handleClick(e)}>Login</button>
//        <a>Forgot Password? </a> {error && <div style={{ color: "red" }} > {error}</div>}
//      </div>);
//  }

//   export default Login;