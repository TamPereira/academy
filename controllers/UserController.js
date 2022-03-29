const User = require('../models/User');

class UserController {

   
    // Renderizar página de Add
    static async paginaAdicionarUser(req, res) {
        res.render('/adduser')
    }

    // Adicionar User
    static async addUser(req, res) {
        const { name, occupation } = req.body;
        const user = User({ name, occupation });
        await user.save();

       User.create({name, occupation})
        res.redirect("/")
    }

     // Verificar
     static async paginaUser(req, res) {
       const users = await User.findAll({raw: true})
       console.log(users)

       res.redirect('home', {users: users})
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

        res.redirect("/home");
    }

    static async deleteUser(req, res) {
        const id = req.params.id
        await User.destroy({where: { id:id }})

        res.redirect("/");
    }


}

module.exports = UserController