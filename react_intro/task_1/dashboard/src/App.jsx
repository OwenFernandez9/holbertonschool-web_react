import './App.css';
import logo from './assets/holberton-logo.jpg';
import Notifications from './Notifications';
import { getCurrentYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className='App'>
      <Notifications />
      
      <div className="App-header">
        <img src={logo} alt="Holberton logo" className="App-logo" />
        <h1>School dashboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>

      <div className="App-footer">
        <p>
          {getFooterCopy()} - {getCurrentYear(true)}
        </p>
      </div>
    </div>
  );
}

export default App;
