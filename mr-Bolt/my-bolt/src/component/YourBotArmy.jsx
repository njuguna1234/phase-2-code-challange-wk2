import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ yourBotArmy, releaseBot, dischargeBot }) {
  return (
    <div className="your-bot-army">
      {yourBotArmy.map(bot => (
        <BotCard key={bot.id} bot={bot} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      ))}
    </div>
  );
}

export default YourBotArmy;
