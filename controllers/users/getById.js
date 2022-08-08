import User from "../../models/user.js";

import { createError } from "../../helpers/index.js";

const getById = async (req, res) => {
    const { id } = req.params;
    const result = await User.findById(id);
    if (!result) {
        throw createError(404, "Not found")
    }
    return res.json(result);
}

export default getById;