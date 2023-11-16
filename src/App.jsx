import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AllApps from "./pages/Numbers";
// import Analytics from "./pages/Analytics";
// import Authentication from "./pages/Authentication";
// import Build from "./pages/Build";
import Settings from "./pages/Settings";
import Electricity from "./pages/Electricity";
import Fof from "./pages/Fof";
import Map from "./pages/Map";
import RadarPage from "./pages/RadarPage";
import Network from "./pages/Network";
// import Stroage from "./pages/Stroage";
// import Footer from "./pages/Footer";
// import Person from "./pages/Person";

const App = () => {
  return (
    <div className=" w-screen h-screen">
      <RootLayout>
        <Routes>
          <Route path="/" element={<AllApps />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/Map/:mapID" element={<Map />} />
          <Route path="/Network/:netID" element={<Network />} />
          <Route path="/elec" element={<Electricity />} />
          <Route path="/fof" element={<Fof />} />
          <Route path="/Radar/:radarID" element={<RadarPage />} />
        </Routes>
      </RootLayout>
      {/* <Footer/> */}
    </div>
  );
};

export default App;
