const express = require("express");
const db = require("../db/database");
const router = express.Router();

//query - Process Natural Language Query
router.post("/query", (req, res) => {
    const { query } = req.body;
    if (!query) return res.status(400).json({ error: "Query is required" });

    let sqlQuery;

    if (query.toLowerCase().includes("total sales")) {
        sqlQuery = "SELECT SUM(sales) AS total_sales FROM orders";
    } else if (query.toLowerCase().includes("top customer")) {
        sqlQuery = "SELECT customer_name FROM orders ORDER BY sales DESC LIMIT 1";
    } else if (query.toLowerCase().includes("highest paid employee")) {
        sqlQuery = "SELECT name, salary FROM employees ORDER BY salary DESC LIMIT 1";
    } else {
        return res.json({ result: "I don't understand the query." });
    }

    // Execute query
    db.get(sqlQuery, (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        return res.json({ result: row });
    });
});

//explain - Explain Query Breakdown
router.post("/explain", (req, res) => {
    const { query } = req.body;
    if (!query) return res.status(400).json({ error: "Query is required" });

    let explanation;
    if (query.toLowerCase().includes("total sales")) {
        explanation = "Fetching total sales from the 'orders' table.";
    } else if (query.toLowerCase().includes("top customer")) {
        explanation = "Finding the customer with the highest sales.";
    } else {
        explanation = "Query breakdown unavailable.";
    }

    res.json({ explanation });
});

//validate - Validate Query Feasibility
router.post("/validate", (req, res) => {
    const { query } = req.body;
    if (!query) return res.status(400).json({ error: "Query is required" });

    let isValid = false;
    if (query.toLowerCase().includes("total sales") || query.toLowerCase().includes("top customer")) {
        isValid = true;
    }

    res.json({ valid: isValid });
});

module.exports = router;
