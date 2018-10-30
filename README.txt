DONE BY

ABDESSAMAD DOUHI & ANAS LOUKILI



Pour changer l'address de mongodb go to App/app.js find this snippet:

mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true})
.then(()=> { console.log(`Succesfully Connected to the
Mongodb Database  at URL : mongodb://127.0.0.1:27017/test`)})
.catch(()=> { console.log(`Error Connecting to the Mongodb 
Database at URL : mongodb://127.0.0.1:27017/test`)})


change  mongodb://127.0.0.1:27017/test' to whatever you need and thats it.

Cordialement,