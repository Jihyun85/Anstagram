import User from "../model/User";
import Content from "../model/Content";
import Comment from "../model/Comment";

export const postComment = async (req, res) => {
  const {
    body: { comment },
    params: { id: contentId },
    user: { id: userId },
  } = req;
  try {
    const newComment = await Comment.create({
      text: comment,
      user: userId,
      content: contentId,
    });
    const content = await Content.findById(contentId);
    content.comment.push(newComment.id);
    content.save();
  } catch (err) {
    console.log(err);
    res.status(400);
  } finally {
    res.end();
  }
};
