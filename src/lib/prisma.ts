import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient().$extends({
  result: {
    videos: {
      views: {
        needs: {},
        compute(views) {
          return views.toString(); // Convert BigInt to String globally
        },
      },
    },
  },
});
