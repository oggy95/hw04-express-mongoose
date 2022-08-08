import mongoose from "mongoose";
import moment from "moment";

const {Schema, model} = mongoose;

const userSchema = Schema({
    name: {
        type: String,
        required: true,
        match: [/[a-zA-Zа-яА-ЯіІїЇ]/g, "Please fill a valid name"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"]
    },
    phone: {
        type: String,
        unique: true,
        required: true,
        match: [/\+\d\(\d{4}\)\d{3}-\d{2}-\d{2}/, "Please fill a valid phone"]
    },
    passport: {
        type: String,
        unique: true,
        required: true,
        match: [/[A-Z]{2}\d{6}/, "Please fill a valid passport"]
    },
    birthday: {
        type: String,
        required: true,
        validate: function (input) {
            let date = input.split("-");
            if (date.length !== 3) {
                return false;
            }
            return new Date(date[2] + "-" + date[1] + "-" + date[0]) <= new Date();
        },
        match: [/^\d{2}-\d{2}-[19|20]\d{2}/, "Please fill a valid phone"]
    },
}, {versionKey: false, timestamps: true});

const handleErrors = (error, data, next) => {
    const {name, code} = error;
    error.status = (name === "MongoServerError" && code === 11000) ? 409 : 400;
    next()
}

userSchema.post("save", handleErrors);

const User = model("user", userSchema);

export default User;