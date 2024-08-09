import { useEffect, useState } from 'react';
import axios from 'axios';

const Onebox = () => {
  const [threads, setThreads] = useState([]);
  const [selectedThread, setSelectedThread] = useState(null);

  useEffect(() => {
    axios.get('/api/onebox')
      .then(response => setThreads(response.data))
      .catch(error => console.error(error));
  }, []);

  const fetchThreadDetails = (threadId) => {
    axios.get(`/api/onebox?thread_id=${threadId}`)
      .then(response => setSelectedThread(response.data))
      .catch(error => console.error(error));
  };

  const deleteThread = (threadId) => {
    axios.delete(`/api/onebox?thread_id=${threadId}`)
      .then(() => setThreads(threads.filter(thread => thread.id !== threadId)))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'D' && selectedThread) {
        deleteThread(selectedThread.id);
      }
      if (event.key === 'R' && selectedThread) {
        // Handle reply
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedThread]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Inbox</h1>
      <div className="flex">
        <div className="w-1/3">
          {threads.map(thread => (
            <div
              key={thread.id}
              onClick={() => fetchThreadDetails(thread.id)}
              className="p-2 border-b hover:bg-gray-200 cursor-pointer"
            >
              {thread.subject}
            </div>
          ))}
        </div>
        <div className="w-2/3 p-4">
          {selectedThread && (
            <>
              <h2 className="text-xl font-bold mb-2">{selectedThread.subject}</h2>
              <p>{selectedThread.body}</p>
              <button
                onClick={() => deleteThread(selectedThread.id)}
                className="text-white bg-red-500 hover:bg-red-600 rounded px-4 py-2 mt-4"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onebox;
