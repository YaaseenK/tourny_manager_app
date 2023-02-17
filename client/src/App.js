import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Profile from './pages/Profile';
import ManagerDash from './pages/ManagerDash';
import Login from './pages/Login';
import Signup from './pages/Signup';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


function App() {
  return (
    <Router>
     <ApolloProvider client={client}>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Routes>
          <Route 
              path="/login" 
              element={<Login />}
            />
            <Route 
              path="/signup" 
              element={<Signup />} 
            />
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route 
            path="/profile" 
            element={<Matchup />} 
          />
          <Route 
            path="/managerDash/:id" 
            element={<Vote />} 
          />
        </Routes>
      </div>
     </ApolloProvider>
    </Router>
  );
}


export default App;
