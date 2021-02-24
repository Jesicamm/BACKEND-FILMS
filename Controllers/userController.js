const mongoose = require('mongoose');
const user = require('../Models/user');

class User {
    constructor() {

    }

    //GET (return all users from DB)
    async findAllUser(userColecction) {
        return user.find(userColecction)
    };

    //GET (return an user with id)
    async findById({ _id: id }) {
            return user.findOne({ _id: id });
        }
        //Get (return an user by name)
    async findOneUser(name) {
        const nameFound = user.findOne({ name: name })
        return nameFound;
    }

    //POST (adding a new user)
    async addUser(perfil) {
            return user.create(perfil)
        }
        //PUT (update an existing user)
    async updateUser(id, perfil) {
            const idFound = user.findOne({ _id: id })
            return idFound.update(perfil)
        }
        //DELETE (delete a user by id)
    async deleteUser(id) {
        const idFound = user.findOne({ _id: id })
        return idFound.remove()
    }

}

let userController = new User();
module.exports = userController;