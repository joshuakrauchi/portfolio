"use client"

import { useRef, useState } from 'react';

const CatPupil = ({ mousePosition }) => {
  const pupil = useRef(null);

  const calculatePupilPosition = () =>
  {
    let x = 0.0;
    let y = 0.0;

    let pupilValue : any = pupil.current;
    if ((pupilValue != null) && (mousePosition != null))
    {
      let rect : DOMRect = pupilValue.getBoundingClientRect();

      // Multiplying by 2 reduces jittery eye movement.
      let containerWidth = Math.round(rect.width) * 2;
      let containerHeight = Math.round(rect.height) * 2;
  
      let mouseX = mousePosition.x - rect.left;
      let mouseY = mousePosition.y - rect.top;
      let percentageX = (mouseX / containerWidth) * 100.0;
      let percentageY = (mouseY / containerHeight) * 100.0;

      // Ensure the div stays confined to its container
      x = Math.max(-100.0, Math.min(200.0, percentageX));
      y = Math.max(-25.0, Math.min(10.0, percentageY));
    }

    return { x: x, y: y };
  }

  const pupilPosition = calculatePupilPosition();
  const dynamicPupilStyle = { transform: `translate(${pupilPosition.x}%, ${pupilPosition.y}%)`};

  return (
    <>
      <div ref={pupil} style={dynamicPupilStyle} className="eye-pupil"></div>
    </>
  );
}

const Cat = ({ mousePosition }) : JSX.Element => {
  return (
    <div style={{ animationDelay: 400 + "ms" }} className="animate__animated animate__fadeInRight flex h-full w-full justify-center items-center bg-black">
      <div className="cat">
        <div className="ear ear--left"></div>
        <div className="ear ear--right"></div>
        <div className="face">
          <div className="eye eye--left">
            <CatPupil mousePosition={mousePosition} />
          </div>
          <div className="eye eye--right">
            <CatPupil mousePosition={mousePosition} />
          </div>
          <div className="muzzle"></div>
        </div>
      </div>
    </div>
  );
};

export default Cat;
