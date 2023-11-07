import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AllApps from "./pages/Numbers";
import Analytics from "./pages/Analytics";
import Authentication from "./pages/Authentication";
import Build from "./pages/Build";
import Settings from "./pages/Settings";
import Stroage from "./pages/Stroage";
import Footer from "./pages/Footer";
import Person from "./pages/Person";
import IFF from "./components/iff/IFF";

const App = () => {
  return (
    <div className=" w-screen h-screen">
      <RootLayout>
        <Routes>
          <Route path="/" element={<AllApps />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/stroage" element={<Stroage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/build/:bID" element={<Build />} />
          <Route path="/analytics/:aID" element={<Analytics />} />
          <Route path="/Person/:personID" element={<Person />} />
          <Route path="/iff" element={<IFF />} />
        </Routes>
      </RootLayout>
      {/* <Footer/> */}
    </div>
  );
};

export default App;
