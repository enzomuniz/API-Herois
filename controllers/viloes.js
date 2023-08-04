const viloes = require('../models/viloes')


exports.criar= (req, res) => {
    const vilao = req.body
    viloes.push(vilao);
    res.status(201).send({message: 'Vilão Criado!', viloes});
};




