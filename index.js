{/* <div id="parent">
       <h3 id="child">React</h3>
       <h3 id="child">Learn</h3>
     </div>
     <h3>hello</h3>
     */}





const app = React.createElement("div",{id:"parent"},[React.createElement("h3",{id:"child"},"React"),
React.createElement("h3",{id:"son"},"Learn")]);
const next=React.createElement("h3",{},"Hello")
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([app,next]);
