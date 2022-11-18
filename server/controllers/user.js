
import User from "../model/User.js";


export const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can only update you Account.!"));
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been Deleted");
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You Can Delete only your Account!"));
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params_id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};


