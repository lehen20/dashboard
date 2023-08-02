import React, { useState, useEffect, useRef } from 'react';

const CanvasComponent = () => {
  const [clickPoints, setClickPoints] = useState([]);
  const canvasRef = useRef(null);

  // const drawPoly = (points) => {
  //   const canvas = canvasRef.current;
  //   const context = canvas.getContext("2d");
  //   context.lineWidth = 5;
  //   context.clearRect(0, 0, canvas.width, canvas.height);
  //   const split = points.splice(0, 4);

  //   context.beginPath();
  //   context.moveTo(split[0][0], split[0][1]);
  //   for (const i of split.reverse()) {
  //     context.lineTo(i[0], i[1]);
  //   }
  //   context.stroke();
  // };
  const drawPoly = (points) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.lineWidth = 5;
    context.clearRect(0, 0, canvas.width, canvas.height);
  
    if (points.length >= 6) {
      context.beginPath();
      context.moveTo(points[0][0], points[0][1]);
      for (const [x, y] of points) {
        context.lineTo(x, y);
      }
      context.closePath();
      context.stroke();
    }
  };

  const drawDot = (x, y) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.beginPath();
    context.arc(x, y, 4, 0, 2 * Math.PI);
    context.fill();
  };

  const resize = (x, y) => {
    const biggest = 1000;
    const ratio = x > y ? x / biggest : y / biggest;
    const axis = [x / ratio, y / ratio];
    // const axis = [x, y];
    const canvas = canvasRef.current;
    canvas.height = 520;
    canvas.width = 640;
  };
  // const resize = (x, y) => {
  //   const biggest = 1000;
  //   const ratio = Math.max(x, y) / biggest;
  //   const newWidth = x / ratio;
  //   const newHeight = y / ratio;
  //   const canvas = canvasRef.current;
  //   canvas.width = newWidth;
  //   canvas.height = newHeight;
  // };

  const newImage = (src) => {
    const rawImg = new Image();
    rawImg.src = src;
    rawImg.onload = () => {
      const canvas = canvasRef.current;
      const zoomWindow = document.querySelector(".zoom");
      canvas.style.backgroundImage = `url(${src})`;
      zoomWindow.style.backgroundImage = `url(${src})`;
      resize(rawImg.height, rawImg.width);
      // const axis = [rawImg.height, rawImg.width];

      // canvas.height= axis[0];
      // canvas.width= axis[1];
      // console.log(canvas.height);
    };
  };
  // const handleCanvasClick = (evt) => {
  //   setClickPoints([...clickPoints, [evt.offsetX, evt.offsetY]]);
  //   drawDot(evt.offsetX, evt.offsetY);

  //   if (clickPoints.length >= 4) {
  //     drawPoly([...clickPoints]); 
  //   }
  // };
  const handleCanvasClick = (evt) => {
    console.log(evt, 'evt evt')
    const newPoint = [evt.offsetX, 520-evt.offsetY];
    console.log(newPoint, 'newPointssssssss');
    setClickPoints((prevPoints) => [...prevPoints, newPoint]);
    drawDot(newPoint[0], newPoint[1]);

    if (clickPoints.length >= 3) {
      drawPoly([...clickPoints, newPoint]); // Draw with the new point added
    }
  };
  useEffect(() => {
    const canvas = canvasRef.current;

    const handleClick = (evt) => {
      setClickPoints([...clickPoints, [evt.offsetX, 520-evt.offsetY]]);
      drawDot(evt.offsetX, 520-evt.offsetY);
    };

    const handleMouseMove = (evt) => {
      drawZoom(evt.offsetX, 520-evt.offsetY);
    };

    canvas.addEventListener("click", handleClick);
    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.removeEventListener("click", handleClick);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [clickPoints]);

  useEffect(() => {
    newImage(
      // "https://hips.hearstapps.com/hmg-prod/images/electric-charging-station-with-many-electric-royalty-free-image-1644875089.jpg"
      "http://s3.ap-south-1.amazonaws.com/bluehawk-in/uploadinput/mission/174c68e7-8b5b-412f-8492-e1683e1ecb5a/gallery/P_13_site_2_23.JPG"
    );
  }, []);
  const drawZoom = (x, y) => {
    const zoomWindow = document.querySelector(".zoom");
    zoomWindow.style.backgroundPosition = `${x}px ${y}px`;
    zoomWindow.style.top = `${x}px`;
  };
  return (
    <>
      <canvas ref={canvasRef} onClick={handleCanvasClick}></canvas>
      <div className="zoom"></div>
      <div> Coordinates: </div> 
      <div className="points-info"> {'['} {clickPoints.map((point, index) => `${index % 2 === 0 ? '[' : ''}${point}${index % 2 === 1 ? ']' : ' '}`).join(' ')} {']'}</div>
      {/* <div className="points-info">{'['} {clickPoints.map((point, index) => `${index % 2 === 0 ? '[' : ''}${point}${index % 2 === 1 ? ']' : (index !== clickPoints.length - 1 ? ',' : '')} `).join('')} {']'}</div> */}
      {/* <div className="points-info">{'['} {clickPoints.map((point, index) => `${index % 2 === 0 ? '[' : ''}${point}${index % 2 === 1 ? ']' : (index !== clickPoints.length - 1 ? ',' : '')}`).join(' ')} {']'}</div> */}
      <div> Token: </div> 
      <input type="text"/>
      {/* <div className="points-info">{'['} {clickPoints.join('][')} {']'}</div> */}
      {/* <input type="text" onChange={(evt) => newImage(evt.target.value)} /> */}
    </>
  );
}

export default CanvasComponent;