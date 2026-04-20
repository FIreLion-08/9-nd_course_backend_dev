const { response } = require("express");

const getUsers = (request, response) => {
    // Get all users
};

const getUser = (request, response) => {
    // Get user
    const { user_id } = request.params;
    response.status(200);
    response.send(`User with id: ${user_id}`);
};

const createUser = (request, response) => {
    // Get new user
};

const updateUser = (request, response) => {
    // Update user
};

const deleteUser = (request, response) => {
    // DElete user 
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};