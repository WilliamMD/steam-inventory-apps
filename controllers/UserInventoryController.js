const { Game, User, UserCart, UserInventory } = require('../models');

class UserInventoryController {
    static async buy(req, res) {
        try {
            const CartId = req.params.CartId

            // ambil id user dan game
            let cart = await UserCart.findByPk(CartId);
            const UserId = cart.UserId;
            const GameId = cart.GameId;
            
            // ambil price dari game
            let games = await Game.findByPk(GameId)
            let game_price = games.price;

            // ambil wallet dari user
            let users = await User.findByPk(UserId)
            let user_wallet = users.wallet;
            
            // validasi price kurang dari wallet player
            if (user_wallet >= game_price) {
                // kurangi wallet player dengan price dari game
                await User.increment({
                    wallet: -game_price
                },
                {
                    where: { id:UserId }
                })  

                // masukkin game ke inventory
                await UserInventory.create({
                    UserId, GameId
                })

                // hapus dari cart
                await UserCart.destroy({
                    where: { id:CartId }
                })

                res.status(201).redirect(`/users/${UserId}`);
            } else {
                res.status(400).json({ 
                    message: 'Not enough wallet to buy the game!'
                });
            }            
            // res.json(game_price);
        } catch(err) {
            res.status(500).json(err.message);
        }
    }
}

module.exports = UserInventoryController;