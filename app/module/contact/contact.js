// import index from '../../../node_modules/google-maps/lib/index';
// import "core-js/stable";
import "../../../node_modules/@babel/polyfill/node_modules/regenerator-runtime/runtime";
import { Loader } from '../../../node_modules/google-maps/lib/loader';


const loader = new Loader('AIzaSyB7Zf9SQSeZDiujRs1hwaT5G7YNWDvkL4o');
async function initMap() {
  const google = await loader.load()

  let opt = {
    center: {
      lat: 48.143468,
      lng: 11.541982
    },
    zoom: 17,
    styles: [
      {
        "featureType": "all",
        "elementType": "all", 
        "stylers": [
          { "saturation": -100 }, 
          { "gamma": 0.5 }
        ]
      }
    ]
  }
  const map = new google.maps.Map(document.querySelector('#map'), opt);

}


export { initMap }

