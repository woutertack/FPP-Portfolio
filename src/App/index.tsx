import { HashRouter as Router } from "react-router-dom";

import { Pages } from "Pages";

import "Styles/main.css";

/**
 * App.
 *
 * @returns {JSX.Element}
 */
const App = (): JSX.Element => {
  return (
    <Router>

      <Pages />
    </Router>
  );
};

export { App };
