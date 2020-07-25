import { useContext, useState } from 'react';

import Navbar from '../components/Navbar/Navbar';
import { GlobalContext } from '../context/GlobalState';

function Admin({ farms }) {
  const myContext = useContext(GlobalContext);
  console.log('myContext', myContext);
  // const farms = myContext.farms[0].filter((farm) => farm.claimedUser);
  farms = farms.filter((farm) => farm.claimedUser);
  console.log('the farms', farms);
  const { userType } = myContext;
  console.log('userId', userType);

  // if no admin redirect

  const handleApprove = async (farm) => {
    console.log(farm);
    const res = await fetch(`/api/admin/approve/${farm}`);
    const data = await res.json();
    console.log('data back declineUser', data);
  };

  const handleDecline = async (farm) => {
    console.log(farm);
    const res = await fetch(`/api/admin/decline/${farm}`);
    const data = await res.json();
    console.log('data back declineUser', data);
  };

  return (
    <div>
      <Navbar />
      <main>
        {farms.length ? (
          <ul>
            {farms.map((farm) => {
              return (
                <li key={farm.id}>
                  <div>
                    <p>Farm:</p>
                    <p>{farm.name}</p>
                  </div>
                  <div>
                    <p>Website:</p>
                    <p>{farm.website}</p>
                  </div>
                  <div>
                    <p>Claimed user:</p>
                    <p>{farm.claimedUser}</p>
                  </div>
                  <button onClick={() => handleApprove(farm.name)}>👍</button>
                  <button onClick={() => handleDecline(farm.name)}>👎</button>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No pending approvals</p>
        )}
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

        ul {
          width: 85%;
        }

        li {
          display: grid;
          grid-template-columns: 1fr 2fr 2fr 1fr 1fr;
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

export default Admin;
