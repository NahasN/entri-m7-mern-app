import mongoose from "mongoose";


const DBConnection = async () => {

    try {

       await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
        console.log(`Database connected successfully`);
    } catch (error) {

        console.error('Error while connection to database', error.message);
    }

}


export default DBConnection;