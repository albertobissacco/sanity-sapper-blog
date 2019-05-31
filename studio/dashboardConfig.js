export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5cf127198ddf3bb43b10813d',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-7dsr83na',
                  apiId: '58deba9a-8299-4231-a442-db6927054a8e'
                },
                {
                  buildHookId: '5cf1271a47fdd2ef60c347e6',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-routu7ks',
                  apiId: '9f2b47fd-8535-4d18-900a-6d7ac9eaf159'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/albertobissacco/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-routu7ks.netlify.com', category: 'apps'}
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
