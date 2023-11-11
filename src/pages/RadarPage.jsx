import React from 'react'
import { useParams } from "react-router-dom";
import Estimate from '../components/RadarComponent/Estimate';

const RadarPage = () => {
  const { radarID } = useParams();
  return (
    <div>
      <div>
        {radarID == "Estimate" && <Estimate />}
        {radarID == "Coherent radar" && <div>coherent radar</div>}
        {radarID == "non-coherent radar" && <div>non-coherent radar</div>}
      </div>
    </div>
  );
}

export default RadarPage;