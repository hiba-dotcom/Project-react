import './App.css'
import {BrowseRouter} from 'react-router-dom'
import AppRouter from './routes/AppRouter.jsx'

function App() {
  return (
    <BrowseRouter>
      <AppRouter/>
    </BrowseRouter>
  );
}
export default App 