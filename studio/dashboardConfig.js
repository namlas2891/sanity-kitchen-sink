export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61bb931892985e1fc83f8b25',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-h8ab2uoc',
                  apiId: 'b3b0c8f0-b0a3-4186-94ba-48930525d894'
                },
                {
                  buildHookId: '61bb93183c8a9122ee56d7c3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-eo6eot77',
                  apiId: 'f9988f1e-f9cd-4ba3-9f7a-69c719c341e4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/namlas2891/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-eo6eot77.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
