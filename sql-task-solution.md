## SQL Task Solution
The SQL Query for this task: <https://github.com/irysan/test-challenge/blob/main/sql/postgres/README.md>
is as follows:

```sql
SELECT
  u.name,
  u.email,
  SUM(o.quantity * p.price) AS total_amount_spent
FROM
  users u
JOIN
  orders o ON u.id = o.user_id
JOIN
  products p ON o.product_id = p.id
WHERE
  p.category = 'Electronics'
GROUP BY
  u.id
HAVING
  COUNT(o.id) >= 3
  AND SUM(o.quantity * p.price) > 1000
ORDER BY
  total_amount_spent DESC;
```