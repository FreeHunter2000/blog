import mongoose, {model} from 'mongoose';
import {userbewertung} from "../warenkorb/userBewertung.model";
import {Produkt} from "../produkt/produkt.model";


const Schema = mongoose.Schema;
export interface User{
  email: string;
  name: string;
  vorname: string;
  eigeneBwertungen: [];
  eigeneKaeufe: [];
  isAdmin: boolean;
  password: string;
  loggedIn: boolean;
  warenkorb: [];
}

export const UserSchema = new Schema<User>(
  {
  name: {type: String, required: true},
  vorname: {type: String, required: true},
  eigeneBwertungen: {type: [], required: false},
  eigeneKaeufe: {type: [], required: false},
  warenkorb: {type: [], required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  isAdmin: {type: Boolean, required: true},
  loggedIn: {type: Boolean},
}, {
  timestamps: true,
  toJSON:{
    virtuals: true
  },
  toObject:{
    virtuals: true
  }
});



export const UserModel = model<User>('user', UserSchema);
var userModel = mongoose.model('User', UserSchema);
