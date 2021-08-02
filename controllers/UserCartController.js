const { Game, User, UserCart, UserInventory } = require('../models');

class UserCartController {
    static async show(req, res) {   
        try {
            const UserId = +req.params.UserId;
            let carts = await UserCart.findAll(
            {
                include:
                [
                    {
                        model: Game,
                        attributes: ["id", "name", "genre", "price"],
                        required: true
                    }
                ],
                where: 
                {
                    UserId 
                }
            }); 
            let users = await User.findByPk(UserId);
            
            // res.json(carts);
            res.status(200).render('cartPage.ejs', { carts, users });
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async add(req, res) {
        try {
            const UserId = req.params.UserId;
            const GameId = req.params.GameId;

            let isExists1 = await UserInventory.findOne({
                where: { UserId, GameId }
            })

            let isExists2 = await UserCart.findOne({
                where: { UserId, GameId }
            })

            if (isExists1) {
                res.status(400).json({
                    message: 'You already own this game!'
                })
            } else if(isExists2) {
                res.status(403).json({
                    message: 'This game is already in your cart!'
                })
            }
            else {
                await UserCart.create({
                    UserId, GameId
                });
    
                res.status(201).redirect(`/carts/${UserId}`);
            }
            
        } catch(err) {
            res.status(500).json(err.message);
        }
    }

    static async remove(req, res) {
        try {
            const id = req.params.CartId;

            const carts = await UserCart.findOne({
                where: { id }
            },
            {
                include: [User]
            });

            await UserCart.destroy({
                where: {id}
            })

            res.status(200).redirect(`/carts/${carts.UserId}`);
        } catch(err) {
            res.status(500).json(err.message);
        }
    }
}

module.exports = UserCartController;