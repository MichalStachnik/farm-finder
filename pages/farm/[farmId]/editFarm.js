import { useContext } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { GlobalContext } from '../../../context/GlobalState';

import Navbar from '../../../components/Navbar/Navbar';
import Product from '../../../components/Product/Product';
import ProductsForm from '../../../components/ProductsForm/ProductsForm';

const products = ['chicken', 'cow', 'pork', 'vegetables', 'seeds'];

function EditFarm({ farms }) {
  const router = useRouter();
  const myContext = useContext(GlobalContext);

  const { farmId } = router.query;

  const [selectedFarm] = farms.filter((farm) => farm.name === farmId);

  const userType = myContext.userType;

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
      <Navbar userType={userType} />
      <main>
        <div className="grid-area">
          <div className="card">
            {selectedFarm.hours.map((day) => {
              return (
                <div key={day.day}>
                  <p>{day.day}</p>
                  <p>{day.open}</p>
                  <p>{day.close}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid-area">
          <div className="card">{selectedFarm.name}</div>
        </div>
        <div className="grid-area">
          <div className="card">{selectedFarm.name}</div>
        </div>
        <div className="grid-area">
          <div className="card">
            <ProductsForm />
          </div>
        </div>
      </main>
      <style jsx>{`
        main {
          position: absolute;
          bottom: 0;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr 1fr;
          grid-gap: 10px;
          height: calc(100vh - 60px);
          width: 100vw;
          place-items: center;
        }

        main div.grid-area {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: url('/farm-bg.jpg');
          // background: linear-gradient(#e66465, #9198e5);
          background-size: cover;
          background-attachment: fixed;
          background-position: center;
        }

        div.card {
          width: 70%;
          height: 70%;
          border-radius: 3px;
          box-shadow: 0 3px 20px 0 #333;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(0, 0, 0, 0.125);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        main div:nth-of-type(1) {
          grid-column: 1/3;
          grid-row: 1/4;
        }

        main div:nth-of-type(2) {
          grid-column: 3/5;
          grid-row: 1/2;
        }

        main div:nth-of-type(3) {
          grid-column: 1/3;
          grid-row: 4/5;
        }

        main div:nth-of-type(4) {
          grid-column: 3/5;
          grid-row: 2/5;
        }

        .products {
          width: 90%;
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

export default EditFarm;
