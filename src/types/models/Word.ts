import { objectType } from "@nexus/schema";

export const Word = objectType({
  name: "Word",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.voice();
    t.model.sinoVietnamese();
    t.model.descriptions();
    t.model.wordDeck();
    t.model.wordDeckId();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.deletedAt();
  },
});
