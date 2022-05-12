module.exports.GetUsers = (application, req, res) => {
    res.status(200).send(['user1', 'user2', 'user3']);
};
