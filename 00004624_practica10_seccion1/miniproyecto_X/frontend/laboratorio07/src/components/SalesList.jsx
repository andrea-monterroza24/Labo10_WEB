import React, { useState, useEffect } from 'react';

const SalesList = () => {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        fetchSales();
    }, []);

    const fetchSales = async () => {
        const response = await fetch('http://localhost:3010/api/salesList');
        const data = await response.json();
        
        if (data.success) {
            setSales(data.data);
        }
    };


    return (
        <div>
            <h2>Lista de Ventas</h2>
            
            {sales.length === 0 ? (
                <p>No hay ventas registradas</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>ID Venta</th>
                            <th>Monto</th>
                            <th>Fecha</th>
                            <th>Cliente</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map(sale => (
                            <tr key={sale.id}>
                                <td>{sale.id}</td>
                                <td>${sale.amount}</td>
                                <td>{new Date(sale.created_at).toLocaleString()}</td>
                                <td>{sale.customer_name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <button onClick={() => window.location.href = "/Protected"}>
                Regresar
            </button>
        </div>
    );
};

export default SalesList;