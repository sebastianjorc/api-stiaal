"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validate = (schema) => (req, res, next) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        });
        next();
    }
    catch (e) {
        console.log(`${e.errors} en validateResourse. \n Req is:\n${req}\n\nreq.body is: ${req.body}\n\nreq.query is: ${req.query}\n\nreq.params is: ${req.params}`);
        console.log(req);
        console.log(req.body);
        console.log(req.params);
        return res.status(400).send(`${e.errors} en validateResourse. \n Req is:\n${req}\n\nreq.body is: ${req.body}\n\nreq.query is: ${req.query}\n\nreq.params is: ${req.params}`);
    }
};
exports.default = validate;
//# sourceMappingURL=validateResource.js.map