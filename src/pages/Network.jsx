import React from 'react'
import { useParams } from "react-router-dom";
import IpAddress from '../components/Net/IP/IpAddress';

const Network = () => {
  const { netID } = useParams();
  return (
    <div className=" w-full h-full">
      {/* <div> */}
      {netID == "IP Address" && <IpAddress />}
      {netID == "7 Layers" && <div>SSSSSS</div>}
      {netID == "Switch" && <div>OOOOOOO</div>}
      {/* </div> */}
    </div>
  );
}

export default Network
