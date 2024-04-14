import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getComment = async (req, res) => {
  try {
    const getComment = await prisma.comment.findMany();
    res.status(200).json({ data: getComment, id: req.query.mal_id });
    console.log({ Method: "Get", time: Date() });
  } catch (error) {
    res.json({ msg: error });
  }
};

export const getCommantByMal_id = async (req, res) => {
  try {
    const getCommentById = await prisma.comment.findMany({
      where: { mal_id: req.params.mal_id },
    });
    if (getComment.length === 0)
      return res.status(404).json({ msg: "Data Not Found" });
    else res.status(200).json({ data: getCommentById });
    console.log({ Method: "Get", time: getCommentById.created });
  } catch (error) {
    res.json({ msg: error });
  }
};

export const createComment = async (req, res) => {
  const { mal_id, user, email, comment } = req.body;
  try {
    const createComment = await prisma.comment.create({
      data: { mal_id, user, email, comment },
    });
    console.log(createComment);
    res.status(200).json({ data: createComment });
    console.log({ Method: "Created", time: createComment.created });
  } catch (error) {
    res.json({ msg: error });
  }
};

export const updateComment = async (req, res) => {
  const { comment } = req.body;
  try {
    const updateComment = await prisma.comment.update({
      where: { id: parseInt(req.params.id) },
      data: { comment },
    });
    res.status(200).json({ data: updateComment });
    console.log({ Method: "Update", time: updateComment.created });
  } catch (error) {
    res.json({ msg: error });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const deleteComment = await prisma.comment.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.status(200).json({ data: deleteComment });
    console.log({ Method: "Delete", time: deleteComment.created });
  } catch (error) {
    res.json({ msg: error });
  }
};
