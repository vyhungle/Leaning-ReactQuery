import { QueryClient, QueryClientProvider } from "react-query";

import "./App.css";
import HomeScreen from "./pages/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <HomeScreen />
      </div>
    </QueryClientProvider>
  );
}

export default App;
