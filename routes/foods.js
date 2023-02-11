const foods = require('../db/foods.json');
const singleFood = require('../db/single-food.json');

module.exports = {
    getFoods(req, res) {
        res.status(200).send({
            total: 68,
            result: foods
        });
    },

    getFood(req, res) {
        const id = req.params.id;
        if (id) {
            res.status(200).send({
                data: singleFood
            });
        } else {
            res.status(404).send({message: "Not found!"});
        }
        
    },
}