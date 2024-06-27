import {Router} from 'express';
import { sample_foods } from './data';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import {Food, FoodModel} from "../models/food.model";

const router = Router();

router.get("/seed", asyncHandler(
  async (req, res) => {
    const foodsCount = await FoodModel.countDocuments();
    console.log("test")
    if(foodsCount> 0){
      res.send("Seed is already done!");
      return;
    }

    await FoodModel.create(sample_foods);
    res.send("Seed Is Done!");
  }
))



const generateTokenReponse = (food : Food) => {
  const token = jwt.sign({
    name:food.name
  }, process.env['JWT_SECRET']!,{
    expiresIn:"30d"
  });

  return {

    id: food.id,
    name: food.name,
    description: food.description,
    price: food.price,
    imageUrl: food.imageUrl,
    ratings: food.ratings,

  };
}


export default router;
