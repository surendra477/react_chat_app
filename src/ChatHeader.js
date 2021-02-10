import React from 'react'
import "./ChatHeader.css"
import CallIcon from '@material-ui/icons/Call';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import { db, auth } from "./firebase";
import SendRoundedIcon from "@material-ui/icons/SendRounded";

import HelpRoundedIcon from "@material-ui/icons/HelpRounded" 
function ChatHeader({channel}) {
    return (
      <div className="chatHeader">
        <div className="chatHeader__left">
          <h3>
            <span className="chatHeader__hash">SIES GST, Nerul</span>
            {/* {channel} */}
          </h3>
        </div>
        <div className="chatHeader__right">
          <ExitToAppIcon
            onClick={() => {
              auth.signOut();
            }}
          />
          <NotificationsIcon />
          <CallIcon />
          <VideoCallIcon />
          {/* <EditLocationRoundedIcon />
                <PeopleAltRoundedIcon /> */}

          {/* <div className="chatHeader__search">
                    <input type="text" placeholder="search" />
                    <SearchRoundedIcon />
                </div> */}
          {/* <SendRoundedIcon /> */}
          <MoreHorizIcon fontsize="large" />
          {/* <HelpRoundedIcon /> */}
        </div>
      </div>
    );
}

export default ChatHeader
