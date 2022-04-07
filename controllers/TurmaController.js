const Turma = require('../models/Turma')
const User = require('../models/User')

class TurmaController {

    // Turma
    static async paginaTurma(req, res) {
          let turmas = await Turma.findAll({ 
            where: {
                 professor_id: req.params.professor_id
             }
         })
         let professor = await User.findByPk(req.params.professor_id)
        // console.log(professor)
        res.render('turma', { turmas, professor })
    }


    // Renderizar página de Add Turma
    static async paginaAdicionarTurma(req, res) {
        res.render('addturma', {
            professor_id: req.params.professor_id,
            
        })
       
    }

    // Adicionar Turma
    static async addTurma(req, res) {
        let turma = new Turma({
            professor_id: req.params.professor_id,
            name: req.body.name,
        });
        await turma.save();

        res.redirect("/")
    }



    //Editar Turma
    static async paginaEditTurma(req, res) {
        const id = req.params.id
        const turma = await Turma.findOne({ where: { id: id } })

        res.render('editturma', { turma });
    }

    // Atualização 
    static async editTurma(req, res) {
       // const professor_id = req.body.professor_id;
        const id = req.body.id;
        const name = req.body.name;


        const userData = {
            id,
            name,
           // professor_id

        }
        console.log(userData)
        Turma.update(userData, { where: { id } })


        res.redirect("/");
    }

    static async deleteTurma(req, res) {
        //const professor_id = req.body.professor_id
        const id = req.params.id
        await Turma.destroy({ where: { id } })

        res.redirect("/");
    }

}

module.exports = TurmaController