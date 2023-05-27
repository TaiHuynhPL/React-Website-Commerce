import { useState } from "react";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import LiveChat from "./LiveChat/LiveChat";
import classes from "./Layout.module.css";

//Component Layout
function Layout() {
  //tạo state để thay đổi việc ẩn hiển LiveChat
  const [isShowLiveChat, setIsShowLiveChat] = useState(false);

  //Hàm khi click vào icon livechat
  const handlerShowChat = () => {
    setIsShowLiveChat((prestate) => !prestate);
  };

  return (
    <div>
      <Navbar />
      <Outlet />

      {isShowLiveChat && <LiveChat />}

      <FontAwesomeIcon
        icon={faMessage}
        className={classes.message}
        onClick={handlerShowChat}
      />
      <Footer />
    </div>
  );
}

export default Layout;
