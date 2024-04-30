import { useState } from "react";
import { useLocation } from "react-router-dom";
import './App.css';
import SideBar from './Components/SideBar';
import AllRoutes from './Pages/AllRoutes';
import DashboardIcon from './utils/Dashboard.svg'; // Import the SVG icon

function App() {
  const location = useLocation();
  const currentRoute = location.pathname;

  // State to manage the sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
 
  return (
    <div className="App">
      <div className="flex justify-between items-center w-full bg-green-200 shadow-sm shadow-slate-700 ">
        {/* Use DashboardIcon as the content of the button */}
        <button className="ml-4 text-yellow-100 bg-green-200" onClick={toggleSidebar}>
          <img src={DashboardIcon} alt="Dashboard" />
        </button>

        <h1 className='z-50 w-full  text-2xl text-black-800 bg-green-200 font-bold p-4'>
          {currentRoute === "/" ? ' Contact List' : "Charts and Maps"}
        </h1>
        <div className="mr-4"></div> {/* Adjust spacing */}
      </div>
      <div className='flex w-full '>
        <div className={`sticky top-0 h-screen ${isSidebarOpen ? '' : 'hidden'}`}>
          <SideBar />
        </div>
        <div className='w-full'>
          <AllRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
