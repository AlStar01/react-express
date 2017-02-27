let express = require('express');
let router = express.Router();

const CARS = [
    { id: 0, name: 'foo' },
    { id: 1, name: 'bar' }
];

router.get('/', (req, res) => {
    res.send(CARS);
});

module.exports = router;
