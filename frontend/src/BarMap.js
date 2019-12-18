import React, {useEffect, useState, useMemo} from "react"
import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import {arrayMin} from "./helpers/helperFunctions";

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
      {bars.map(bar => <Marker key={bar.id} anchor={[bar.coordinates.x, bar.coordinates.y]}/>)}
    </Map>
  )
};
