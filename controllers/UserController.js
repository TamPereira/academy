const User = require('../models/User');

class UserController {

     // Professor
     static async paginaProfessor(req, res) {
       let users = await User.findAll({
        where: {
            type: 1
        }
       })

       res.render('user', {users})
     }

     
    // Renderizar página de Add
    static async paginaAdicionarUser(req, res) {
    res.render('adduser')
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

    // Adicionar Aluno
    static async addAluno(req, res) {
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            type: 2,
            turma_id: req.params.turma_id
        });
        await user.save();
       
        res.redirect("/")
    }

    
    //Editar User
    static async paginaEditUser(req, res) {
        const { id } = req.params;
        const user = await User.findById(id).lean();

        res.render("useredit", { user });
    }

    // Atualização 
    static async editUser(req, res) {
        const { id, name, occupation } = req.body;

        await User.findByIdAndUpdate(id, { name, occupation });

        res.redirect("/");
    }

    static async deleteUser(req, res) {
        const id = req.params.id
        await User.destroy({where: { id }})
      // const { id } = req.body;
       //await User.findByIdAndDelete(id);

        res.redirect("/");
    }


}

module.exports = UserController