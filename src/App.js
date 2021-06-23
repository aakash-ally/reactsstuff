import React from 'react';
import Topbar from "./componenets/Topbar";
// import PlacesGrid from "./components/PlacesGrid";
// import Footer from "./components/Footer";

const App = () => {
  // sfc
  return (
    <div>
      <Topbar username="Sachin" flag={true} data={[]} />
      {/* <PlacesGrid />
      <Footer /> */}
    </div>
  );
};

export default App;