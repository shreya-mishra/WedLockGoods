import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoute from './routes/productRoute.js'
import { NotFound, errorHandler } from './middleware/errorMiddleware.js'
import userRoute from './routes/userRoute.js'
import orderRoute from './routes/orderRoute.js'
dotenv.config()
connectDB();

const app = express()
app.use(express.json())
app.get('/api', (req, res) => {
    res.send("Api running")
})
app.use('/api/products', productRoute)
app.use('/api/users', userRoute)
app.use('/api/orders', orderRoute)
app.get('/api/config/paypal',(req,res) => res.send(process.env.PAYAL_CLIENT_ID))


app.use(NotFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server running on port ${PORT}`))

