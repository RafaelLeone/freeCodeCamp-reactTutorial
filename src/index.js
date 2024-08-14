import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return (
    <div id="someValue" className="something">
      Hey, <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>john doe</h2>;
const Message = () => {
  return <p>my message</p>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
