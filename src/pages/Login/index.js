import React , {useState}from "react";
import { Card, Form, Input, Button, Error } from '../../Components/AuthForm';
import axios from 'axios';
import { useAuth } from "../../context/auth";
import {Redirect} from 'react-router-dom'

function Login(props) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();
    function postLogin() {
        axios.post("/v1/login", {
          username,
          password
        }).then(result => {
          if (result.status === 200) {
            setAuthTokens(result.data);
            setLoggedIn(true);
          } else {
            setIsError(true);
          }
        }).catch(e => {
          setIsError(true);
        });
      }
      if (isLoggedIn) {
        return <Redirect to={'/'} />;
      }
  return (
    <Card>
         <h3>ADMIN LOGIN</h3>
      <Form>
        
        <Input
          type="username"
          value={username}
          onChange={e => {
            setUsername(e.target.value);
          }}
          placeholder="email"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <Button onClick={postLogin}>Sign In</Button>
      </Form>
        { isError &&<Error>The username or password provided were incorrect!</Error> }
    </Card>
  );
}

export default Login;