import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
// import { store } from './store/SliceStore.jsx';
import { Provider } from 'react-redux'; // ✅ Missing import
import store from './store/store.js';
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
            <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
                <BrowserRouter>
                    <App />   
                </BrowserRouter>
            </ClerkProvider>
    </Provider>
);
