import { type } from "os";
import Restaurant from "../models/restaurant.model.js";

const restaurantController = {};
// Create and save a new restaurant

exports.create = async (req, res) => {
  const { name, type, imgageUrl } = req.body;

  //validate data เช็คค่าว่าเป็นค่าว่างไหม
  if (!name || !type || !imgageUrl) {
    res.status(400).send({ message: "Name, Type or ImgUrl can not be empty!" });
  }
  return;
};

await Restaurant.fideOne({ where: { name: name } }).then((restaurant) => {
  if (restaurant) {
    res.status(400).send({ message: "Restaurant already exists'" });
    return;
  }

  const newRestaurant = {
    name: name,
    type: type,
    imageUrl: imgageUrl,
  };

  Restaurant.create(
    newRestaurant
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send({
          message:
            error.message || "Something error while creating the restuarant",
        });
      })
  );
});

export default restaurantController;
