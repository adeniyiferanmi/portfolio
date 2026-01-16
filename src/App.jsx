
import { Toaster } from 'sonner'
import './App.css'
import Dashboard from './Components/pages/Dashboard'
import EmailProvider from './Context/EmailContext'

function App() {

  return (
    <>
    <Toaster position="top-right" richColors closeButton />
    <EmailProvider>
      <Dashboard/>
      </EmailProvider>
    </>
  )
}

export default App
