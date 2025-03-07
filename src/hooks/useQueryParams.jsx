import { useState, useEffect } from 'preact/hooks';

/**
 * Custom hook to handle URL query parameters
 * @returns {Object} Query parameters as an object
 */
export function useQueryParams() {
  const [queryParams, setQueryParams] = useState({});
  
  useEffect(() => {
    // Parse query parameters on component mount
    const params = new URLSearchParams(window.location.search);
    const paramsObject = {};
    
    // Convert URLSearchParams to a plain object
    for (const [key, value] of params) {
      paramsObject[key] = value;
    }
    
    setQueryParams(paramsObject);
    
    // Optionally, you can clean the URL by removing the query parameters
    // This prevents refreshing the page from showing the same popup again
    if (Object.keys(paramsObject).length > 0) {
      const url = new URL(window.location);
      url.search = '';
      window.history.replaceState({}, document.title, url.toString());
    }
  }, []);
  
  return queryParams;
}