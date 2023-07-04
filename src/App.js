import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetallesPages from "./Pages/DetallesPages";
import DataContextProvider from "./Context/DataContex";
import Album from "./Pages/Album";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
function App() {
  return (
    <DataContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/album" element={<Album />} />
          <Route path="/detalles" element={<DetallesPages />} />
        </Routes>
      </BrowserRouter>
    </DataContextProvider>
  );
}

export default App;
