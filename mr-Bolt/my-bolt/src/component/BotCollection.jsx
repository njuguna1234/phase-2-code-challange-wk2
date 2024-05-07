
import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots }) {
  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <BotCard key={bot.id} bot={bot} />
      ))}
    </div>
  );
}

export default BotCollection;

