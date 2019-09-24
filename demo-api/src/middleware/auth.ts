

export const auth = (req, res, next) => {
  if (req.isAuthorized) {
    next()
  } else {
   res.sendStatus(401)
  }
}
