import Marker from "pigeon-marker";
import React from "react";

const Popup = (props) => {
  const style = {
    position: 'absolute',
    transform: `translate(${props.left}px, ${props.top}px)`,
    visibility: props.visible ? "visible" : "hidden"
  };

  return (
    <div style={style} className={"px-6 py-4 shadow-lg rounded bg-white"}>
      <p className={"text-gray-700 text-base font-bold"}>{props.description}</p>
    </div>

  )
};


export const MarkerWithPopup = (props) => {
  const [popupVisible, setPopupVisible] = React.useState(false);

  return (
    <>
      <Popup top={props.top} left={props.left} description={props.description} visible={popupVisible}/>
      <Marker
        top={props.top}
        left={props.left}
        anchor={props.anchor}
        onMouseOver={() => {
          setPopupVisible(true)
        }}

        onMouseOut={() => {
          setPopupVisible(false)
        }}/>
    </>
  )
};
