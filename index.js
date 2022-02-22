#!/usr/bin/env node
const { MongoClient } = require("mongodb");

const customers = [
];

const getDatabase = (values) => {
    let server = values.split("?")[0];
    let customer = server.slice(server.length - 7, server.length);
    return customer;
};

customers.forEach((customer) => {
  const url = customer; 
  const client = new MongoClient(url);
  const dbName = getDatabase(customer);

  async function main() {

    await client.connect();

    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("servers");

    const filteredDocs = await collection.find({}).toArray();
    console.log("Found document =>", filteredDocs);

    const update2Doc = {
        userName: "pix_gen_admin",
        password: "kMzYkBG69YbUybkm",
        storageUrl: "ftp://pixellot.ftp.upload.akamai.com/",
        downloadUrl: "https://pixellot-vod.akamaized.net/pix_gen/{file}.{ext}",
        streamingUrl: "https://pixellot-vod.akamaized.net/pix_gen/{file}.{ext}",
        imageUrl: "https://pixellot-vod.akamaized.net/pix_gen/{file}.{ext}",
        updated: new Date().getTime()
    }

    //const updateResult = await collection.updateOne({}, { $set: update2Doc });
    //console.log('Updated document =>', updateResult);

    return "done.";
  }

  main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
});

