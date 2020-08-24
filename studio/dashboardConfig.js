export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5f43370ec86c10c4bddfae83',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zexqicps',
                  apiId: '92b96d69-f3c5-4557-94b2-bde397f107bc'
                },
                {
                  buildHookId: '5f43370e542704d7196cd0b1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-rviftcq5',
                  apiId: '39982a30-e6f9-428e-931d-96562472aedd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dieu556/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-rviftcq5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
