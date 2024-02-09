// IMPORTS -
import { auth } from "@clerk/nextjs";
import prismadb from "./prismadb";
import { MAX_FREE_COUNTS } from "@/app/partials/constants";

// INCREASE LIMIT -
export const increasedApiLimit = async () => {
  const { userId } = auth();

  if (!userId) return;

  const userApiLimit = await prismadb.userLimit.findUnique({
    where: {
      userId,
    },
  });

  if (userApiLimit) {
    await prismadb.userLimit.update({
      where: { userId: userId },
      data: { count: userApiLimit.count + 1 },
    });
  } else {
    await prismadb.userLimit.create({
      data: { userId: userId, count: 1 },
    });
  }
};

// CHECK LIMIT -
export const checkApiLimit = async () => {
  const { userId } = auth();

  if (!userId) return false;

  const userApiLimit = await prismadb.userLimit.findUnique({
    where: {
      userId,
    },
  });

  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) return true;
  else return false;
};
