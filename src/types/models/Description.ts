import { objectType } from "@nexus/schema";

export const Description = objectType({
  name: "Description",
  definition(t) {
    t.model.id();
    t.model.partsOfSpeech();
    t.model.meanings();
    t.model.examples();
    t.model.word();
    t.model.wordId();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.deletedAt();
  },
});
