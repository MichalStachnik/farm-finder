export const getFeatures = async (searchValue) => {
  try {
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchValue}.json?access_token=${process.env.MAPBOX_KEY}`
    );
    const json = await res.json();
    return json;
  } catch (error) {
    console.log('error sending request');
    console.error(error);
  }
};
