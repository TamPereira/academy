const Nota = require('../models/Nota')
const User = require('../models/User')

class NotaController {

    // Notas
    static async paginaNota(req, res) {
          let notas = await Nota.findAll({ 
            where: {
                 aluno_id: req.params.aluno_id,
                 
             }
         })
         let nota = await User.findByPk(req.params.aluno_id)
        res.render('nota', { notas, nota })
    }


    // Renderizar página de Add Notas
    static async paginaAdicionarNota(req, res) {
        res.render('addnota', {
            aluno_id: req.params.aluno_id,
            referer: req.get('referer')
        })
       
    }

    // Adicionar Notas
    static async addNota(req, res) {
        let nota = new Nota({
            aluno_id: req.params.aluno_id,
            avaliacao: req.body.avaliacao,
        });
        await nota.save();

        res.redirect(req.body.referer)
    }


    //Editar Notas
    static async paginaEditNota(req, res) {
        const id = req.params.id
        const nota = await Nota.findOne({ where: { id: id } })

        res.render('editnota', { nota,
            referer: req.get('referer')
         });
    }

    // Atualização 
    static async editNota(req, res) {
       
        const id = req.body.id;
        const avaliacao = req.body.avaliacao;

        const userData = {
            id,
            avaliacao,
        }
        console.log(userData)
        Nota.update(userData, { where: { id } })

        res.redirect(req.body.referer);
    }

    // Deletar nota
    static async deleteNota(req, res) {
        const id = req.params.id
        await Nota.destroy({ where: { id } })

        res.redirect(req.get('referer'));
    }

}

module.exports = NotaController