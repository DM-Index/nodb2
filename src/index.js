// I created a base styles folder where all of my app level styling will go.
// normalize or reset.css is imported first, this works like link tags in html.
// This will apply those styles first, then the index.css will be applied.
// We can then import component level stylesheets into each component for use.
// Remember that all className's are global, meaning that a class made in once component is usable in all.
// IF you want to import fonts or some other general import, do it in the app level css like index.css

// if you want to use your own favicon (the logo in the browser tab) replace the favicon file in
// the public folder with your own image and call the file favicon.ico
// more on favicons here --> https://www.favicon-generator.org/

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
