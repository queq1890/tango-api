import { objectType } from "@nexus/schema";

export const WordDeck = objectType({
  name: "WordDeck",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.summary();
    t.model.words();
    t.model.wordBook();
    t.model.wordBookId();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.deletedAt();
  },
});
