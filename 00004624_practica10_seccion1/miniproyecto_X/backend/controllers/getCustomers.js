import { db } from "../data/connection.js";

export const getCustomers = async (req, res) => {
    db.query('SELECT * FROM customers', (error, results) => {
        if (error) {
            throw error;
        }

        const customers = results.rows;
        return res.status(200).json({
            success: true,
            message: `Customers found: ${customers.length}`,
            data: customers
        });
    });
};