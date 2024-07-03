import dotenv from 'dotenv';
dotenv.config();


import express from 'express';
import cors from 'cors';
import { sample_foods, sample_users } from "./routers/data";

import foodRouter from './routers/food.router';
import userRouter from './routers/user.router';
import { dbConnect } from './configs/database.config';
import jwt from "jsonwebtoken";
dbConnect();

const app = express();
const port = 5000;

dbConnect().then(() => {
  console.log('Database connected successfully');
}).catch((error) => {
  console.error('Database connection failed:', error);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});



app.get("/api/foods/tag/:tagName", (req, res) => {
  const tagName = req.params.tagName;
  const foods = sample_foods
    .filter(food => food.tags?.includes(tagName));
  res.send(foods);
})

app.get("/api/foods/:foodId", (req, res) => {
  const foodId = req.params.foodId;
  const food = sample_foods.find(food => food.id == foodId);
  res.send(food);
})

app.post("/api/users/login", (req, res) => {
  const {email, password} = req.body;
  const user = sample_users.find(user => user.email === email
    && user.password === password);

  if(user) {
    res.send(generateTokenReponse(user));
  }
  else{
    const BAD_REQUEST = 400;
    res.status(BAD_REQUEST).send("Username or password is invalid!");
  }

})

const generateTokenReponse = (user : any) => {
  const token = jwt.sign({
    email:user.email, isAdmin: user.isAdmin
  },"SomeRandomText",{
    expiresIn:"30d"
  });

  user.token = token;
  return user;
}
app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
})
