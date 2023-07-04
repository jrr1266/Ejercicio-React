import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { apiAll, api_key, apiDetalles } from "../Api/Api";
export const DataContex = createContext();

function DataContexProvider({ children }) {
  const popularAxios = () => axios.get(apiAll);

  const [populares, setPopulares] = useState([]);
  const getPopular = async () => {
    try {
      const res = await popularAxios();
      setPopulares(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const detallesAxios = async (id) => {
    try {
      const consulta = await axios.get(
        `${apiDetalles}/${id}?api_key=${api_key}`
      );
      localStorage.setItem("data", JSON.stringify([consulta.data]));
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {}, [detallesAxios]);

  const [newObject, setNewObject] = useState([]);

  const getFilm = async (item) => {
    let resultado = populares.filter((n) => {
      if (n.title.toString().toLowerCase().includes(item.toLowerCase())) {
        return n;
      }
    });
    setNewObject(resultado);
  };
  const registerObject = (user) => {
    const newUser = {
      name: user.name,
      email: user.email,
      password: user.password,
    };
    localStorage.setItem("newUser", JSON.stringify(newUser));
    JSON.parse(localStorage.getItem("newUser"));
  };

  useEffect(() => {
    getPopular();
  }, []);
  const findById = (id) => {
    detallesAxios(id);
  };

  return (
    <DataContex.Provider
      value={{
        newObject,
        getFilm,
        populares,
        registerObject,
        findById,
      }}
    >
      {children}
    </DataContex.Provider>
  );
}

export default DataContexProvider;
