import * as path from "path";
import { makeSchema } from "@nexus/schema";
import { nexusPrisma } from "nexus-plugin-prisma";

import * as types from "./types";

const schema = makeSchema({
  types,
  plugins: [
    nexusPrisma({
      experimentalCRUD: true,
    }),
  ],
  outputs: {
    schema: path.join(__dirname, "./../schema.graphql"),
    typegen: path.join(__dirname, "./generated/nexus.ts"),
  },
});

export default schema;
