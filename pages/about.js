import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import Navbar from '../components/Navbar/Navbar';

function About() {
  const handleViewportChange = null;
  const handleSearchChange = null;
  const features = [];
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
      <Navbar
        changeViewport={handleViewportChange}
        changeSearch={handleSearchChange}
        features={features}
      />
      <main>
        <div>
          Farm Fresh aims to connect anyone looking for fresh, unspoiled food
          with local farmers.
        </div>
      </main>
      <style jsx>{`
        main {
          position: absolute;
          bottom: 0;
          height: calc(100vh - 60px);
          width: 100vw;
        }
      `}</style>
    </div>
  );
}

export default About;
