// import React, { useState } from "react";


// function LoginPage() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log("Logging in with", username, password);
//   };

//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <form className="login-form" onSubmit={handleLogin}>
//           <h2>Login</h2>
//           <div className="login-input-container">
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="login-input-container">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="login-button">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;



import React, { useState } from "react";


function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Logging in with", username, password);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Add the logo image here */}
        <div className="login-logo">
          <img src="/assets/emart.png" alt="Logo" />
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className="login-input-container">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="login-input-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
