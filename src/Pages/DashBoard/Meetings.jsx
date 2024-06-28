import React from 'react';
import Layout from './Layout';

const Meetings = () => {
  const createMeeting = () => {
    const roomID = localStorage.getItem('roomID') || generateRandomID(5);
    localStorage.setItem('roomID', roomID);

    const meetingURL = `${window.location.protocol}//${window.location.host}/cz/meetings/meeting-room?roomID=${roomID}`;
    window.open(meetingURL, '_blank');
  };

  const generateRandomID = (len) => {
    let result = '';
    const chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP';
    const maxPos = chars.length;
    for (let i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
  };

  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Tele-Health Meetings</h1>
        <button
          onClick={createMeeting}
          className="bg-Button text-white px-4 py-2 rounded-full mb-4"
        >
          Generate Meeting Link
        </button>
        <div className="bg-gray-100 p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Click the "Generate Meeting Link" button above. This will open a new tab in your browser.</li>
            <li>In the new tab, enter the doctor's name and click "Join".</li>
            <li>After joining the meeting, click the "i" icon to copy the meeting link.</li>
            <li>Move to the chat tab in your application.</li>
            <li>Select a user to whom you want to send the meeting link and paste the link in the chat.</li>
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default Meetings;
