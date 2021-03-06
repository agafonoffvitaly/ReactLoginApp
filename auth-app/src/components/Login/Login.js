import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React from 'react';
import './Login.css';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({setToken}) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className="login-wrapper">
    <h1>Please Log In</h1>
          <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted" onChange={e=>setUserName(e.target.value)}>
                      We'll never share your email with anyone else.
                  </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}
              <Button variant="primary" type="submit">
                  Submit
              </Button>
          </Form>
   </div>
    
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }