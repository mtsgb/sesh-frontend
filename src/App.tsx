import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '@/routes/index';
import './App.css'

function App() {
 
  return (
    <BrowserRouter>
      <div className="bg-background">
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App
