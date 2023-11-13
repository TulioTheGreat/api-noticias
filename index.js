const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const NewsController = require('./controllers/NewsController');

mongoose.connect('', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

app.get('/news', NewsController.obterNoticia);

app.post('/news', NewsController.adicionarNoticia);

app.put('/news/:id', NewsController.atualizarNoticia);

app.delete('/news/:id', NewsController.excluirNoticia);



