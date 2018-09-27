import React from "react";
import { Router } from "@reach/router";

import Dynamic from "../components/Dynamic";

export default () => (
  <Router>
    <Dynamic path="dynamic/:name" />
  </Router>
);
