

import React from "react"
import ReactDOM from "react-dom/client"


const app = React.createElement("div",{id:"parent"},[React.createElement("h3",{id:"child"},"React"),
React.createElement("h3",{id:"son"},"Learn")]);
const next=React.createElement("h3",{},"Hello")
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([app,next]);
                  