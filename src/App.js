import { AppProvider } from "contexts/app.context";

// Global Styles
import "global-styles/index.scss";

// Components
import Stocks from "components/stocks";

function App() {
  return (
    <AppProvider>
      <Stocks />
    </AppProvider>
  );
}

export default App;
