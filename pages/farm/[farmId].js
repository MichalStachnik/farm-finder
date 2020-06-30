import { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { GlobalContext } from '../../context/GlobalState';
import Navbar from '../../components/Navbar/Navbar';

function Farm({ farms }) {
  const router = useRouter();

  const { farmId } = router.query;

  // const { farms, setFarms } = useContext(GlobalContext);

  const [selectedFarm] = farms.filter((farm) => farm.id === farmId);

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
        <div>{selectedFarm.name}</div>
        <div>{selectedFarm.name}</div>
        <div>{selectedFarm.name}</div>
        <div>{selectedFarm.name}</div>
      </main>
      <style jsx>{`
        main {
          position: absolute;
          bottom: 0;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr 1fr;
          height: calc(100vh - 60px);
          width: 100vw;
          place-items: center;
        }

        main div {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        main div:nth-of-type(1) {
          background: darksalmon;
          grid-column: 1/3;
          grid-row: 1/4;
        }

        main div:nth-of-type(2) {
          background: darkseagreen;
          grid-column: 3/5;
          grid-row: 1/2;
        }

        main div:nth-of-type(3) {
          background: lightblue;
          grid-column: 1/3;
          grid-row: 4/5;
        }

        main div:nth-of-type(4) {
          background: lightgoldenrodyellow;
          grid-column: 3/5;
          grid-row: 2/5;
        }
      `}</style>
    </div>
  );
}

// This function gets called at build time on server-side. It won't be called on client-side

// export async function getStaticProps({ req }) {
//   let url;

//   if (req.headers.host === 'localhost:3000') {
//     url = 'http://localhost:3000/api/farms';
//   } else {
//     url = `https://${req.headers.host}/api/farms`;
//   }

//   const res = await fetch(url);
//   const data = await res.json();

//   const farms = data.farms[0].farms;

//   return {
//     props: {
//       farms,
//     },
//   };
// }

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

export default Farm;
