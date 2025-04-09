import express from 'express'
const router = express.Router()

// Define user routes
// Get all products
router.get("/", async (req, res) => {
  const db = req.app.locals.db
  const productName = req.query.product_name ?? ''
  console.log('product name:', productName)
  try {
    const [result, fields] = await db.query(`select * from products
           where name like '%${productName}%';`)
    res.json(result)
  } catch (error) {
    res.status(404).json('error')
  }
});

router.get('/productDetails', async (req, res) => {
  const db = req.app.locals.db
  const productId = parseInt(req.query.id)
  if (isNaN(productId)) {
    res.status(404).json({ message: 'Product not found' })
    return
  }
  const getProductByIdQuery = `select * from products
  where id = ?`
  try {
    const [result, fields] = await db.execute(getProductByIdQuery, [productId])
    const product = result[0]
    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }
    return res.json(product)
  } catch (error) {
    return res.status(404).json({ message: 'Product not found' })
  }
})

export default router
