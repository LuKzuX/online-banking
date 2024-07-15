export const verifyAdmin = (req, res, next) => {
    if (!req.user.user.isAdmin) {
        return res.status(401).send('no admin')
    }else{
        next()
    }
}