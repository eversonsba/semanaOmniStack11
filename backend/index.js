const express = require('express');

const app = express();

app.get('/',(request,response)=> {

    return response.json({
        evento:"Semana omniStack 11.0",
        aluno:"Everson"
    });

});

app.listen(3333);

