import React from 'react';
import Notifications from './Notifications';
import { getCurrentYear, getFooterCopy } from './utils';

function App() {
  return (
    <>
      <div className="root-notifications">
        <Notifications />
      </div>

      <div className="App-footer">
        <p>
          {getFooterCopy(true)} - {getCurrentYear()}
        </p>
      </div>
    </>
  );
}

export default App;
