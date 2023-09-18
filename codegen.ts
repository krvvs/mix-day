import { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());
const endpoint = process.env.GRAPHQL_API_ENDPOINT;

const config: CodegenConfig = {
  schema: endpoint,
  generates: {
    "graphql/types.ts": {
      plugins: ["typescript"],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
