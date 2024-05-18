import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getCollectionByEmail = async (req, res) => {
  const email = req.query.email;
  if (!email)
    return res.status(401).json({ message: "inget ada query email bang" });
  try {
    const getCollection = await prisma.collection.findMany({
      where: { email: email },
    });
    if (getCollection.length >= 1) {
      return res.status(200).json({ status: 200, data: getCollection });
    } else {
      return res
        .status(404)
        .json({ staus: 404, error: { message: "not found" } });
    }
  } catch (err) {
    return res.json(err);
  }
};

export const postCollection = async (req, res) => {
  const { mal_id, email } = req.body;
  try {
    if (mal_id && email) {
      const postCollection = await prisma.collection.create({
        data: { mal_id: mal_id, email: email },
      });
      return res.json({ data: postCollection });
    } else {
      res.json({ msg: "data tidak lengkap" });
    }
  } catch (err) {
    return res.json(err);
  }
};

export const deleteCollection = async (req, res) => {
  try {
    const deleteCollection = await prisma.collection.delete({
      where: { id: parseInt(req.params.id) },
    });
    if (deleteCollection) return res.json({ data: deleteCollection });
  } catch (err) {
    return res.json(err);
  }
};
