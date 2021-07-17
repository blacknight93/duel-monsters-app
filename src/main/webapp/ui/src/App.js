import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './routes';

export default function App() {
    return(
        <Router>
            <Main/>
        </Router>
    )
}