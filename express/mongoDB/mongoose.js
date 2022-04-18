/* ~ ~ ~ ~ ~ <1> Import Required Dependencies </1> ~ ~ ~ ~ ~ */
const mongoose = require('mongoose');

/* ~ ~ ~ ~ ~ <2> Connect to MongoDB Atlas </2> ~ ~ ~ ~ ~ */
const connectDB = async () => {
  /* - - - - - <2A> Open Try Catch for Safety </2A> - - - - - */
  try {
    /* * * * * <2A-I> Attempt to Establish Connection </2A-I> * * * * */
    const conn = await mongoose.connect(process.env.MONGO_URI);

    /* * * * * <2A-II> Log Successful Connections to Console </2A-II> * * * * */
    console.log(
      `MongoDB Atlas connected to host ${conn.connection.host}...`
    )

  /* - - - - - <2B> Handle Error Reporting </2B> - - - - - */
  } catch (error) {
    /* * * * * <2B-I> Log Error(s) to the Console </2B-I> * * * * */
    console.log(error);

    /* * * * * <2B-II> Exit Process with Failure Code </2B-II> * * * * */
    process.exit(1);
  }
}

/* ~ ~ ~ ~ ~ <3> Export the Connection Function </3> ~ ~ ~ ~ ~ */
module.exports = connectDB;