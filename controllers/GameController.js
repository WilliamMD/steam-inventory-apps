const { Game, User, UserCart, UserInventory } = require('../models');

class GameController {
    static async store(req, res) {
        try {
            const UserId = req.params.UserId;

            const users = await User.findByPk(UserId);
            let games = await Game.findAll({
                order : [
                    ["genre", "ASC"],
                    ["createdAt", "ASC"]
                ]
            });
            
            res.status(200).render('gameStorePage.ejs', { games, users });
        
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async details(req, res) {
        try {
            const Gameid = req.params.GameId;
            const UserId = req.params.UserId;

            let inventories = await UserInventory.findAll({
                where: { UserId }
            });

            let games = await Game.findByPk(Gameid);
            let users = await User.findByPk(UserId);

            res.status(200).render('gameDetailPage.ejs', { games, users, inventories });
        
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async addPage(req, res) {
        try {
            const UserId = req.params.UserId;

            const users = await User.findByPk(UserId);

            res.status(200).render('gameAddPage.ejs', { users });
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async add(req, res) {
        try {
            const { name, description, genre, price, image } = req.body;
            const UserId = req.params.UserId;

            let isExists = await Game.findOne({
                where: { name }
            })

            if (isExists) {
                res.status(400).json({
                    message: 'Game already exists!'
                })
            } else {
                let games = await Game.create({
                    name, description, genre, price, image
                });
    
                res.status(201).redirect(`/games/${UserId}/detail/${games.id}`);
            }

        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async edit(req,res) {
        try {
            const id = req.params.GameId;
            let games = await Game.findByPk(id);

            const UserId = req.params.UserId;
            let users = await User.findByPk(UserId);

            res.status(200).render('gameEditPage', { games, users });
        } catch(err) {
            res.status(500).json(err.message);
        }
    }

    static async update(req, res) {
        try {
            const id = req.params.GameId;
            const { name, description, genre, price, image } = req.body;

            const UserId = req.params.UserId;

            await Game.update({
                name, description, genre, price, image
            }, 
            {
                where: { id }
            });

            res.status(200).redirect(`/games/${UserId}/detail/${id}`);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async remove(req, res) {
        try {
            const GameId = req.params.GameId;

            const UserId = req.params.UserId;

            await Game.destroy({
                where: { id: GameId }
            });

            await UserCart.destroy({
                where: {
                    GameId,
                    UserId
                }
            });

            await UserInventory.destroy({
                where: {
                    GameId,
                    UserId
                }
            });

            res.status(200).redirect(`/games/${UserId}/store`);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }
}

module.exports = GameController;