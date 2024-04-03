import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getUser = async (req, res) => {
  const email = req.query.email || " ";
  const password = req.query.password || " ";
  try {
    const getUser = await prisma.users.findUnique({
      where: { email, password },
    });
    getUser
      ? res.status(200).json({ data: getUser })
      : res.status(404).json({ msg: "Not Found" });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const getUser = await prisma.users.findMany();
    res.status(200).json({ data: getUser });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const createUser = async (req, res) => {
  const { user, email, password } = req.body;
  try {
    const createUser = await prisma.users.create({
      data: { user, email, password },
    });
    res.status(201).json({ data: createUser });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const updateUser = async (req, res) => {
  const { user, email, password } = req.body;
  try {
    const updateUser = await prisma.users.update({
      where: { id: parseInt(req.params.id) },
      data: { user, email, password },
    });
    res.status(201).json({ data: updateUser });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deleteUser = await prisma.users.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.status(200).json({ data: deleteUser });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};
