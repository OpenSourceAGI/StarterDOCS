import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', 'cea'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'c83'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'ded'),
            routes: [
              {
                path: '/functions/',
                component: ComponentCreator('/functions/', '5b3'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/global',
                component: ComponentCreator('/functions/global', 'e3c'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/hooks.server',
                component: ComponentCreator('/functions/hooks.server', '485'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/lib/components/icons',
                component: ComponentCreator('/functions/lib/components/icons', '50a'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/lib/components/icons-1',
                component: ComponentCreator('/functions/lib/components/icons-1', '031'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/lib/components/utils',
                component: ComponentCreator('/functions/lib/components/utils', 'f25'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/lib/components/utils-1',
                component: ComponentCreator('/functions/lib/components/utils-1', '14f'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/lib/components/utils/auth-client',
                component: ComponentCreator('/functions/lib/components/utils/auth-client', '550'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/lib/customize-site',
                component: ComponentCreator('/functions/lib/customize-site', '452'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/lib/hooks/is-mobile.svelte',
                component: ComponentCreator('/functions/lib/hooks/is-mobile.svelte', '539'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/lib/server',
                component: ComponentCreator('/functions/lib/server', '9d7'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/lib/server-1',
                component: ComponentCreator('/functions/lib/server-1', 'ab2'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/lib/server/auth',
                component: ComponentCreator('/functions/lib/server/auth', '8d5'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/lib/server/drizzle.config',
                component: ComponentCreator('/functions/lib/server/drizzle.config', '182'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/lib/server/email',
                component: ComponentCreator('/functions/lib/server/email', 'bb3'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/lib/server/ratelimits',
                component: ComponentCreator('/functions/lib/server/ratelimits', '5f3'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/lib/server/schema',
                component: ComponentCreator('/functions/lib/server/schema', 'f6b'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/lib/server/types',
                component: ComponentCreator('/functions/lib/server/types', '5d2'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/lib/server/users',
                component: ComponentCreator('/functions/lib/server/users', 'f3a'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/lib/server/validations',
                component: ComponentCreator('/functions/lib/server/validations', 'aa4'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/modules',
                component: ComponentCreator('/functions/modules', 'f7f'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/routes/+layout',
                component: ComponentCreator('/functions/routes/+layout', '354'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/guides/Server Shell Setup',
                component: ComponentCreator('/guides/Server Shell Setup', '91f'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/research/all-dev-tools',
                component: ComponentCreator('/research/all-dev-tools', '2d4'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/research/Cloud Providers 100K',
                component: ComponentCreator('/research/Cloud Providers 100K', 'e88'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/research/Docs Libraries',
                component: ComponentCreator('/research/Docs Libraries', '654'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/research/editors',
                component: ComponentCreator('/research/editors', 'd65'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/research/job_platforms_table',
                component: ComponentCreator('/research/job_platforms_table', '3bc'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/research/language-intelligence',
                component: ComponentCreator('/research/language-intelligence', '12d'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/research/nextjs-tools',
                component: ComponentCreator('/research/nextjs-tools', '2db'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/research/Payment Processor',
                component: ComponentCreator('/research/Payment Processor', 'f59'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/research/sms_api_comparison',
                component: ComponentCreator('/research/sms_api_comparison', '094'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/research/svelte_tools',
                component: ComponentCreator('/research/svelte_tools', '812'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/research/sveltekit_vs_nextjs_comparison',
                component: ComponentCreator('/research/sveltekit_vs_nextjs_comparison', '59a'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/research/Top Dev Tools',
                component: ComponentCreator('/research/Top Dev Tools', 'f13'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/research/Verify ID',
                component: ComponentCreator('/research/Verify ID', '78e'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/research/visual-intelligence',
                component: ComponentCreator('/research/visual-intelligence', 'cfa'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/research/Voice Agent API',
                component: ComponentCreator('/research/Voice Agent API', '611'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/',
                component: ComponentCreator('/', '825'),
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
