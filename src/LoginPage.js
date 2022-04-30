
import './LoginPage.css';
import { Link,useNavigate } from "react-router-dom";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import { unstable_HistoryRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import login from './login.png';
import React, {useState} from 'react';


import  swal from 'sweetalert';

function App() {
  let history = useNavigate();
  const [user,setuser] = useState('')
  const [pass,setPass]= useState('')
  const [load,setload]= useState(false)

  const handleValidate=(e)=>{
    e.preventDefault()
   if (user == 'anojan@gmail.com' && pass== 123456){
    setload(true)
    history('/main');
    
   }else{
    swal("Wrong Credentials","Please try again","error")
   }
  
  }
    return (
      <div className = "App-header" >
        <h1> Welcome Authentication Portal</h1>
        <br/>
        <br/>
        <br/>
       <div className="row">
         <div className="col-md-6">

           <img  align="right"  src={login} width="500"  />
         </div>
         <div className="col-md-6 ">
         <form onSubmit={handleValidate}>
  <div className="mb-3 my-auto bg-dark p-5 rounded ">
    <label  className="form-label">Email address</label>
    <input type="email" value={user} className="form-control" placeholder="Enter email" onChange={(e)=> setuser(e.target.value)}  />
    <div/>
    
  <div className="mb-3 ">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" value={pass} className="form-control" placeholder="Enter password" onChange={(e)=> setPass(e.target.value)}/>
  </div>
  {}
  <button type="submit" className="btn btn-primary" >
    click</button>
  </div>
</form>

         </div>
       </div>
     
         </div>
    );
}

export default App;