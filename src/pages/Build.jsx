import { useParams } from "react-router-dom";
import AppSetting from "../components/AppSetting";
import Stroage from "./Stroage";

const Build = () => {
  const { bID } = useParams();
  return (
    <>
      <div>
        {bID == "auth" && <div>Authuentication</div>}
        {bID == "app settings" && <AppSetting />}
        {bID == "stroage" && <Stroage/>}
      </div>
    </>
  );
  
  
};

export default Build;
