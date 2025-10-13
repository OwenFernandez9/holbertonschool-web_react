import React from "react";
import "./App.css";

import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";

class App extends React.Component {
  render() {
    const notificationsList = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", value: "Server overload" },
    ];
    return (
      <>
        <Notifications notifications={notificationsList} displayDrawer={false} />

        <Header />
        <div className="App-body">
          <Login />
        </div>

        <Footer />
      </>
    );
  }
}

export default App;
