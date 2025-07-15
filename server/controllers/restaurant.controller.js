import { type } from "os";
import Restaurant from "../models/restaurant.model.js";
import { title } from "process";

const restaurantController = {};
// Create and save a new restaurant

exports.create = async (req, res) => {
  const { name, type, imageUrl } = req.body;

  //validate data เช็คค่าว่าเป็นค่าว่างไหม
  if (!name || !type || !imageUrl) {
    res.status(400).send({ message: "Name, Type or ImgUrl can not be empty!" });
  }
  return;
};

await Restaurant.fideOne({ where: { title } }).then((restaurant) => {
  if (restaurant) {
    res.status(400).send({ message: "Restaurant already exists'" });
    return;
  }

  const newRestaurant = {
    title: title,
    type: type,
    imageUrl: imageUrl,
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
