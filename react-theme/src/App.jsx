import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import '../src/css/custom.css';
function App(){
  return(
    <>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </>
  )
}

export default App;