// @ts-check
/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const typedocSidebar = {
  items: [
    {
      type: "doc",
      id: "functions/global",
      label: "global"
    },
    {
      type: "doc",
      id: "functions/hooks.server",
      label: "hooks.server"
    },
    {
      type: "category",
      label: "lib",
      items: [
        {
          type: "category",
          label: "components",
          items: [
            {
              type: "doc",
              id: "functions/lib/components/icons",
              label: "icons"
            },
            {
              type: "doc",
              id: "functions/lib/components/icons-1",
              label: "icons"
            },
            {
              type: "category",
              label: "utils",
              items: [
                {
                  type: "doc",
                  id: "functions/lib/components/utils/auth-client",
                  label: "auth-client"
                }
              ],
              link: {
                type: "doc",
                id: "functions/lib/components/utils"
              }
            },
            {
              type: "doc",
              id: "functions/lib/components/utils-1",
              label: "utils"
            }
          ]
        },
        {
          type: "doc",
          id: "functions/lib/customize-site",
          label: "customize-site"
        },
        {
          type: "category",
          label: "hooks",
          items: [
            {
              type: "doc",
              id: "functions/lib/hooks/is-mobile.svelte",
              label: "is-mobile.svelte"
            }
          ]
        },
        {
          type: "category",
          label: "server",
          items: [
            {
              type: "doc",
              id: "functions/lib/server/auth",
              label: "auth"
            },
            {
              type: "doc",
              id: "functions/lib/server/drizzle.config",
              label: "drizzle.config"
            },
            {
              type: "doc",
              id: "functions/lib/server/email",
              label: "email"
            },
            {
              type: "doc",
              id: "functions/lib/server/ratelimits",
              label: "ratelimits"
            },
            {
              type: "doc",
              id: "functions/lib/server/schema",
              label: "schema"
            },
            {
              type: "doc",
              id: "functions/lib/server/types",
              label: "types"
            },
            {
              type: "doc",
              id: "functions/lib/server/users",
              label: "users"
            },
            {
              type: "doc",
              id: "functions/lib/server/validations",
              label: "validations"
            }
          ],
          link: {
            type: "doc",
            id: "functions/lib/server"
          }
        },
        {
          type: "doc",
          id: "functions/lib/server-1",
          label: "server"
        }
      ]
    },
    {
      type: "category",
      label: "routes",
      items: [
        {
          type: "doc",
          id: "functions/routes/+layout",
          label: "+layout"
        }
      ]
    }
  ]
};
module.exports = typedocSidebar.items;