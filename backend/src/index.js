const express = require ('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recursos
 */

 /**
  * 
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação no back-endd
  * PUT: Alterar informação
  * DELETE: Deletar alguma informação
  */


  /**
   * Tipos de Parâmentros
   * 
   * Query Params: Parâmetros nomeados enviados nas rotas após "?" (Filtros, paginação)
   * Route Params: Parârametros utilizado para identificar Recursos
   * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
   */

app.listen(3333);