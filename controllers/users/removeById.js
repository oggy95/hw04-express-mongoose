import User from "../../models/user.js";

import { createError } from "../../helpers/index.js";

const removeById = async (req, res) => {
    const { id } = req.params;
    const result = await User.findByIdAndRemove(id);
    if (!result) {
        throw createError(404, "Not found")
    }
    return res.status(204).json({
        message: "Delete success"
    })
}

export default removeById;