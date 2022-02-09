import React, { useState } from "react";
import Form from "./Form";
import Order from "./Order";
import logo from "../images/logo.png";
import "./App.css";

function App() {
  const [orders, setOrders] = useState([]);

  function addOrder(order) {
    setOrders(orders => [...orders, order]);
  }

  const displayOrders = orders.map((order, idx) => {
    return <Order key={idx} order={order} />;
  });

  console.log(displayOrders)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Form addOrder={addOrder}/>
      <div className="ui raised container segment">
        <h1 className="ui block header">All Orders</h1>
        <div className="ui three cards">
          {displayOrders.length > 0 ? displayOrders : null}
        </div>
      </div>
    </div>
  );
}

export default App;
