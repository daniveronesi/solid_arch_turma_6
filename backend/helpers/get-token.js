const getToken = (req) => {
    const authHeader = req.headers.authorization

    if (!authHeader) return null

    return authHeader.split(' ')[1]
}

module.exports = getToken