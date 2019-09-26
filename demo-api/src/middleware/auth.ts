export const auth = (req, res, next) => {
  const isAuthorized = true
  if (isAuthorized) {
    next()
  } else {
   res.sendStatus(401)
  }
}
