const Turma = require('../models/Turma');
const User = require('../models/User');
const Nota = require('../models/Nota');

const db = require('../db/conn'); // para poder chamra o query // não esta utilizando o model
const sequelize = require('sequelize');


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
            professor_id: req.params.professor_id,
            referer: req.get('referer')
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

        res.redirect(req.body.referer)
    }

     //Editar User Professor
     static async paginaEditUser(req, res) {
        const id = req.params.id
        const user = await User.findOne({ where: { id: id } })

        res.render('edituser', { user: user,
            referer: req.get('referer')
        });
        
    }

    // Atualização  User professor
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
        res.redirect(req.body.referer);
    }

    // Aluno
    static async paginaAluno(req, res) {
        //query para poder fazer o status no mysql e redenrizando na pagina
        let alunos = await db.query(`SELECT
        SUM( nota.avaliacao) / COUNT( users.id ) as media,
        IF (SUM( nota.avaliacao ) > 0, IF (SUM( nota.avaliacao ) / COUNT( users.id ) >= 7, 'Aprovado', 'Reprovado' ), '')AS status,
         users.*
            FROM
         academy.users
         LEFT JOIN academy.nota ON users.id = nota.aluno_id
         WHERE type = 2 AND turma_id = ${req.params.turma_id}
         GROUP BY
         users.id`
         )
         
        let turma = await Turma.findByPk(req.params.turma_id)

        res.render('aluno', { alunos: alunos[0], turma })
    }


    // Renderizar página de Add Aluno
    static async paginaAdicionarAluno(req, res) {
        res.render('addaluno', {
            turma_id: req.params.turma_id,
            referer: req.get('referer')
        })
    }

    // Adicionar Aluno
    static async addAluno(req, res) {
        let aluno = new User({
            turma_id: req.params.turma_id,
            name: req.body.name,
            email: req.body.email,
            type: 2,
            
        });
        await aluno.save();

        res.redirect(req.body.referer)
    }

    //Editar User Aluno
    static async paginaEditAluno(req, res) {
        const aluno = await User.findOne({ 
            where: {
                id: req.params.id
            }
         })

         const notas = await Nota.findAll({
             where: {
                 aluno_id: req.params.id
             }
         })

          // calcular média
        let total = 0,
        media 
        notas.forEach((nota) => {
        total += parseInt(nota.dataValues.avaliacao)
        })
        media = total / notas.length  // dicidir o total das notas com a quantidade de registros

        res.render('editaluno', { 
            aluno,
            notas,
            media,
            referer: req.get('referer')
        });

       
        
    };

    
        

    // Atualização  Aluno
    static async editAluno(req, res) {
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
        res.redirect(req.body.referer);
    }

    // Excluir usuario
    static async deleteUser(req, res) {
        const id = req.params.id
        await User.destroy({ where: { id } })

        res.redirect(req.get('referer'));

    }


}

module.exports = UserController