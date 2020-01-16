const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {



    /** Realiza a busca de todos os devs */
    async index(request, response){
        const devs = await Dev.find()
        
        return response.json(devs)
    },



    /** Store salva no banco */
    async store(request, response) {
        /* Seleciona somento esse campo do corpo da solicitação */
        const { github_username, techs, latitude, longitude } = request.body;

        /** Verifica se existe um dev ja cadastrado */
        let dev = await Dev.findOne({ github_username });

        if (!dev) {

            /** API do github para consumir dados de usuario */
            const apiResponse = await axios.get(`http://api.github.com/users/${github_username}`);

            /** */
            const { name = login, avatar_url, bio } = apiResponse.data;

            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }

            /** Criar no banco */
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })

            console.log('Cadastro Realizado')
        }
        
        return response.json(dev)
    },


    /** Atualiza os dados dos devs  */
    async update(request, response){},


    /** Deleta um dev do banco  */
    async delete(request, response){}
}