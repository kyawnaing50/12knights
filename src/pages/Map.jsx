import React from 'react'
import { useParams } from "react-router-dom";
import Meridian from '../components/Maps/Meridian';

const Map = () => {
  const { mapID } = useParams();
  return (
    <div>
      <div>
        {mapID == "Meridian" && <Meridian/>}
        {mapID == "Sphere Level" && <div>SSSSSS</div>}
        {mapID == "Earth-Sun" && <div>OOOOOOO</div>}
      </div>
    </div>
  );
}

export default Map
