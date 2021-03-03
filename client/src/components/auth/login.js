import React, { useState, useEffect } from 'react';
// import App from '../../App';
// import { ReactComponent as Logo } from '';
import TextField from "@material-ui/core/TextField"
import { useHistory, Link } from "react-router-dom";
import { signin, authenticate, isAuth } from "../../actions/auth";
import './login.css';
// import PropTypes from 'prop-types';
import Alert from "@material-ui/lab/Alert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    signin({ email, password })
      .then((res) => {
        if (res.error) {
          setError(res.error);
        } else {
          authenticate(res, () => {
            console.log(res);
            setError("");
            setSuccess("Login success");
            history.push("/");
          });
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (isAuth()) {
      history.push("/");
    }
  }, [history]);

  return (
    <div className="login">
      <div className="login__box">
        <center>

        </center>
        <h2>Sign In</h2>
        <br />
        <p>
          to continue to <b>YourView</b>
        </p>
        {error && (
          <Alert severity="error" style={{ marginLeft: "15px" }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" style={{ marginLeft: "15px" }}>
            {success}
          </Alert>
        )}
        <br />
        <form onSubmit={handleSubmit}>
          <TextField
            style={{ width: "90%", marginLeft: "20px", marginBottom: "15px" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            type="email"
            variant="outlined"
          />
          <TextField
            style={{ width: "90%", marginLeft: "20px" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
          />
          <br />
          <br />
          <Link to="/signup" style={{ textDecoration: "none", color: "blue" }}>
            Create account
          </Link>
          <input type="submit" name="sign-in" value="Sign In" />
        </form>
      </div>
    </div>
  );
};

export default Login;
// async function loginUser(credentials) {
//   return fetch('http://localhost:3001/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(credentials)
//   })
//     .then(data => data.json())
// }

// export default function Login({ setToken }) {
//   const [username, setUserName] = useState();
//   const [password, setPassword] = useState();

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const token = await loginUser({
//       username,
//       password
//     });
//     setToken(token);
//   }

//   return (
//     <div className="login-wrapper">
//       <h1>Please Log In</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <p>Username</p>
//           <input type="text" onChange={e => setUserName(e.target.value)} />
//         </label>
//         <label>
//           <p>Password</p>
//           <input type="password" onChange={e => setPassword(e.target.value)} />
//         </label>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// Login.PropTypes = {
//   setToken: PropTypes.func.isRequired
// }

