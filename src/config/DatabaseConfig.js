const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://flipr:flipr@cluster0.q44mk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )

  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
