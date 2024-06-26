import jwt from "jsonwebtoken"

export const userAuth = (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    return res.status(401).json({ error: "auth token required" })
  }
  const token = authorization.split(" ")[1]
  try {
    const verified = jwt.verify(token, process.env.SECRET)
    req.user = verified
    next()
  } catch (error) {
    res.status(401).json({error})
  }
}
