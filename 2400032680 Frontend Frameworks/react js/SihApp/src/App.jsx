import React, { useState } from 'react';

function AuthPage() {
  const [activeTab, setActiveTab] = useState('signin');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signInError, setSignInError] = useState('');
  const [signInSuccess, setSignInSuccess] = useState('');

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('Student');
  const [studentId, setStudentId] = useState('');
  const [semester, setSemester] = useState('');
  const [department, setDepartment] = useState('');
  const [phone, setPhone] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState('');

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePhone = (phone) => /^\d{10}$/.test(phone);

  const handleSignIn = (e) => {
    e.preventDefault();
    setSignInError('');
    setSignInSuccess('');
    if (!validateEmail(signInEmail)) {
      setSignInError('Invalid email address');
      return;
    }
    if (signInPassword.length < 6) {
      setSignInError('Password should be at least 6 characters');
      return;
    }
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === signInEmail && storedUser.password === signInPassword) {
      setSignInSuccess('Login successful!');
    } else {
      setSignInError('Invalid email or password');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setRegisterError('');
    setRegisterSuccess('');
    if (
      !username || !email || !fullName || !studentId ||
      !semester || !department || !phone || !passwordReg || !confirmPassword
    ) {
      setRegisterError('All fields are required');
      return;
    }
    if (!validateEmail(email)) {
      setRegisterError('Invalid email');
      return;
    }
    if (passwordReg.length < 6) {
      setRegisterError('Password should be at least 6 characters');
      return;
    }
    if (passwordReg !== confirmPassword) {
      setRegisterError('Passwords do not match');
      return;
    }
    if (!validatePhone(phone)) {
      setRegisterError('Phone must be 10 digits');
      return;
    }

    localStorage.setItem(
      'user',
      JSON.stringify({
        username, email, fullName, role, studentId, semester, department, phone, password: passwordReg,
      })
    );

    setRegisterSuccess('Registration successful! Please login.');
    setUsername('');
    setEmail('');
    setFullName('');
    setRole('Student');
    setStudentId('');
    setSemester('');
    setDepartment('');
    setPhone('');
    setPasswordReg('');
    setConfirmPassword('');
    setActiveTab('signin');
  };

  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(120deg, #5f31b6 0%, #63389b 30%, #a455d0 100%)",
      fontFamily: "Inter, Arial, sans-serif",
      overflow: "auto"
    }}>
      <div style={{
        minWidth: '360px',
        maxWidth: '440px',
        width: '100%',
        background: 'rgba(120,61,186,0.19)',
        borderRadius: 20,
        boxShadow: '0 8px 36px 2px rgba(90,16,140,0.10)',
        backdropFilter: 'blur(20px)',
        border: '1.5px solid rgba(255,255,255,0.14)',
        color: '#fff',
        padding: '34px 28px 22px 28px'
      }}>
        <h2 style={{
          textAlign: 'center',
          letterSpacing: 0.2,
          fontWeight: 800,
          marginBottom: 8,
          fontSize: '2rem',
        }}>
          {activeTab === 'signin' ? 'Welcome Back' : 'Create Account'}
        </h2>
        <p style={{
          textAlign: 'center',
          marginBottom: 20,
          color: 'rgba(255,255,255,0.83)',
          fontSize: '1rem',
        }}>
          {activeTab === 'signin'
            ? 'Sign in to your account'
            : 'Sign in to your account or create a new one'}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 22 }}>
          <button
            onClick={() => setActiveTab('signin')}
            style={{
              padding: '9px 38px',
              border: 'none',
              outline: 'none',
              background: activeTab === 'signin' ? 'rgba(255,255,255,0.28)' : 'transparent',
              color: activeTab === 'signin' ? '#fff' : 'rgba(255,255,255,0.7)',
              fontWeight: activeTab === 'signin' ? 700 : 600,
              fontSize: '1.1rem',
              cursor: 'pointer',
              borderRadius: '8px 0 0 8px',
              transition: 'background-color 0.3s',
            }}
          >
            Sign In
          </button>
          <button
            onClick={() => setActiveTab('register')}
            style={{
              padding: '9px 38px',
              border: 'none',
              outline: 'none',
              background: activeTab === 'register' ? 'rgba(255,255,255,0.28)' : 'transparent',
              color: activeTab === 'register' ? '#fff' : 'rgba(255,255,255,0.7)',
              fontWeight: activeTab === 'register' ? 700 : 600,
              fontSize: '1.1rem',
              cursor: 'pointer',
              borderRadius: '0 8px 8px 0',
              transition: 'background-color 0.3s',
            }}
          >
            Register
          </button>
        </div>

        {activeTab === 'signin' ? (
          <form onSubmit={handleSignIn} autoComplete="off">
            <label style={labelStyle}>Email *</label>
            <input
              type="email" placeholder="Email"
              value={signInEmail} required
              onChange={e => setSignInEmail(e.target.value)}
              style={inputStyle}
            />
            <label style={labelStyle}>Password *</label>
            <input
              type="password" placeholder="Password"
              value={signInPassword} required
              onChange={e => setSignInPassword(e.target.value)}
              style={inputStyle}
            />
            {signInError && <p style={errorStyle}>{signInError}</p>}
            {signInSuccess && <p style={successStyle}>{signInSuccess}</p>}
            <button type="submit" style={buttonStyle}>Sign In</button>
          </form>
        ) : (
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
              value={passwordReg} required
              onChange={e => setPasswordReg(e.target.value)}
              style={inputStyle}
            />
            <label style={labelStyle}>Confirm Password *</label>
            <input
              type="password" placeholder="Confirm Password"
              value={confirmPassword} required
              onChange={e => setConfirmPassword(e.target.value)}
              style={inputStyle}
            />
            {registerError && <p style={errorStyle}>{registerError}</p>}
            {registerSuccess && <p style={successStyle}>{registerSuccess}</p>}
            <button type="submit" style={buttonStyle}>Create Account</button>
          </form>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px',
  margin: '7px 0 15px 0',
  borderRadius: '8px',
  border: '1.1px solid rgba(255,255,255,0.15)',
  background: 'rgba(255,255,255,0.15)',
  color: '#fff',
  fontSize: '1rem',
  fontWeight: 500,
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border .22s',
};

const labelStyle = {
  fontSize: '0.97rem',
  letterSpacing: 0.08,
  opacity: 0.88,
};

const buttonStyle = {
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
  marginTop: 13,
  cursor: 'pointer'
};

const errorStyle = {
  color: '#ff4b75',
  fontWeight: 500,
  marginTop: 4,
};

const successStyle = {
  color: '#43b043',
  fontWeight: 500,
  marginTop: 4,
};

export default AuthPage;
