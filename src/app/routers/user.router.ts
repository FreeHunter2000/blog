import {Router} from 'express';
import { sample_users } from './data';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import { User, UserModel } from '../models/user.models';

const router = Router();

router.get("/seed", asyncHandler(
  async (req, res) => {
    const usersCount = await UserModel.countDocuments();
    if (usersCount > 0) {
      res.send("Seed is already done!");
      return;
    }

    await UserModel.create(sample_users);
    res.send("Seed Is Done!");
  }
))



const generateTokenReponse = (user : User) => {
  const token = jwt.sign({
    email:user.email, isAdmin: user.isAdmin
  }, process.env['JWT_SECRET']!,{
    expiresIn:"30d"
  });

  return {
    email: user.email,
    name: user.name,
    isAdmin: user.isAdmin,
    vorname: user.vorname,
    eigeneBwertungen: user.eigeneBwertungen,
    eigeneKaeufe: user.eigeneKaeufe,
   active: user,
    warenkorb: user.warenkorb,
    password: user.password


    }
}


export default router;





