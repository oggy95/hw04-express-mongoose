import User from "../../models/user.js";

const patchById = async (req, res) => {
    if (!req.body || req.body.favorite === undefined) {
        return res.status(400).json({message: "missing field favorite"})
    }
    const {id} = req.params;
    let result = undefined;
    try {
        result = await User.findByIdAndUpdate(id, {favorite: req.body.favorite}, {new: true});
    } catch (e) {
        return res.status(400).json({error: e.message});
    }
    if (!result) {
        return res.status(404).json({message: "Not found"})
    }
    return res.json(result);
}

export default patchById;