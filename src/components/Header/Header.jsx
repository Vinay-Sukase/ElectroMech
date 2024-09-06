import React from "react";
import languageicon from "../../assets/languageicon.svg";
import notificationsicon from "../../assets/notifications.svg";
import profilepic from "../../assets/profilepic.svg";
import downarrow from "../../assets/downarrow.svg";

function Header() {
  return (
    <div className="bg-gray-100 p-4 flex justify-between items-center ">
      <h2 className="text-xl font-semibold ">HOME</h2>
      <div className="flex items-center align-center gap-2">
        <div className="flex flex-row gap-2">
          <img src={languageicon} alt="languageicon" />
          <span className="mr-4 flex flex-row">
            Eng (US)
            <img src={downarrow} alt="downarrowicon" />
          </span>
        </div>
        <div>
          <div className="flex flex-row gap-8">
            <img src={notificationsicon} alt="notificationsicon" />
            <div className="flex flex-row gap-2">
              <img src={profilepic} alt="profilepic" />
              <span className="flex flex-col">
                Vishal
                <span className="text-[#737791] text-[12px]">Admin</span>
              </span>
              <img src={downarrow} alt="downarrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
