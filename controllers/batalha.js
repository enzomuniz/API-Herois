const herois = require('./../models/herois')
const viloes = require('./../models/viloes')


exports.batalhar = (req,res) => {
    const {idHeroi, idVilao} = req.body
    const heroi = herois.find((heroi) => heroi.id === idHeroi )
    const vilao = viloes.find((vilao) => vilao.id === idVilao )

   let resultado = null

    if(vilao.pontos === heroi.pontos){
resultado = {message: 'Empate!'}
    } else if (vilao.pontos > heroi.pontos){
resultado = {message: `${vilao.nome} venceu ${heroi.nome}`}
    } else { 
        resultado = {message: `${heroi.nome} venceu ${vilao.nome}`}
    }

res.status(200).send({resultado})
}




