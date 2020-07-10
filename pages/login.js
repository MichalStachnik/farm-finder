import { useState, useContext } from 'react';
import Head from 'next/head';
import Router from 'next/router';

import { GlobalContext } from '../context/GlobalState';
import Navbar from '../components/Navbar/Navbar';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const myContext = useContext(GlobalContext);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) return;

    const user = {
      email,
      password,
    };

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(user),
    });
    console.log('the res after logging in', res);
    const data = await res.json();
    console.log('and the data', data);

    if (!data.token) return;

    // Set token to global state
    myContext.setToken(data.token);

    // Send to home screen
    Router.push('/');
  };

  return (
    <div>
      <Head>
        <title>Farm Fresh</title>
        <meta
          name="description"
          content="Find local farms and help reduce food waste and spoilage due to supply chain breakdowns."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <main>
        login
        <form onSubmit={onSubmit}>
          <h1>Register</h1>
          <div>
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </main>
      <style jsx>{`
        main {
          position: absolute;
          bottom: 0;
          height: calc(100vh - 60px);
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

export default Login;
