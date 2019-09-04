import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';


function App() {
  return (
    <div className="App">

      {/* The components here will be "placed" inside the ThemeContextProvider */}
      {/* So all of them will have the shared data */}

      <AuthContextProvider>
        <ThemeContextProvider>


          <Navbar />


          <BookContextProvider>
            <BookList />
          </BookContextProvider>

          <ThemeToggle />


        </ThemeContextProvider>
      </AuthContextProvider>

    </div>
  );
}

export default App;
