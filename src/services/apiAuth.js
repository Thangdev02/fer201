const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
console.log("Base URL:", apiBaseUrl); // Add this to check if the value is being loaded

const apiEndpoints = {
  user: `${apiBaseUrl}/user`,     
  orchid: `${apiBaseUrl}/orchids`    
};

export default apiEndpoints;
