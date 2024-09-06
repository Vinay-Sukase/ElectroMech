import React, { useState } from "react";
import elecrtomechlogo from "../../assets/elecrtomechlogo.svg";
import homeicon from "../../assets/homeicon.svg";
import usermanagementicon from "../../assets/usermanagementicon.svg";
import teamsicon from "../../assets/teamsicon.svg";
import reportsicon from "../../assets/reportsicon.svg";
import customersicon from "../../assets/customersicon.svg";
import settingsicon from "../../assets/settingsicon.svg";
import signouticon from "../../assets/signouticon.svg";

function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="w-64 text-[#737791] h-screen p-4">
      <div className="mb-8 flex justify-center items-center gap-1">
        <img
          src={elecrtomechlogo}
          alt="electromechlogo"
          className="w-10 h-10"
        />
        <h1 className="text-2xl text-[#151D48] font-bold">ElectroMech</h1>
      </div>
      <div>
        <ul className="flex flex-col items-center gap-5">
          <li className="w-full">
            <a
              href="#"
              onClick={() => handleNavigation("home")}
              className={`p-4 block flex items-center gap-4 rounded-lg ${
                activeSection === "home"
                  ? "bg-[#5D5FEF] text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              <img src={homeicon} alt="homeicon" className="w-6 h-6" />
              Home
            </a>
          </li>
          <li className="w-full">
            <a
              href="#"
              onClick={() => handleNavigation("usermanagement")}
              className={`p-4 block flex items-center gap-4 rounded-lg ${
                activeSection === "usermanagement"
                  ? "bg-[#5D5FEF] text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              <img
                src={usermanagementicon}
                alt="usermanagementicon"
                className="w-6 h-6"
              />
              User Management
            </a>
          </li>
          <li className="w-full">
            <a
              href="#"
              onClick={() => handleNavigation("teams")}
              className={`p-4 block flex items-center gap-4 rounded-lg ${
                activeSection === "teams"
                  ? "bg-[#5D5FEF] text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              <img src={teamsicon} alt="teamsicon" className="w-6 h-6" />
              Teams
            </a>
          </li>
          <li className="w-full">
            <a
              href="#"
              onClick={() => handleNavigation("reports")}
              className={`p-4 block flex items-center gap-4 rounded-lg ${
                activeSection === "reports"
                  ? "bg-[#5D5FEF] text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              <img src={reportsicon} alt="reportsicon" className="w-6 h-6" />
              Reports
            </a>
          </li>
          <li className="w-full">
            <a
              href="#"
              onClick={() => handleNavigation("customers")}
              className={`p-4 block flex items-center gap-4 rounded-lg ${
                activeSection === "customers"
                  ? "bg-[#5D5FEF] text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              <img
                src={customersicon}
                alt="customersicon"
                className="w-6 h-6"
              />
              Customers
            </a>
          </li>
          <li className="w-full">
            <a
              href="#"
              onClick={() => handleNavigation("settings")}
              className={`p-4 block flex items-center gap-4 rounded-lg ${
                activeSection === "settings"
                  ? "bg-[#5D5FEF] text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              <img src={settingsicon} alt="settingsicon" className="w-6 h-6" />
              Settings
            </a>
          </li>
          <li className="w-full">
            <a
              href="#"
              onClick={() => handleNavigation("signout")}
              className={`p-4 block flex items-center gap-4 rounded-lg ${
                activeSection === "signout"
                  ? "bg-[#5D5FEF] text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              <img src={signouticon} alt="signouticon" className="w-6 h-6" />
              Sign Out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
