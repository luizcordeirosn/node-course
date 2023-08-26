const { Op, where } = require("sequelize");
const User = require("../models/User");
const user = require("../models/User");

module.exports = {
  async show(req, res) {
    const users = await User.findAll({
      attributes: ["name", "email"],
      where: {
        email: {
          [Op.iLike]: "%@outlook.com",
        },
      },
      include: [
        {
          association: "adresses",
          where: {
            street: "Rua Sá e Souza",
          },
          attributes: ["zipcode", "street", "number"],
        },
        {
          association: "techs",
          required: false,
          where: {
            name: {
              [Op.iLike]: "React%",
            },
          },
          through: {
            attributes: [],
          },
          attributes: ['name']
        },
      ],
    });

    return res.json(users);
  },
};
