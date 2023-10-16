const express = require('express');
const errorHandler = require('./Middleware/errorHandler');


const app = express();

const port = 5000;

// //routes
// app.get('/', (req, res) => {
//     res.send('Hello NODE Api')
// })

app.use(express.json());
app.use('/products', require('./Routes/productRoutes'));
app.use(errorHandler)


app.listen(5000, ()=> {
    console.log('Node api is running on port 5000')
})