import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const storedEmail = localStorage.getItem('userEmail');
      const storedPassword = localStorage.getItem('userPassword');
     if (email === storedEmail && password === storedPassword) {
  setError('');
  localStorage.setItem('loggedInEmail', email);   // ← yeh line add karo
  navigate('/dashboard');
}else {
        setError('Invalid credentials');
      }
    }, 700);
  };

  return (
    <div style={{ width: '100%' }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: 20,
        color: '#222',
        fontWeight: 600,
        fontSize: '1.25rem'
      }}>
        Student Portal Login
      </h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{
            width: '100%',
            padding: 10,
            marginBottom: 13,
            borderRadius: 4,
            border: '1px solid #ccc',
            background: '#333',
            color: '#fff',
            fontSize: '1rem'
          }}
        />
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{
            width: '100%',
            padding: 10,
            borderRadius: 4,
            border: '1px solid #ccc',
            background: '#333',
            color: '#fff',
            fontSize: '1rem',
            marginBottom: '10px'
          }}
        />
        <button
          type="button"
          onClick={() => setShowPassword(prev => !prev)}
          style={{
            margin: '8px 0',
            backgroundColor: '#eee',
            border: 'none',
            padding: '8px 0',
            cursor: 'pointer',
            borderRadius: '4px',
            color: '#333',
            width: '100%',
            fontWeight: 600
          }}
        >
          {showPassword ? 'Hide' : 'Show'} Password
        </button>
        {error && <p style={{ color: 'red', margin: '8px 0 0 0' }}>{error}</p>}
        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: 12,
            backgroundColor: '#43b043',
            border: 'none',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '4px',
            marginTop: '14px',
            fontSize: '1.05rem',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}
export default Login;
