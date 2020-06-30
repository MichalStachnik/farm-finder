import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import Navbar from '../components/Navbar/Navbar';

function About() {
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
        <div>
          Farm Fresh aims to connect anyone looking for fresh, unspoiled food
          with local farmers to help combat the breakdowns in the our supply
          chains that lead to food waste.
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
