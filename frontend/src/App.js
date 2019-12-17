import React from 'react';
import Map from "pigeon-maps";
import Marker from "pigeon-marker";

function App() {
  return (
    <div className={"container h-screen w-full max-w-full"}>
      <Map center={[50.879, 4.6997]} zoom={12}>
        <Marker anchor={[50.874, 4.6947]} payload={1} onClick={({ event, anchor, payload }) => {}} />
      </Map>
    </div>
  );
}

export default App;
