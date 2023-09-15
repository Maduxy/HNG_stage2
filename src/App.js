import logo from './logo.svg';
import './App.css';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Pages/>
    </div>
    </BrowserRouter>
  );
}

export default App;
