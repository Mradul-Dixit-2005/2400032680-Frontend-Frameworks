import React, { useState } from 'react';

function Register({ onRegister }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('Student');
  const [studentId, setStudentId] = useState('');
  const [semester, setSemester] = useState('');
  const [department, setDepartment] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePhone = (phone) => /^\d{10}$/.test(phone);

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (
      !username || !email || !fullName || !studentId ||
      !semester || !department || !phone || !password || !confirmPassword
    ) {
      setError('All fields are required');
      return;
    }
    if (!validateEmail(email)) {
      setError('Invalid email');
      return;
    }
    if (password.length < 6) {
      setError('Password should be at least 6 characters');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!validatePhone(phone)) {
      setError('Phone must be 10 digits');
      return;
    }

    localStorage.setItem(
      'user',
      JSON.stringify({
        username, email, fullName, role, studentId, semester, department, phone, password,
      })
    );

    setSuccess('Registration successful! Please login.');
    setUsername('');
    setEmail('');
    setFullName('');
    setRole('Student');
    setStudentId('');
    setSemester('');
    setDepartment('');
    setPhone('');
    setPassword('');
    setConfirmPassword('');
    if (onRegister) onRegister();
  };

  // FullPage background style
  return (
    <div style={{
      minHeight: "100vh",
      minWidth: "100vw",
      background: 'linear-gradient(115deg, #ad1deb .5%, #6e72fc 29%, #f857a6 86%, #ff5858 97%)',
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Inter, Arial, sans-serif"
    }}>
      <div
        style={{
          width: 410,
          padding: '36px 28px 22px 28px',
          background: 'rgba(64, 25, 82, 0.27)',
          borderRadius: 22,
          boxShadow: '0 8px 36px 2px rgba(55,16,99,0.13)',
          backdropFilter: 'blur(18px)',
          border: '1.5px solid rgba(255,255,255,0.13)',
          color: '#fff',
          position: 'relative'
        }}>
        <h2 style={{
          textAlign: 'center',
          letterSpacing: 0.2,
          fontWeight: 800,
          marginBottom: 6,
          fontSize: '2rem',
        }}>Welcome</h2>
        <p style={{
          textAlign: 'center',
          marginBottom: 23,
          color: 'rgba(245,245,255,0.82)',
          fontSize: '1rem',
          lineHeight: 1.17,
        }}>Sign in to your account or create a new one</p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: 16,
        }}>
          <button type="button" style={{
            padding: '7px 38px',
            border: 'none',
            outline: 'none',
            background: 'transparent',
            color: 'rgba(255,255,255,0.68)',
            fontWeight: 600,
            fontSize: '1.08rem',
            cursor: 'pointer',
            borderRadius: '8px 0 0 8px',
            backgroundColor: 'rgba(255,255,255,0.07)'
          }}>Sign In</button>
          <button type="button" style={{
            padding: '7px 38px',
            border: 'none',
            outline: 'none',
            background: 'rgba(255,255,255,0.17)',
            color: '#fff',
            fontWeight: 700,
            fontSize: '1.08rem',
            letterSpacing: 0.15,
            cursor: 'pointer',
            borderRadius: '0 8px 8px 0'
          }}>Register</button>
        </div>
        <form onSubmit={handleRegister} autoComplete="off">
          <label style={labelStyle}>Username *</label>
          <input
            type="text" placeholder="Username"
            value={username} required
            onChange={e => setUsername(e.target.value)}
            style={inputStyle}
          />
          <label style={labelStyle}>Email *</label>
          <input
            type="email" placeholder="Email"
            value={email} required
            onChange={e => setEmail(e.target.value)}
            style={inputStyle}
          />
          <label style={labelStyle}>Full Name *</label>
          <input
            type="text" placeholder="Full Name"
            value={fullName} required
            onChange={e => setFullName(e.target.value)}
            style={inputStyle}
          />
          <label style={labelStyle}>Role</label>
          <select value={role} onChange={e => setRole(e.target.value)} style={inputStyle}>
            <option value="Student">Student</option>
            <option value="Faculty">Faculty</option>
          </select>
          <label style={labelStyle}>Student ID</label>
          <input
            type="text" placeholder="Student ID"
            value={studentId} required
            onChange={e => setStudentId(e.target.value)}
            style={inputStyle}
          />
          <label style={labelStyle}>Semester</label>
          <select
            value={semester}
            onChange={e => setSemester(e.target.value)}
            required
            style={inputStyle}
          >
            <option value="">Select semester</option>
            <option value="Sem 1">Sem 1</option>
            <option value="Sem 2">Sem 2</option>
            <option value="Sem 3">Sem 3</option>
            <option value="Sem 4">Sem 4</option>
            <option value="Sem 5">Sem 5</option>
            <option value="Sem 6">Sem 6</option>
            <option value="Sem 7">Sem 7</option>
            <option value="Sem 8">Sem 8</option>
          </select>
          <label style={labelStyle}>Department</label>
          <input
            type="text" placeholder="Department"
            value={department} required
            onChange={e => setDepartment(e.target.value)}
            style={inputStyle}
          />
          <label style={labelStyle}>Phone</label>
          <input
            type="text" placeholder="Phone"
            value={phone} required
            onChange={e => setPhone(e.target.value)}
            style={inputStyle}
          />
          <label style={labelStyle}>Password *</label>
          <input
            type="password" placeholder="Password"
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
            style={inputStyle}
          />
          <label style={labelStyle}>Confirm Password *</label>
          <input
            type="password" placeholder="Confirm Password"
            value={confirmPassword}
            required
            onChange={e => setConfirmPassword(e.target.value)}
            style={inputStyle}
          />
          {error && <p style={{ color: '#ff4b75', fontWeight: 500, marginTop: 4 }}>{error}</p>}
          {success && <p style={{ color: '#43b043', fontWeight: 500, marginTop: 4 }}>{success}</p>}
          <button type="submit" style={{
            width: '100%',
            padding: '13px 0',
            border: 'none',
            borderRadius: 9,
            fontWeight: 700,
            fontSize: '1.11rem',
            background: 'linear-gradient(90deg,#a36dfe,#ff57bb,#f356a9)',
            color: '#fff',
            boxShadow: '0 2px 14px rgba(155,60,255,.09)',
            letterSpacing: 0.35,
            marginTop: 14,
            cursor: 'pointer'
          }}>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px',
  margin: '7px 0 16px 0',
  borderRadius: '8px',
  border: '1.1px solid rgba(255,255,255,0.18)',
  background: 'rgba(255,255,255,0.15)',
  color: '#fff',
  fontSize: '1rem',
  fontWeight: 500,
  outline: 'none',
  backdropFilter: 'blur(3px)',
  boxSizing: 'border-box',
  transition: 'border .27s',
};

const labelStyle = {
  fontSize: '0.97rem',
  letterSpacing: 0.08,
  opacity: 0.90,
};

export default Register;
