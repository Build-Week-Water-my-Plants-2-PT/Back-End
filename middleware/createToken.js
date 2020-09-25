const jwt = require('jsonwebtoken');

function createToken(user) {

    const payload = {
        username: user.username,
        id:user.id
    };

    const options = {
        expiresIn:'8hr'
    };

    return jwt.sign(payload, process.env.SECRET, options);

}

module.exports = createToken;