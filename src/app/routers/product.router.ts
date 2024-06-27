import {Router} from 'express';
import { sample_foods, sample_tags} from "./data";
import asyncHandler from 'express-async-handler';
import { FoodModel } from '../models/product.model';
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
    console.log("Seed send");
  }
))


router.get("/",asyncHandler(
  async (req, res) => {
    const foods = await FoodModel.find();
    res.send(foods);
  }
))


router.get("/tags", asyncHandler(
  async (req, res) => {
    const tags = await FoodModel.aggregate([
      {
        $unwind:'$tags'
      },
      {
        $group:{
          _id: '$tags',
          count: {$sum: 1}
        }
      },
      {
        $project:{
          _id: 0,
          name:'$_id',
          count: '$count'
        }
      }
    ]).sort({count: -1});

    const all = {
      name : 'All',
      count: await FoodModel.countDocuments()
    }

    tags.unshift(all);
    res.send(tags);
  }
))




export default router;
