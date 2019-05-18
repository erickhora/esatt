const express = require('express');

const User = require('./../models/user');
const Orcamento = require('../models/orcamento');
const Item = require("./../models/item");

const router = express.Router();

// SERVIÇOS DE USUÁRIO

router.post("/register", async (req,res) => {
    try {
        const {email} = req.body;
            if(await User.findOne({email})){
                res.status(400).send({error:'E-mail Já cadastrado'});
            }

        const user = await User.create(req.body);
        
        // user.password = undefined;

        return res.send(user);
    } 
    catch (err) {
        return res.status(400).send({err:'Registration Error'});   
    }
});

//Get users
router.get('/users', function(req, res) {
    var users = {};
    users = User.find().then(users => {
        res.send(users);
    })
});

//Delete user
router.delete("/user", function(req,res){
    console.log(req);
    user = User.findOneAndDelete(req.params.email, function(err){
        if(err) return next(err);
        res.send('Deletado com sucesso');
    })
});
//FIM SERVIÇOS DE USUARIO



// SERVIÇOS RELATIVOS AO ORCAMENTO

router.post("/salvarOrcamento", async (req,res) => {
    try {

        const orcamento = await Orcamento.create(req.body);
        return res.send(orcamento);
        
    } 
    catch (err) {
        return res.status(400).send({err:'Registration Error'});   
    }
});

//Get Orcamentos
router.get('/orcamentos', function(req, res) {
    var orcamentos = {};
    orcamentos = Orcamento.find().then(orcamentos => {
        res.send(orcamentos);
    })
});


//Servicos Relativos a Item

router.post("/salvarItem", async (req,res) => {
    try {

        const item = await Item.create(req.body);
        return res.send(item);
        
    } 
    catch (err) {
        return res.status(400).send({err:'Registration Error'});   
    }
});

//Get getItems
router.get('/items', function(req, res) {
    var items = {};
    items = Item.find().then(items => {
        res.send(items);
    })
});

    //Get items by orcamento id
router.get("/itemsOrcamento", async (req,res) => {

    const {orcamento} = req.body;
    console.log(req.body);
        
    var items = {};

    items = Item.find({orcamento:req.body.orcamento}).then(items => {
        res.send(items);
    })
});
    

module.exports = app => app.use('/auth', router);