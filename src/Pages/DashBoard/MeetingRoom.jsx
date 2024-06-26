import React, { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useSelector } from 'react-redux';

function randomID(len) {
  let result = '';
  const chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP';
  const maxPos = chars.length;
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(url = window.location.href) {
  const urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}

const MeetingRoom = () => {
  const roomID = useRef(getUrlParams().get('roomID') || localStorage.getItem('roomID') || randomID(5));
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    localStorage.setItem('roomID', roomID.current);
    if (user) {
      initiateMeeting(user.isAdmin ? user.name : user.name);
    }
  }, [user]);

  const initiateMeeting = async (userName) => {
    const appID = 1057413900;
    const serverSecret = '7b2e7f0752aaac1167e029dd171b2bbc';
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID.current,
      randomID(5),
      userName
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: document.querySelector('.myCallContainer'),
      sharedLinks: [
        {
          name: 'Copy link',
          url: `${window.location.protocol}//${window.location.host}/cz/meetings/meeting-room?roomID=${roomID.current}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    });
  };

  return <div className="myCallContainer" style={{ width: '100vw', height: '100vh' }}></div>;
};

export default MeetingRoom;
