import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faFaceSmile,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import classes from "./LiveChat.module.css";

function LiveChat() {
  return (
    <div className={classes.livechatContainer}>
      <div className={classes.title}>
        <h5>Custommer Support</h5>
        <p className={classes.titlename}>Let's Chat App</p>
      </div>
      <div className={classes.content}>
        <div className={classes.chatUserContainer}>
          <p className={classes.chatUser}>Xin Chào</p>
        </div>
        <div className={classes.chatUserContainer}>
          <p className={classes.chatUser}>Làm thế nào để xem các sản phẩm</p>
        </div>
        <div className={classes.chatAdminContainer}>
          <p className={classes.chatAdmin}>ADMIN: Chào bạn</p>
        </div>
        <div className={classes.chatAdminContainer}>
          <p className={classes.chatAdmin}>
            ADMIN: Bạn có thể vào mục Shop để xem các sản phẩm
          </p>
        </div>
      </div>
      <div className={classes.livechatFooter}>
        <input type="text" placeholder="Enter Message!" />
        <FontAwesomeIcon icon={faPaperclip} className={classes.faPaperclip} />
        <FontAwesomeIcon icon={faFaceSmile} className={classes.faFaceSmile} />
        <FontAwesomeIcon icon={faPaperPlane} className={classes.faPaperPlane} />
      </div>
    </div>
  );
}

export default LiveChat;
