const BASE_URL = 'http://localhost:3001';

const apiService = {
  getComments: async () => {
    const response = await fetch(`${BASE_URL}/comments`);
    if(!response.ok) {
        throw new Error('Failed to Fetch Comments')
    }
    const data = await response.json();
    return data;
  },
  addComment: async (comment) => {
    const response = await fetch(`${BASE_URL}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    });
    if(!response.ok) {
        throw new Error('Failed to Add Comment');
    }
    const data = await response.json();
    return data;
  }
}

export default apiService;
