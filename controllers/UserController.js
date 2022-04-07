const User = require('../models/User');


class UserController {

    // Professor
    static async paginaProfessor(req, res) {
        let users = await User.findAll({
            where: {
                type: 1,
            
            }
        })

        res.render('user', { users })
    }

    // Renderizar página de Add Professor
    static async paginaAdicionarProfessor(req, res) {
        res.render('adduser', {
            professor_id: req.params.professor_id
        })
    }

    // Adicionar Professor
    static async addProfessor(req, res) {
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            type: 1
        });
        await user.save();

        res.redirect("/")
    }


    // Aluno
    static async paginaAluno(req, res) {
        let alunos = await User.findAll({
            where: {
                type: 2
            }
        })

        res.render('aluno', { alunos })
    }


    // Renderizar página de Add Aluno
    static async paginaAdicionarAluno(req, res) {
        res.render('addaluno')
    }

    // Adicionar Aluno
    static async addAluno(req, res) {
        let aluno = new User({
            name: req.body.name,
            email: req.body.email,
            type: 2,
            turma_id: req.params.turma_id
        });
        await aluno.save();

        res.redirect("/")
    }

    //Editar User
    static async paginaEditUser(req, res) {
        const id = req.params.id
        const user = await User.findOne({ where: { id: id } })

        res.render('edituser', { user: user });
    }

    // Atualização 
    static async editUser(req, res) {
        const id = req.body.id;
        const name = req.body.name;
        const email = req.body.email

        const userData = {
            id,
            name,
            email,
        }
        console.log(userData)
        User.update(userData, { where: { id } })


        res.redirect("/");
    }

    static async deleteUser(req, res) {
        const id = req.params.id
        await User.destroy({ where: { id } })

        res.redirect("/");

    }


}

module.exports = UserController