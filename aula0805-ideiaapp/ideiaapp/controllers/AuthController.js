const User = require('../models/User')

const bcrypt = require('bcryptjs')

module.exports = class UserController{
    static login(req, res){
        res.render('auth/login')
    }

    static register(req,res){
        res.render('auth/register')
    }
    
    static async registerPost(re1, res){
        const { nome, email, password, confirmpassword } = req.body

        if(password != confirmpassword){
            req.flash('messege','As senha não conferem, tente novamente meu amigão!')
            res.render('auth/register')
            return
        }

        const checkIfUserExists = await User.findOne({where: {email:email}})

        if(checkIfUserExists){
            req.slash('messege','O e-mail já esxite cadastrado')
            res.render('auth/login')
            return
        }

        const salt = decrypt.genSaltSync(10)
        const hashedPassaword = bcrypt.hashSync(password, salt)

        const user = {
            name, 
            email, 
            password: hashedPassaword
        }

        User.create(user)
        .then((user) => {
            req,session.userid = user.id
            req.flash('mesage','Cadastro realizado com sucesso!')
            req.session.save(() =>{
                res.redirect('/')
            })
            .catch((err) => console.error(err))
        })

    }
}