import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';

function AuthPage() {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(120deg, #43cea2 0%, #185a9d 100%)'
    }}>
      <div style={{
        display: 'flex',
        background: 'white',
        borderRadius: '20px',
        boxShadow: '0 8px 40px rgba(0,0,0,0.16)',
        overflow: 'hidden',
        width: '860px',
        minHeight: '470px'
      }}>
        {/* Left Branding */}
        <div style={{
          background: 'linear-gradient(135deg,#2684ff 55%,#43cea2 100%)',
          color: 'white',
          flex: 1.05,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 18px'
        }}>
          <div style={{
            fontWeight: 'bold',
            fontSize: '2.8rem',
            letterSpacing: '2px'
          }}>
            SphereMentor
          </div>
          <div style={{
            marginTop: "20px",
            fontSize: "1.12rem",
            opacity: 0.97,
            textAlign: 'center',
            lineHeight: '1.6'
          }}>
            Empowering Learning.<br />
            Sign in to your personal student dashboard.
          </div>
        </div>
        {/* Right Form */}
        <div style={{
          flex: 1,
          padding: '38px 28px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          {isRegistering
            ? <>
                <Register onRegister={() => setIsRegistering(false)} />
                <p style={{ textAlign: 'center', marginTop: 20 }}>
                  Already have an account?{' '}
                  <button onClick={() => setIsRegistering(false)}
                    style={{
                      border: 'none', background: 'none', color: '#2684ff', cursor: 'pointer', fontWeight: 'bold'
                    }}
                  >Login</button>
                </p>
              </>
            : <>
                <Login />
                <p style={{ textAlign: 'center', marginTop: 20 }}>
                  Don't have an account?{' '}
                  <button onClick={() => setIsRegistering(true)}
                    style={{
                      border: 'none', background: 'none', color: '#2684ff', cursor: 'pointer', fontWeight: 'bold'
                    }}
                  >Register</button>
                </p>
              </>
          }
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
