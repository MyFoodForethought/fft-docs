import { defineConfig } from 'tinacms';
import { createSchema } from 'tinacms/dist/schema';
import { MarkdownFieldPlugin } from 'tinacms/plugins/markdown';

export default defineConfig({
  branch: 'main',
  clientId: process.env.TINA_CLIENT_ID, // Get this from Tina.io
  token: process.env.TINA_TOKEN, // Get this from Tina.io
  schema: createSchema({
    collections: [
      {
        name: 'pages',
        label: 'Pages',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
          },
          {
            type: 'markdown',
            name: 'content',
            label: 'Content',
          },
        ],
      },
    ],
  }),
});