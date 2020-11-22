import { objectType } from "@nexus/schema";

export const WordBook = objectType({
  name: "WordBook",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.summary();
    t.model.wordDecks();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.deletedAt();
  },
});
