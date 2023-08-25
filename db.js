const mongoose = require("mongoose");
const mongoURI =
  "mongodb://affable:affabledatabase@ac-ibg72bl-shard-00-00.fffk3ut.mongodb.net:27017,ac-ibg72bl-shard-00-01.fffk3ut.mongodb.net:27017,ac-ibg72bl-shard-00-02.fffk3ut.mongodb.net:27017/affable?ssl=true&replicaSet=atlas-liqtt2-shard-0&authSource=admin&retryWrites=true&w=majority";
// const mongoDB = async () => {
//   await mongoose.connect(mongoURI, { userNewURlParser: true }, (err, res) => {
//     if (err) console.log("problem");
//     else console.log("Connected Successfully");
//   });
// };
// const mongoDB = async () => {
//   await mongoose.connect(
//     mongoURI,
//     { useNewUrlParser: true },
//     async (err, result) => {
//       if (err) {
//         console.log("...", err);
//       } else {
//         console.log("Connection successful");
//         //to fetch the collection data
//         const fetched_data = await mongoose.connection.db.collection(
//           "food_items"
//         );
//         //to find the data
//         fetched_data.find({}).toArray(async function (err, data) {
//           const foodCategory = await mongoose.connection.db.collection(
//             "foodCategory"
//           );
//           foodCategory.find({}).toArray(function (err, catData) {
//             if (err) {
//               console.log(err);
//             } else {
//               global.food_items = data;
//               console.log(global.food_items);
//               global.foodCategory = catData;
//             }
//           });
//         });
//       }
//     }
//   );
// };

// // .catch((err) => {
// //   console.log("Connection error:", err);
// // });

// module.exports = mongoDB;

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connection successful");

    //to fetch the collection data
    const fetched_data = await mongoose.connection.db.collection(
      "food_items"
    );

    //to find the data
    const data = await fetched_data.find({}).toArray();

    const foodCategory = await mongoose.connection.db.collection(
      "food_category"
    );
    
    const catData = await foodCategory.find({}).toArray();

    global.food_items = data;
    global.foodCategory = catData;
    // console.log( global.foodCategory) 
    
    // console.log(global.food_items);
    
  } catch (err) {
    console.log("Connection error:", err);
  }
};

module.exports = mongoDB;


//   console.log(data);
// global.food_items = data;
// // console.log(global.food_items);

// if(err){
//   console.log(err)
// }
// else{
//       global.food_items = data;
//   console.log(global.food_items);
//   global.foodCategory = catData;
// }
