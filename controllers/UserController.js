const { User, UserInventory, Game } = require('../models');

class UserController {
    static async registerPage(req, res) {
        try {
            res.status(200).render('registerPage.ejs');
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async register(req, res) {
        try {
            const { username, password } = req.body;
            
            let isExists = await User.findOne({
                where: { username }
            })

            if (isExists) {
                res.status(400).json({
                    message: 'Username already exists!'
                })
            } else {
                await User.create({
                    username, password
                })
                res.status(201).redirect('/');
            }
        } catch (err){
            res.status(500).json(err.message);
        }
    }

    static async details(req, res) {
        try {
            const id = req.params.UserId;
            const users = await User.findByPk(id);

            let inventories = await UserInventory.findAll({
                include: [Game],
                where: {
                    UserId: id
                },
                order: ["createdAt"]
            })

            res.status(200).render('userDetailPage.ejs', { users, inventories });
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async EditPage(req, res) {
        try {
            const id = req.params.UserId;

            let users = await User.findByPk(id);

            res.status(200).render('userEditPage.ejs', { users });
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async update(req, res) {
        try {
            const id = req.params.UserId;
            const { username, password, avatar } = req.body;

            await User.update({
                username, password, avatar
            },
            {
                where: { id }
            });

            res.status(200).redirect(`/users/${id}`);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async addFunds(req, res) {
        try {
            const id = req.params.UserId;
            const { wallet } = req.body;

            await User.increment(
            { 
                wallet: +wallet
            },
            {
                where: { id }
            });

            res.status(200).redirect(`/users/${id}`);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }
    
    static async delete(req, res) {
        try {
            const id = req.params.UserId;

            await User.update(
            {
                deletedFlag: 1,
            }, 
            {
                where: { id }
            })

            res.status(200).redirect(`/`);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }
}

module.exports = UserController;