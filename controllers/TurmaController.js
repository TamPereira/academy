const Turma = require('../models/Turma')

class TurmaController{

    // Turma
    static async paginaTurma(req, res) {
        let turmas = await Turma.findAll()
 
        res.render('turma', {turmas})
      }
 
      
     // Renderizar página de Add Turma
     static async paginaAdicionarTurma(req, res) {
     res.render('addturma')
     }
 
 
     // Adicionar Turma
     static async addTurma(req, res) {
         let turma = new Turma({
             name: req.body.name,
            
         });
         await turma.save();
        
         res.redirect("/")
     }
 
 
     
     
     //Editar Turma
     static async paginaEditTurma(req, res) {
         const id = req.params.id
         const turma = await Turma.findOne({where: {id:id}})
 
         res.render('editturma', { turma });
     }
 
     // Atualização 
     static async editTurma(req, res) {
         const id = req.body.id;
         const name = req.body.name;
         
 
         const userData = {
             id,
             name,
            
         }
         console.log(userData)
         User.update(userData, {where: {id}})
 
     
         res.redirect("/");
     }
 
     static async deleteTurma(req, res) {
         const id = req.params.id
         await User.destroy({where: { id }})
      
         res.redirect("/");
     }
 
}

module.exports = TurmaController