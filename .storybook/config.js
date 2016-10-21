import { addDecorator, configure } from "@kadira/storybook";
import "../scss/index.scss";
import React from "react";

addDecorator((story) => (
  <div style={{
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center",
    "height": "100vh"
  }}>
    {story()}
  </div>
));

// autodetect all stories
const req = require.context("../stories", true, /\.jsx$/);
function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
