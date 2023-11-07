import Footer from "../pages/Footer";
import Sidebar from "./sidebar";

function RootLayout({ children }) {
  return (
    <div className="flex gap-4 h-screen">
      <Sidebar />
      <div className=" flex flex-col overflow-y-auto">
        <main className="flex-1 mx-auto py-4 px-2 pr-4">
          {children}
        </main>
      </div>
    </div>
  );
}

export default RootLayout;
