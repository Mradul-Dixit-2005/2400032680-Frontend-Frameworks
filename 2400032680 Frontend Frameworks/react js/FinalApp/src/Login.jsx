import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Dummy demo credentials
  const demoCreds = {
    student: 'password123',
    faculty: 'password123'
  };

  const handleLogin = () => {
    if (demoCreds[username] === password) {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-bg">
      <div className="login-box">
        <h1>Student Record Management System</h1>
        <p>Manage your academic journey efficiently</p>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Sign In</button>
        <div style={{marginTop:'15px'}}>
          <b>Demo Credentials:</b>
          <br/>Student: <span>student/password123</span>
          <br/>Faculty: <span>faculty/password123</span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
