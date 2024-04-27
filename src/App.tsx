import { Toaster } from "react-hot-toast";
import Router from "./routes/main";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      {/* <Loader /> */}
      <Toaster position="bottom-center" reverseOrder={false} />
      <Router />
    </>
  );
}

export default App;
