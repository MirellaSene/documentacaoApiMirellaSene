import express from "express";
const router = express.Router();

let USUARIOSSESI = [
    {id: 1, nome: "Mirella linda", email:"mirella@gmail.com"},
    {id: 2, nome: "Henry feio", email:"rayssa@gmail.com"},
    {id: 3, nome: "Rayssa linda", email:"Hadassa@gmail.com"}
];

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Lista todos os usuarios
 *     tags: [Usuários]
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 */
router.get("/", (req,res)=>{
    res.status(200).json(USUARIOSSESI);
});

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Usuários]
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 */
router.post("/", (req,res)=>{
    const {nome, email} = req.body;

    const novoUsuario = {
        id: USUARIOSSESI.length + 1,
        nome,
        email
    };

    USUARIOSSESI.push(novoUsuario);

    res.status(201).json(novoUsuario);
});

export default router;