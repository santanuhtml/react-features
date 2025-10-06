import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from "./Home";
import Read from "./Read";
import Create from "./Create";
import Update from "./Update";
import Delete from "./Delete";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/read/:id" element={<Read />} />
        <Route path="/delete/:id" element={<Delete />} />
      </Routes>
     </BrowserRouter>
    </>
  );
}
export default App;