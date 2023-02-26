import './bootstrap';
import '../css/app.css';

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
    return (
        <ChakraProvider>
            <h1>Hello Chakra</h1>
        </ChakraProvider>
    )
}

ReactDOM.createRoot(document.getElementById('kontiApp')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)