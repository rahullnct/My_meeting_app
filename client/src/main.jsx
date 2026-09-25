import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/react'

const publishable_key= import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
console.log("Publishable_key:",publishable_key)
if(!publishable_key){
  throw new Error("PUBLISHABLE key not found")
}
createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={publishable_key} aftersignInUrl="/login">
  <BrowserRouter>
  <StrictMode>
        <App />
  </StrictMode>
  </BrowserRouter>
    </ClerkProvider>
)
