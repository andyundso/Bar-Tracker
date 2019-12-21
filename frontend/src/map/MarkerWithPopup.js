import Marker from "pigeon-marker";
import React, {useMemo} from "react";

const Popup = (props) => {
  const calculateMaxDate = (visits) => {
    return visits.map(visit => visit.date).sort().reverse()[0]
  };

  const maxDate = useMemo(
    () => {
      return calculateMaxDate(props.bar.visits)
    }, [props.bar.visits]
  );

  const style = {
    position: 'absolute',
    transform: `translate(${props.left}px, ${props.top}px)`,
    visibility: props.visible ? "visible" : "hidden"
  };

  return (
    <div style={style} className={"px-6 py-4 shadow-lg rounded bg-white"}>
      <p className={"text-gray-700 text-base font-bold"}>{props.bar.name}</p>
      <ul className="list-disc">
        <li>Visits: {props.bar.visits.length}</li>
        <li>Last visit: {maxDate}</li>
      </ul>

    </div>

  )
};


export const MarkerWithPopup = (props) => {
  const [popupVisible, setPopupVisible] = React.useState(false);

  return (
    <>
      <Popup top={props.top} left={props.left} bar={props.bar} visible={popupVisible}/>
      <Marker
        top={props.top}
        left={props.left}
        anchor={[props.bar.coordinates.x, props.bar.coordinates.y]}
        onMouseOver={() => {
          setPopupVisible(true)
        }}

        onMouseOut={() => {
          setPopupVisible(false)
        }}/>
    </>
  )
};
