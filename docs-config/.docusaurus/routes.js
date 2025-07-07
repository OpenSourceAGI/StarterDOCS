import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '795'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '8a4'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', 'e5b'),
            routes: [
              {
                path: '/docs/functions/',
                component: ComponentCreator('/docs/functions/', '248'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/global',
                component: ComponentCreator('/docs/functions/global', '75b'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/hooks.server',
                component: ComponentCreator('/docs/functions/hooks.server', 'aa7'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/lib/components/icons',
                component: ComponentCreator('/docs/functions/lib/components/icons', '56d'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/lib/components/icons-1',
                component: ComponentCreator('/docs/functions/lib/components/icons-1', '019'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/lib/components/utils',
                component: ComponentCreator('/docs/functions/lib/components/utils', '5c6'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/lib/components/utils-1',
                component: ComponentCreator('/docs/functions/lib/components/utils-1', 'bb5'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/lib/components/utils/auth-client',
                component: ComponentCreator('/docs/functions/lib/components/utils/auth-client', 'e2b'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/lib/customize-site',
                component: ComponentCreator('/docs/functions/lib/customize-site', 'd23'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/lib/hooks/is-mobile.svelte',
                component: ComponentCreator('/docs/functions/lib/hooks/is-mobile.svelte', '2fc'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/lib/server',
                component: ComponentCreator('/docs/functions/lib/server', 'a95'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/lib/server-1',
                component: ComponentCreator('/docs/functions/lib/server-1', 'e3b'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/lib/server/auth',
                component: ComponentCreator('/docs/functions/lib/server/auth', '10b'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/lib/server/drizzle.config',
                component: ComponentCreator('/docs/functions/lib/server/drizzle.config', '723'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/lib/server/email',
                component: ComponentCreator('/docs/functions/lib/server/email', 'f18'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/lib/server/ratelimits',
                component: ComponentCreator('/docs/functions/lib/server/ratelimits', '081'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/lib/server/schema',
                component: ComponentCreator('/docs/functions/lib/server/schema', '45f'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/lib/server/types',
                component: ComponentCreator('/docs/functions/lib/server/types', '720'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/lib/server/users',
                component: ComponentCreator('/docs/functions/lib/server/users', 'c5b'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/lib/server/validations',
                component: ComponentCreator('/docs/functions/lib/server/validations', 'd6e'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/modules',
                component: ComponentCreator('/docs/functions/modules', '6fc'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/routes/+layout',
                component: ComponentCreator('/docs/functions/routes/+layout', '98e'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/research/all-dev-tools',
                component: ComponentCreator('/docs/research/all-dev-tools', '68c'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/research/Cloud Providers 100K',
                component: ComponentCreator('/docs/research/Cloud Providers 100K', '6a1'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/research/job_platforms_table',
                component: ComponentCreator('/docs/research/job_platforms_table', 'e58'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/research/Payment Processor',
                component: ComponentCreator('/docs/research/Payment Processor', '041'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/research/sveltekit_vs_nextjs_comparison',
                component: ComponentCreator('/docs/research/sveltekit_vs_nextjs_comparison', '369'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/research/Top Dev Tools',
                component: ComponentCreator('/docs/research/Top Dev Tools', 'efd'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', '0f3'),
                exact: true,
                sidebar: "default"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
