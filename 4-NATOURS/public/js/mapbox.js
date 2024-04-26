/* eslint-disable */
const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoiamFtZXNvbGFuaXBla3VuIiwiYSI6ImNsdmdqMHowZjBxbnkya2w5aTRqNnUzY2kifQ.8Q8zw6D61Ezy22zBJgNXUA';
var map = new mapboxgl.Map({
  container: 'map',
  //   style: 'mapbox://styles/mapbox/streets-v11',
  style: 'mapbox://styles/jamesolanipekun/clvgzn62z018601ph6eqidwq7',
  center: [-118.113491, 34.111745],
  zoom: 10,
  interactive: false,
});
