import { Toaster } from "react-hot-toast";
import Router from "./routes/main";

function App() {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Router />
    </>
  );
}

export default App;
