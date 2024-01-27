// auth.js

// Function to log in the user
export const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
  };
  
  // Function to log out the user
  export const logout = () => {
    localStorage.removeItem('user');
    // Perform any additional logout logic if needed
  };
  
  // Function to check if the user is authenticated
  export const isAuthenticated = () => {
    const user = localStorage.getItem('user');
    return !!user;
  };
  