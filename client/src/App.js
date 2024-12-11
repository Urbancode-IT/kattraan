import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRouter from './routes/AppRouter'; // Ensure the path is correct

import './App.css'; // Global styles

const App = () => {
    return (
        <div className="App">
            <AppRouter /> 
        </div>
    );
};

export default App;
