import React, { useState } from 'react';
import axios from 'axios';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Page reload rokta hai
    try {
      const response = await axios.post('https://your-backend-api-url/login', {
        username,
        password
      });
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token); // Token save karo
        alert('Login successful!');
        // Yahan redirect ya koi action kar sakte hain
      } else {
        alert('Login failed: ' + response.data.message);
      }
    } catch (error) {
      alert('Error logging in: ' + error.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Username or Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>Log In</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '320px',
    margin: '100px auto',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '10px',
    backgroundColor: '#0056b3',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default LoginPage;
