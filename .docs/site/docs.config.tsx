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
      "slug": "concepts",
      "children": [
        {
          "slug": "endpoints"
        },
        {
          "slug": "middleware"
        },
        {
          "slug": "router"
        },
        {
          "slug": "rpc-client"
        },
        {
          "slug": "headers-and-cookies"
        },
        {
          "slug": "endpoint-creator"
        },
        {
          "slug": "openapi"
        }
      ]
    }
  ],
  metadata: {
    titleTemplate: "%s – Docs",
    description: "Managed by @farming-labs/docs Cloud",
  },
});
