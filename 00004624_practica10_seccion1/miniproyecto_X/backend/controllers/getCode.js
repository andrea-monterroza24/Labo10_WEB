import { db } from "../data/connection.js";

export const searchCustomerByCode = async (req, res) => {
    const { code } = req.params;

    const result = await db.query(
        'SELECT * FROM customers WHERE code = $1',
        [code]
    );

    if (result.rows.length === 0) {
        return res.json({
            success: false,
            message: 'Cliente no encontrado',
            data: []
        });
    }

    return res.json({
        success: true,
        data: result.rows
    });
};