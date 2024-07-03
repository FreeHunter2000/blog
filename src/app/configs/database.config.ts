import {connect, ConnectOptions} from 'mongoose';
const mongoose = require('mongoose');

export const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb+srv://webshopAdmin:DDhxpPPZcU8y8Kv7@cluster0.xqqo8pg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};
