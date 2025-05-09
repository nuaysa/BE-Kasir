import prisma from "../prisma";

export const findUser = async (email: string) => {
  const user = await prisma.pengguna.findFirst({
    where: { email: email },
  });
  return user;
};
