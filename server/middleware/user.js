import jwtToken from 'jsonwebtoken'

export default function attachUser(req, res, next) {
  const authorizationHeader = req.headers.authorization
  if (authorizationHeader) {
    const token = authorizationHeader.split(' ')[1]
    const decoded = jwtToken.decode(token)
    req.user = { id: decoded.id, username: decoded.username }
  }
  next()
}