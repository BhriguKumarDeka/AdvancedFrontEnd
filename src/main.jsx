import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary';
import GlobalErrorFallback from './core/components/GlobalErrorFallback.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ErrorBoundary FallbackComponent={GlobalErrorFallback}
    onReset={ ()=> window.location.replace('/')}> 
    {/* wipes the state and forces a full reload */}
    <App />
  </ErrorBoundary>,
)
