import { useState, useCallback } from 'react';

//Custom hook to handle http requests and loading/error states, this was done with help from the React Complete Guide!

const useHttps = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sentRequest = useCallback(async (requestInfo, responseAction) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(requestInfo.url, {
        method : requestInfo.method ? requestInfo.method : 'GET',
        headers : requestInfo.headers ? requestInfo.headers: {},
        body : requestInfo.body ? JSON.stringify(requestInfo.body) : null
      })
      if (!response.ok) {
        throw new Error('Request failed!');
      }
      const data = await response.json();
      responseAction(data);
    } catch (error) {
      setError(error.message || 'Something went wrong!');
    }
    setLoading(false);
  }, []);

  return (
    {
      loading,
      error,
      sentRequest
    }
  );
}

export default useHttps;