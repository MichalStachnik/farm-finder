import { useState } from 'react';

import Head from 'next/head';
import Router from 'next/router';

import Navbar from '../components/Navbar/Navbar';

function Register({ farms }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [userType, setUserType] = useState('');
  const [selectedFarm, setSelectedFarm] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    if (email.length === 0 || password.length === 0 || password2.length === 0)
      return;
    if (userType === 'farmer' && selectedFarm.length === 0) return;

    const user = {
      email,
      password,
      selectedFarm,
      userType,
    };

    console.log('registering...', user);

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(user),
    });

    console.log('the res', res);

    const data = await res.json();

    console.log('the data', data);

    // Send to login screen
    Router.push('/login');
  };

  const handleDropdownChange = (e) => {
    setSelectedFarm(e);
  };

  const farmsJsx = farms.map((farm) => {
    if (!farm.claimedUser && !farm.realUser) {
      return (
        <option key={farm.id} value={farm.id}>
          {farm.name}
        </option>
      );
    }
  });

  farmsJsx.unshift(
    <option disabled={true} value="" key="something">
      Select your farm
    </option>
  );

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
          <div>
            <label>Confirm password</label>
            <input
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              type="password"
            />
          </div>
          <div>
            <p>I am a:</p>
            <div>
              <input
                type="radio"
                id="farmer"
                value="farmer"
                name="userType"
                onClick={() => setUserType('farmer')}
              />
              <label htmlFor="farmer">Farmer</label>
            </div>
            <div>
              <input
                type="radio"
                id="consumer"
                value="consumer"
                name="userType"
                onClick={() => setUserType('consumer')}
              />
              <label htmlFor="consumer">Consumer</label>
            </div>
          </div>
          {userType === 'farmer' ? (
            <div>
              <label htmlFor="pet-select">Select your farm:</label>
              <select
                name="farms"
                id="farm-select"
                onChange={(e) => handleDropdownChange(e.target.value)}
                defaultValue=""
              >
                {farmsJsx}
              </select>
            </div>
          ) : null}
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
          background: var(--dark);
        }

        form {
          background: var(--white);
          border: 1px solid rgba(46, 91, 255, 0.08);
          border-radius: 1px;
          padding: 1.5rem;
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        button {
          background: var(--light-green);
          color: var(--dark);
          border-color: var(--light-green);
          border-radius: 5px;
          border-style: solid;
          width: 40%;
          height: 30px;
          outline: none;
          cursor: pointer;
          transition: 0.2s all ease-in-out;
        }

        button:hover {
          background: var(--white);
          color: var(--light-green);
        }
      `}</style>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps({ req }) {
  let url;

  if (req.headers.host === 'localhost:3000') {
    url = 'http://localhost:3000/api/farms';
  } else {
    url = `https://${req.headers.host}/api/farms`;
  }

  const res = await fetch(url);
  const data = await res.json();

  const farms = data.farms[0].farms;

  return {
    props: {
      farms,
    },
  };
}

export default Register;
