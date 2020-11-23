import { objectType } from "@nexus/schema";

export const Example = objectType({
  name: "Example",
  definition(t) {
    t.model.id();
    t.model.vn();
    t.model.ja();
    t.model.voice();
    t.model.description();
    t.model.descriptionId();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.deletedAt();
  },
});
