const herois = require('../models/herois')


exports.criar= (req, res) => {
    const heroi = req.body
    herois.push(heroi);
    res.status(201).send({message: 'Herói Criado!', herois});
};




