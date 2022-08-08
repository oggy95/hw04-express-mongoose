import User from "../../models/user.js";

const add = async (req, res) => {

    if (req.body.name === undefined || req.body.email === undefined || req.body.phone === undefined || req.body.passport === undefined ||
        req.body.birthday === undefined) {
        return res.status(400).json({message: "missing required name field"});
    }

    const result = await User.create(req.body);
    return res.status(201).json(result)
}

export default add;