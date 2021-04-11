const express = require('express')
const app = express();

const { products } = require('../data')

app.get('/', (req, res) => {
    res.send('<h1>header,</h1><a href="/api/products">products</a>');
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image };
    })
    res.send(newProducts);
})

app.get('/api/products/:id', (req, res) => {
    // console.log(req.params);
    const singleProduct = products.find((product) => product.id.toString() === req.params.id
    );
    if (!singleProduct) {
        res.status(404).send("product doesnt exists");
    }
    res.send(singleProduct);
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send('hello world');

})

app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    const { search, limit } = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    if (sortedProducts.length == 0) {
        return res.status(200).send('no products matches')
    }
    return res.json(sortedProducts);
})


app.listen(5000, () => {
    console.log('Server is listening on the port 5000')
})