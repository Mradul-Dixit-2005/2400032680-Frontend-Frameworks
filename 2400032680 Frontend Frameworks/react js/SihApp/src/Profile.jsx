import React from "react";

function Profile() {
  const email = localStorage.getItem('loggedInEmail');

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: 'linear-gradient(130deg,#43cea2 0%,#185a9d 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: "#fff",
        padding: "40px 36px 30px 36px",
        borderRadius: "18px",
        boxShadow: "0 4px 26px rgba(0,0,0,0.12)",
        minWidth: "340px",
        maxWidth: "440px",
        textAlign: "center"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
          marginBottom: "18px"
        }}>
          <span style={{
            display: 'inline-flex',
            background: '#2684ff',
            color: '#fff',
            borderRadius: '50%',
            width: '56px',
            height: '56px',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            fontWeight: 'bold'
          }}>
            {email ? email[0].toUpperCase() : "U"}
          </span>
          <span style={{ fontWeight: 600, fontSize: "1.2rem" }}>
            Profile
          </span>
        </div>
        <p style={{margin: '14px 0', fontSize:"1.09rem"}}>
          <b>Email:</b> {email || "No email found"}
        </p>
        {/* Optionally Add Back/Dashboard Button */}
        <button
          style={{
            marginTop: "26px",
            padding: "10px 24px",
            background: "#2684ff",
            color: "#fff",
            border: "none",
            borderRadius: "7px",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer"
          }}
          onClick={() => window.history.back()}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default Profile;
