import React from "react";
import ReactDOM from "react-dom/client";

// JSX Element
const heading = <h1>Namaste World</h1>;

// Functional Component

const Header = () => {
  return (
    <div>
      {heading}
      <h1>Hello world</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, veritatis
        nulla quisquam enim voluptas impedit pariatur sed eveniet unde sequi est
        voluptates repudiandae eius blanditiis temporibus assumenda nobis.
        Placeat, omnis.
      </p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
