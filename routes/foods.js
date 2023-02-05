const foods = require('../db/foods.json');

module.exports = {
    getFoods(req, res) {
        res.status(200).send({
            total: 68,
            result: foods
        });
    },
}