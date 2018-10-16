let credentials = {
  userName: "mScott",
  password: "worldsBestBoss"
};

module.exports = (req, res, next) => {
  console.log(req.params);
  if (
    req.params.password === credentials.password &&
    req.params.userName === credentials.userName
  ) {
    next();
  } else {
    res.status(500).json("No Go");
  }
};
