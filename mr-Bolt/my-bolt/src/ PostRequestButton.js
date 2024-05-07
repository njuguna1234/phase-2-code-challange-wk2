import React, { useState } from 'react';

function PostRequestButton() {
  const [message, setMessage] = useState('');

  const handlePostRequest = () => {
    
    const url = 'http://localhost:3000/bots';

    
    fetch(url, {
      method: 'POST',
      
      headers: {
        'Content-Type': 'application/json',
        
      },
    
      body: JSON.stringify({
        
      }),
    })
    .then(response => {
      
      if (response.ok) {
        
        setMessage('Post request successful!');
      } else {
       
        setMessage('Error: Something went wrong with the post request.');
      }
    })
    .catch(error => {
      
      setMessage('Error: ' + error.message);
    });
  };

  return (
    <div>
      <button onClick={handlePostRequest}>Make POST Request</button>
      <p>{message}</p>
    </div>
  );
}

export default PostRequestButton;


