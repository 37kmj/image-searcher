import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID WqDNFDoUWr6Jz9sZgf2VXG6raY9dq1bOJ3EsNWA4HE4',
  },
});
