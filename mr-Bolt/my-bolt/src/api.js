// api.js
export const getAllBots = async () => {
  try {
    const response = await fetch('http://localhost:3000/bots');
    if (!response.ok) {
      throw new Error('Failed to fetch bots');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching bots:', error);
    throw error;
  }
};
  