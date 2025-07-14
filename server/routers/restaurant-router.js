import restaurantController from "../controllers/restaurant.controller.js";

import express from "express";
const router = express.Router();
//PORT https://localgost:5000/api/v1/restaurant

router.post("/", restaurantController.create);

export default router;
