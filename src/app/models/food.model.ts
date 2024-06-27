import {Schema, model} from 'mongoose';

export interface Food{
  id: number,
  name: string,
  description: string,
  price: number,
  imageUrl: string,
  ratings: number,
}

export const FoodSchema = new Schema<Food>(
  {
    name: {type: String, required:true},
    price: {type: Number, required:true},
    id: {type: Number },
    imageUrl: {type: String, required:true},
    ratings: {type: Number},
    description: {type: String}
  },{
    toJSON:{
      virtuals: true
    },
    toObject:{
      virtuals: true
    },
    timestamps:true
  }
);

export const FoodModel = model<Food>('food', FoodSchema);
