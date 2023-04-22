import logo from './logo.svg';
import './App.css';
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect } from 'react';
import LoginForm from './Login Page/loginform';


const clientId = "98463902310-vtjcv56ij03cduro13bj2mdjm2bvul5l.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    function start() {
     gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
   gapi.load('client:auth2', start);
  });
  return (
    <div className="page">
      <LoginForm/>
    </div>
  );
}

export default App;
