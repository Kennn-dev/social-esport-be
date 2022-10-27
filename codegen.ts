import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:4000/graphql',
  documents: 'src/**/*.graphql',
  generates: {
    '../social-esport/client/src/graphql/types/graphql.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-stencil-apollo',
      ],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
