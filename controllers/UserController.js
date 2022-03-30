const User = require('../models/User');

class UserController {

     // Verificar
     static async paginaUser(req, res) {
        let query = {}
        const { nomeUser } = req.query
        
        if(nomeUser) {
            query = {name: { $regex: `${nomeUser}`, $options: "i"}}
        }
        const users = await User.find(query).lean()
        res.render("user", { users, nomeUser });
     }

     
    // Renderizar página de Add
    static async paginaAdicionarUser(req, res) {
    res.render('adduser')
    }

    // Adicionar User
    static async addUser(req, res) {
       const { name, occupation } = req.body
        const user = User({name, occupation})
        await user.save();
        //console.log('type req.body: ' + typeof req.body)
        res.redirect("/home")
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