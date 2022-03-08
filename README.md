# node-mongo-bulk-update

This script allow connect to different MongoDB instance, then update any field.

### Usage

1. Modify `customer.json` and add mongoDB URL, for example: `mongo://name:pass@mongodb.com/test`
2. Execute `npm start` and that's it!

#### Example
```customer.json
[
"mongodb://ZZZZZZ:YYYYYYY@XXX-XXX-XXXXXXX.mongodb.net:PORT/CUSTOMERCODE-ENVIROMENT1?retryWrites=boolean&ssl=boolean",
"mongodb://ZZZZZZ:YYYYYYY@XXX-XXX-XXXXXXX.mongodb.net:PORT/CUSTOMERCODE-ENVIROMENT?retryWrites=boolean&ssl=boolean"
"mongodb://ZZZZZZ:YYYYYYY@XXX-XXX-XXXXXXX.mongodb.net:PORT/CUSTOMERCODE-ENVIROMENT?retryWrites=boolean&ssl=boolean"
]
```
Response
```
Connected successfully to server: CUSTOMERCODE-ENVIROMENT1 -> 5
Connected successfully to server: CUSTOMERCODE-ENVIROMENT2 -> 90
Connected successfully to server: CUSTOMERCODE-ENVIROMENT3 -> 16
```

Daniel Naranjo. 
March 2022
