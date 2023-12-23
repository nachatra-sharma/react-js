// ============= Hello World

const heading = React.createElement("h1", { id: "heading" }, "Hello World");

root.render(heading);

// ============= Print this code

/*

<div id = "parent">
    <div id = "child">
        <h1> Namaste React </h1>
    </div>
</div>

*/

const body = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "Namaste React")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(body);
