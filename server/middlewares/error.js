const error = async (err, req, res, next) => {
  res
    .status(500)
    .json({
      data: null,
      errors: null,
      message: "Sorry something failed, please try again",
    });
};

module.exports = error;
