import axios from 'axios';

const getInstance = () => {
  const config = {
    baseURL: 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  let newInstance = axios.create(config);

  return newInstance;
};

export default getInstance();
