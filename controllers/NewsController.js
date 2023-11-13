const New = require('../models/New');

exports.obterNoticias = async (req, res) => {
    try {
        const news = await news.find();
        res.json(news)
      } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar notícias' });
      }
}

exports.adicionarTarefa = async (req, res) => {
    const newNew = req.body;
    try {
        await New.create(newNew);
        res.json({ message: 'Notícia adicionada com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar a notícia' });
  }
  }

exports.atualizarTarefa = async (req, res) => {
    const newId = req.params.id;
    const updatedNew = req.body;
    try {
        await New.findByIdAndUpdate(newId, updatedNew);
        res.json({ message: 'Notícia atualizada com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar notícia' });
    }
}

exports.excluirTarefa = async (req, res) => {
    const newId = req.params.id;
    try {
        await New.findByIdAndDelete(newId);
        res.json({ message: 'Notícia excluída com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir notícia' });
  }
}
