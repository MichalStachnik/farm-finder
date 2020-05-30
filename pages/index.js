import { useState } from 'react';

function HomePage() {
  let [searchValue, setSearchValue] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchValue}.json?access_token=${key}`
    );
    const json = await res.json();
    console.log('json: ', json);
  };

  return (
    <div>
      <h1>Welcome to Farm Finder</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
}

export default HomePage;
