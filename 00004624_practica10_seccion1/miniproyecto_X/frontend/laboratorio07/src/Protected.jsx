import React, { useEffect, useState } from "react";
import API from "./utils/api.js";

const Protected = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get("/protected");
        setMessage(response.data.message);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => window.location.href = "/customers"}>
        Ver tabla de clientes
      </button>
      <button onClick={() => window.location.href = "/sales"}>
        Registrar Nueva Venta
      </button>
      <button onClick={() => window.location.href = "/salesList"}>
        Lista de venta con clientes
      </button>
      <button onClick={() => window.location.href = "/salesReport"}>
        Total de Ventas por Cliente
      </button>
    </div>
  );
};

export default Protected;