import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/App";

const container = document.getElementById("my-react-application");
const root = createRoot(container);
root.render(<App />);