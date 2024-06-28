import {connect, ConnectOptions} from 'mongoose';
const mongoose = require('mongoose');
export const dbConnect = () => {
  connect("mongodb+srv://webshopAdmin:DDhxpPPZcU8y8Kv7@cluster0.xqqo8pg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  } as ConnectOptions).then(
    () => console.log("connect successfully"),
    (error) => console.log(error)
  )
}
module.exports = mongoose;

