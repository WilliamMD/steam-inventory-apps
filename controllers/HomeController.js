const { User, UserInventory } = require('../models');

class HomeController {
    static async home(req, res) {
        try {
            let users = await User.findAll({
                include: [ UserInventory ],
                order: [["id", "ASC"]],
                where: {
                    deletedFlag: 0
                }
            })
            // res.json(users);
            res.status(200).render('homePage.ejs', { users });
        }
        catch (err) {
            res.status(500).json(err.message);
        }
    }
}

module.exports = HomeController;