const connection = require('../database/connection');

module.exports = {
    async index(reques, response){
        const ong_id = reques.headers.authorization;

        const incidents = await connection('incidentes')
        .where('ong_id',ong_id)
        .select('*');

        return response.json(incidents);
    }
}