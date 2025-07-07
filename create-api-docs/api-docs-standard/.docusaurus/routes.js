import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', '4b4'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '73b'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '681'),
            routes: [
              {
                path: '/functions/',
                component: ComponentCreator('/functions/', '5b3'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/CAUSE/CAUSEMainPage',
                component: ComponentCreator('/functions/CAUSE/CAUSEMainPage', 'b8a'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/CAUSE/Footer',
                component: ComponentCreator('/functions/CAUSE/Footer', '345'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/CAUSE/Navigation',
                component: ComponentCreator('/functions/CAUSE/Navigation', '126'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/Effects/BorderBeam',
                component: ComponentCreator('/functions/Effects/BorderBeam', '9e3'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/Effects/GlowWrapper',
                component: ComponentCreator('/functions/Effects/GlowWrapper', '42b'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/Effects/Meteors',
                component: ComponentCreator('/functions/Effects/Meteors', '56d'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/Effects/MorphText',
                component: ComponentCreator('/functions/Effects/MorphText', '424'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/Effects/ParticleText',
                component: ComponentCreator('/functions/Effects/ParticleText', '2e3'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/Effects/VaporizeTextCycle',
                component: ComponentCreator('/functions/Effects/VaporizeTextCycle', '452'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/InteractiveApps/GameOfLife',
                component: ComponentCreator('/functions/InteractiveApps/GameOfLife', '9f3'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/InteractiveApps/GlobeAnimation',
                component: ComponentCreator('/functions/InteractiveApps/GlobeAnimation', '704'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/InteractiveApps/QuantumGeometry',
                component: ComponentCreator('/functions/InteractiveApps/QuantumGeometry', '360'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/InteractiveApps/SpiralAnimation',
                component: ComponentCreator('/functions/InteractiveApps/SpiralAnimation', 'f1b'),
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
                path: '/functions/Sections/Conclusion',
                component: ComponentCreator('/functions/Sections/Conclusion', 'a82'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/Sections/Header',
                component: ComponentCreator('/functions/Sections/Header', 'ba9'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/Sections/Preparation',
                component: ComponentCreator('/functions/Sections/Preparation', '0b6'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/Sections/Principle',
                component: ComponentCreator('/functions/Sections/Principle', '78d'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/Sections/Problems',
                component: ComponentCreator('/functions/Sections/Problems', 'a39'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/Sections/Rights',
                component: ComponentCreator('/functions/Sections/Rights', '548'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/functions/Sections/Understandings',
                component: ComponentCreator('/functions/Sections/Understandings', '480'),
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
