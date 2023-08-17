const heading = React.createElement(
    "h1",{
        id: "heading" , xyz : "abc"},
        "Hello world from React!"
)

const header =  React.createElement("h1",{},"Hello world from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);