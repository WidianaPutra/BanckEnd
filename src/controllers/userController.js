import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getUser = async (req, res) => {
  const email = req.query.email || " ";
  const password = req.query.password || " ";
  try {
    const getUser = await prisma.users.findUnique({
      where: { email, password },
      select: { id: true, user: true, email: true, created: true },
    });
    getUser
      ? res.status(200).json({ isLogin: true, data: getUser })
      : res.status(200).json({ isLogin: false, msg: "Not Found" });
  } catch (error) {
    res.status(200).json({ isLogin: false });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const getUser = await prisma.users.findMany({
      select: { id: true, user: true, email: true, created: true },
    });
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
      select: { id: true, user: true, email: true, created: true },
    });
    res.status(201).json({ isLogin: true, data: createUser });
    console.log({ create: createUser.created });
  } catch (error) {
    res.status(200).json({ isLogin: false, err: "email tidak valid" });
  }
};

export const updateUser = async (req, res) => {
  const { password } = req.body;
  try {
    const updateUser = await prisma.users.update({
      where: { email: req.query.email },
      data: { password },
      select: { id: true, user: true, email: true, created: true },
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
      select: { id: true, user: true, email: true, created: true },
    });
    res.status(200).json({ data: deleteUser });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};
