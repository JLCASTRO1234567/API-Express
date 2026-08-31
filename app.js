import express from 'express';

const app = express()
const PORT = 3000

const usuarios = [
    {id: 1, nome: 'rato'},
    {id: 2, nome: 'julius'},
    {id: 3, nome: 'JL'}
];

app.get('/', (req, res) => {
    res.send('bem vindo ao Express!! :3')
});

app.get('/usuarios', (req,res) => {
    res.json(usuarios);
});

app.post('/usuario', () => {
    const novoUsuario = {
        id: usuarios.length +1,
        nome: 'Lucas'
    }
    usuarios.push(novoUsuario)
    res.status(201).json(novoUsuario)
});

app.get('/usuario/:id', (req,res) => {
    const id = req.params.id;
    const usuario = usuario.find(u => u.id === parseInt (id));
    if(!usuario){
        return res.status(404).json({error: "usuario não encontrado!!!!"})
    }
    res.json(usuario);
});

app.listen(PORT, () => {
    console.log(`servidor rodando em http://localhost:${PORT}`)
});