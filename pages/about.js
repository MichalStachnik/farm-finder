import Head from 'next/head';
import { useContext } from 'react';

import Navbar from '../components/Navbar/Navbar';
import { GlobalContext } from '../context/GlobalState';

function About() {
  const myContext = useContext(GlobalContext);
  console.log('our token', myContext.userToken);

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
      <Navbar inverted={true} />
      <main>
        <div>
          Farm Fresh is a tool for anyone looking for fresh, unspoiled food and
          local farmers to help combat the breakdowns in our supply chains that
          can lead to food waste.
        </div>
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

export default About;
