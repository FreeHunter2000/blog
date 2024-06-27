import {Schema, model} from 'mongoose';
import {userbewertung} from "../warenkorb/userBewertung.model";
import {Produkt} from "../produkt/produkt.model";
import {UserType} from "../user/testUser";

export interface User{
  email: string;
  name: string;
  vorname: string;
  eigeneBwertungen: userbewertung[];
  eigeneKaeufe: Produkt[];
  isAdmin: boolean;
  password: string;
  loggedIn: boolean;
  warenkorb: Produkt[];
}

export const UserSchema = new Schema<User>({
  name: {type: String, required: true},
  vorname: {type: String, required: true},
  eigeneBwertungen: {type: [], required: false},
  eigeneKaeufe: {type: [], required: false},
  warenkorb: {type: [], required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  isAdmin: {type: Boolean, required: true},
  loggedIn: {type: Boolean, required: true},
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
