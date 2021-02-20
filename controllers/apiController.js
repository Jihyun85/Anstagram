import routes from "../routes";

import User from "../model/User";
import Content from "../model/Content";

export const countHeart = async (req, res) => {
  const {
    params: { id: contentId },
    user: { _id: userId },
  } = req;
  try {
    const user = await User.findById(userId);
    user.likeContent.push(contentId);
    user.save();
    console.log(user.likeContent);
    const content = await Content.findById(contentId);
    content.heartPerson.push(userId);
    content.save();
    res.status(200);
  } catch (err) {
    res.status(400);
    console.log(err);
  } finally {
    res.end();
  }
};
