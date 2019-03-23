let contacts  = require("../contacts");

// get request
module.exports.list =  function list(req, res) {
    return res.json(contacts);
}
module.exports.show =  function show(req, res) {
    return res.json({theId: req.params.id});
}
module.exports.create =  function create(req, res) {
    return res.json({});
}
module.exports.update =  function update(req, res) {
    return resp.json({theId: req.params.id});
}
module.exports.remove =  function remove(req, res) {
    return res.json({});
}