import { Mongo } from 'meteor/mongo';

const DataBase = new Mongo.Collection('formulaire');

export default DataBase;