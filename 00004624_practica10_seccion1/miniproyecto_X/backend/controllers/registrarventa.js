import { db } from "../data/connection.js";

export const createSale = async (req, res) => {
    const { id_customer, amount } = req.body;
    
    console.log('Recibiendo venta - id_customer:', id_customer, 'amount:', amount);

    const customerCheck = await db.query(
        'SELECT id FROM customers WHERE id = $1',
        [id_customer]
    );

    if (customerCheck.rows.length === 0) {
        return res.status(404).json({
            success: false,
            message: 'Cliente no encontrado'
        });
    }

    const result = await db.query(
        'INSERT INTO sales (id_customer, amount, created_at) VALUES ($1, $2, NOW()) RETURNING *',
        [id_customer, amount]
    );

    console.log('Venta insertada correctamente - ID:', result.rows[0].id);

    return res.status(201).json({
        success: true,
        message: 'Venta registrada exitosamente',
        data: result.rows[0]
    });
};