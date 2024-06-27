import {Router} from 'express';
import { sample_foods } from './data';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import { Food, FoodModel} from "../models/food.model";

const router = Router();

router.get("/seed", asyncHandler(
  async (req, res) => {
    const foodsCount = await FoodModel.countDocuments();
    if(foodsCount> 0){
      res.send("Seed is already done!");
      return;
    }

    await FoodModel.create(sample_foods);
    res.send("Seed Is Done!");
  }
))

router.post("/login", asyncHandler(
  async (req, res) => {
    const {email, password} = req.body;
    const user = await FoodModel.findOne({email , password});

    if(user) {
      res.send(generateTokenReponse(user));
    }
    else{
      const BAD_REQUEST = 400;
      res.status(BAD_REQUEST).send("Username or password is invalid!");
    }

  }
))

const generateTokenReponse = (food : Food) => {
  const token = jwt.sign({
    name:food.name,
  }, process.env['JWT_SECRET']!,{
    expiresIn:"30d"
  });

  return {

    name: food.name,
    price: food.price

  };
}


export default router;
