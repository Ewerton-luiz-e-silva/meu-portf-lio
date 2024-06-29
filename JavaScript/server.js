const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Define o diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, '/')));

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
