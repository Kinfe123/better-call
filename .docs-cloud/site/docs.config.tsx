import { defineDocs } from "@farming-labs/docs";
import { colorful } from "@farming-labs/theme/colorful";

export default defineDocs({
  entry: "docs",
  theme: colorful(),
  ordering: [
    {
      "slug": "quickstart"
    },
    {
      "slug": "installation"
    },
    {
      "slug": "api",
      "children": [
        {
          "slug": "exports"
        }
      ]
    },
    {
      "slug": "architecture",
      "children": [
        {
          "slug": "overview"
        }
      ]
    },
    {
      "slug": "backend",
      "children": [
        {
          "slug": "systems"
        }
      ]
    }
  ],
  metadata: {
    titleTemplate: "%s – Docs",
    description: "Managed by @farming-labs/docs Cloud",
  },
});
