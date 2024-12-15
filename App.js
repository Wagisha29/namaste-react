/*
<div id = parent >
    <div id = child>
        <h1>Hello World from React !</h1>
    </div>
</div>
*/
//write this in react

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "hi from child1 h1"),
    React.createElement("h2", {}, "hi from child1 h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "hi from child2 h1"),
    React.createElement("h2", {}, "hi from child2 h2"),
  ]),
]);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
