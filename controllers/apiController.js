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
    const content = await Content.findById(contentId);
    const likeContentIndex = user.likeContent.indexOf(contentId);
    const heartPersonIndex = content.heartPerson.indexOf(userId);
    if (likeContentIndex === -1 && heartPersonIndex === -1) {
      user.likeContent.push(contentId);
      user.save();
      content.heartPerson.push(userId);
      content.save();
    } else {
      user.likeContent.splice(likeContentIndex, 1);
      user.save();
      content.heartPerson.splice(heartPersonIndex, 1);
      content.save();
    }
    res.status(200);
  } catch (err) {
    res.status(400);
    console.log(err);
  } finally {
    res.end();
  }
};
