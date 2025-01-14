const heading = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, React.createElement("h1", {}, "hello from h1")));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
const Heading = React.createElement("h2", {}, "hello again");
const level = ReactDOM.createRoot(document.getElementById("level"));
level.render(Heading);

//# sourceMappingURL=index.7c0ccee6.js.map
