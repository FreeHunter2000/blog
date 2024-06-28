import {Schema, model} from 'mongoose';

export interface Food{

  name: string;
  description: string;
  price: number;
  imageUrl: string;
  ratings: number;
}

export const FoodSchema = new Schema<Food>(
  {
    name: {type: String, required:true},
    price: {type: Number, required:true},

    imageUrl: {type: String, required:true},
    ratings: {type: Number,required: true},
    description: {type: String,required: true}
  },{
    timestamps:true,
    toJSON:{
      virtuals: true
    },
    toObject:{
      virtuals: true
    }
  });

export const FoodModel = model<Food>('food', FoodSchema);
