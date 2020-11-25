var MongoDB = require('../dbm');
var ObjectID = require('mongodb').ObjectID;

class ProductsModel{
    constructor(){
      this.collection = null
      MongoDB.getDb()
       .then (
         (db)=>{
           this.collection = db.collection("ordenes");
         }
      )
       .catch((ex)=>{
        throw(ex);
      });
    }

    async getAll(){
        try {
          let rslts = await this.collection.find({}).toArray();
          return rslts;
        }catch(ex){
          throw(ex);
        }
      }
  
      async getById(id){
        try{
          const _id = new ObjectID(id);
          let oneDoc = await this.collection.findOne({_id});
          return oneDoc;
        }catch(ex){
          throw(ex);
        }
      }

  
  }
  module.exports = ProductsModel;
  