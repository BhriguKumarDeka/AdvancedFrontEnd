import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
  const [user, setUser]= useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(()=> {
    const token = localStorage.getItem('token');
    if(token){
      setIsAuthenticated(true);
      setUser({name: 'Lead Scientist', role: 'admin'});
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
    setUser({name: 'Lead Scientist', role: 'admin'});
  }

  const logout = ()=>{
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser(null);
  }

  return(
    <AuthContext.Provider value={{user, isAuthenticated, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);