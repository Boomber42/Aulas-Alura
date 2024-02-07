import app from './src/app.js'

var door = process.env.DOOR || 3000;

app.listen(door, () => {
    console.log(`Servidor rodando em http://localhost:${door}`);
})