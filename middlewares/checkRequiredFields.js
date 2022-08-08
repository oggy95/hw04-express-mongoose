import {createError} from "../helpers/index.js";


const checkRequiredFields = (req, res, next) => {

    if (req.body.name === undefined || req.body.email === undefined || req.body.phone === undefined || req.body.passport === undefined ||
        req.body.birthday === undefined) {
        return next(createError(400, `missing required name field`))
    }
    next();
}

export default checkRequiredFields;