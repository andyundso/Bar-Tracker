import React, {useEffect, useMemo, useState} from "react"
import Map from "pigeon-maps";
import {arrayMin} from "./helpers/helperFunctions";
import {MarkerWithPopup} from "./map/MarkerWithPopup";

export const BarMap = () => {
  const [bars, setBars] = useState([]);

  const calculateCenter = (bars) => {
    const xValues = bars.map(bar => bar.coordinates.x);
    const yValues = bars.map(bar => bar.coordinates.y);

    return {
      x: arrayMin(xValues) ?? 0.0,
      y: arrayMin(yValues) ?? 0.0
    }
  };

  const mapCenter = useMemo(
    () => {
      return calculateCenter(bars)
    }, [bars]
  );

  useEffect(() => {
      fetch("http://localhost:3001/bars")
        .then(res => res.json())
        .then(res => setBars(res))
    }, []
  );

  return (
    <Map center={[mapCenter.x, mapCenter.y]} zoom={12}>
      {bars.map(bar => (
        <MarkerWithPopup key={bar.id} anchor={[bar.coordinates.x, bar.coordinates.y]} description={bar.name}/>
      ))
      }
    </Map>
  )
};
