import React, { useState, useEffect } from 'react';
import BotCollection from './component/BotCollection';
import YourBotArmy from './component/YourBotArmy';
import SortBar from './component/SortBar';
// import PostRequestButton from './PostRequestButton';

import { getAllBots } from './api';

function App() {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch bots data when component mounts
    getAllBots()
      .then(data => setBots(data))
      .catch(error => setError(error)); // Handle fetch error
  }, []);

  // Define handleSort function outside of useEffect
  const handleSort = () => {
    // Logic for sorting
    console.log('Sorting...');
  };

  const enlistBot = (bot) => {
    setYourBotArmy([...yourBotArmy, bot]);
  };

  const releaseBot = (botId) => {
    setYourBotArmy(yourBotArmy.filter(bot => bot.id !== botId));
  };

  const dischargeBot = (botId) => {
          
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Include any necessary authentication headers
      },
    })
    .then(response => {
      if (response.ok) {
        // If the delete request is successful, remove the bot from yourBotArmy
        setYourBotArmy(yourBotArmy.filter(bot => bot.id !== botId));
      } else {
        // Handle errors if any
        console.error('Failed to discharge bot');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  if (error) {
    // Render an error message if an error occurred during data fetching
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App">
      <h1>My App</h1>
      {/* <PostRequestButton /> */}
      {/* Pass the handleSort function as a prop */}
      <SortBar handleSort={handleSort} />
      <BotCollection bots={bots} enlistBot={enlistBot} />
      <YourBotArmy yourBotArmy={yourBotArmy} releaseBot={releaseBot} dischargeBot={dischargeBot} />
    </div>
  );
}

export default App;
