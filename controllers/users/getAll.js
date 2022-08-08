import User from "../../models/user.js";

const getAll = async (req, res) => {
    const {page = 1, limit = 10} = req.query;
    const skip = (page - 1) * limit;
    const result = await User.find({}, "-createdAt -updatedAt", {skip, limit: Number(limit)});
    return res.json(result);
}

export default getAll;