import React, { useState } from 'react';

function BotCard({ bot, releaseBot, dischargeBot }) {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePostRequest = () => {
    setLoading(true); 
    
    const url = 'http://localhost:3000/bots';

  
    fetch(url, {
      method: 'POST',
      
      headers: {
        'Content-Type': 'application/json',
        
      },
     
      body: JSON.stringify({
        
        botId: bot.id 
      }),
    })
    .then(response => {
      // Check if the request was successful (status code 200-299)
      if (response.ok) {
        // Update state to display success message
        setMessage('Post request successful!');
      } else {
        // Update state to display error message
        setMessage('Error: Something went wrong with the post request.');
      }
    })
    .catch(error => {
      // Update state to display error message
      setMessage('Error: ' + error.message);
    })
    .finally(() => {
      setLoading(false); // Set loading to false when the request is completed
    });
  };

  return (
    <div className="bot-card">
      <h3>{bot.name}</h3>
      <img src={bot.avatar_url} className="card-img-top" alt="..." />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={() => releaseBot(bot.id)}>Release</button>
      <button onClick={() => dischargeBot(bot.id)}>Discharge</button>
      <button onClick={handlePostRequest}>Send POST Request</button>
      {loading && <p>Loading...</p>} {/* Display loading indicator while loading is true */}
      <p>{message}</p>
    </div>
  );
}

export default BotCard;

