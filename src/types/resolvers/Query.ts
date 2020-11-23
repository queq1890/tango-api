import { intArg, queryType, stringArg } from "@nexus/schema";

import { getUserId } from "../../utils";

export const Query = queryType({
  definition(t) {
    t.crud.wordBook();
    t.crud.wordDeck();
    t.crud.word();
    t.crud.example();
    t.crud.description();

    t.crud.wordBooks();
    t.crud.wordDecks();
    t.crud.words();
    t.crud.examples();
    t.crud.descriptions();

    t.field("me", {
      type: "User",
      nullable: true,
      resolve: (parent, args, ctx) => {
        const userId = getUserId(ctx);

        return ctx.prisma.user.findOne({
          where: {
            id: userId,
          },
        });
      },
    });

    t.list.field("users", {
      type: "User",
      resolve: (parent, args, ctx) => {
        return ctx.prisma.user.findMany();
      },
    });
  },
});
