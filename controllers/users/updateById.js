import User from "../../models/user.js";

import { createError } from "../../helpers/index.js";

const updateById = async (req, res) => {
    const { id } = req.params;
    const result = await User.findByIdAndUpdate(id, req.body, {new: true});
    if (!result) {
        throw createError(404, "Not found")
    }
    return res.json(result);
}

export default updateById;