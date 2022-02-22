#!/usr/bin/env node
const { MongoClient, MongoServerError } = require("mongodb");

const customers = [
    // "mongodb://ZZZZZZ:YYYYYYY@XXX-XXX-XXXXXXX.mongodb.net:PORT/CUSTOMERCODE-ENVIROMENT?retryWrites=boolean&ssl=boolean"
];

const dbCollection = "servers";

const getDatabase = (values) => {
    // mongodb url string
    let server = values.split("?")[0];
    let customer = server.slice(server.length - 7, server.length);
    return customer;
};

customers.forEach((customer) => {
  const url = customer; 
  const client = new MongoClient(url);
  const dbName = getDatabase(customer);

  async function main() {
    try {
      await client.connect();

      const db = client.db(dbName);
      const collection = db.collection(dbCollection);
  
      const filteredDocs = await collection.find({}).toArray();
  
      const update2Doc = {
          // fields goes here
          updated: new Date().getTime()
      }
  
      const updateResult = await collection.updateOne({}, { $set: update2Doc });
      console.log('Updated document =>', updateResult);
  
      return `Connected successfully to server: ${dbName} -> ${filteredDocs.length}`;
      
    } catch(error) {
      if (error instanceof MongoServerError) {
        console.error("Error: ", dbName,' returns ',error.message);
      } else {
        throw error;
      }
    }
  }

  main()
    .then(console.log)
    .finally(() => client.close());
});

