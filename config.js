const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://wayanjimmy-notebook.netlify.com",
    gaTrackingId: null
  },
  header: {
    logo: "",
    logoLink: "https://wayanjimmy-notebook.netlify.com",
    title: "Notebook",
    githubUrl: "https://github.com/wayanjimmy/notebook",
    helpUrl: "",
    tweetText: "",
    links: [{ text: "", link: "" }],
    search: {
      enabled: !!process.env.GATSBY_ALGOLIA_APP_ID,
      indexName: "notebook",
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY
    }
  },
  sidebar: {
    forcedNavOrder: ["/introduction"],
    collapsedNav: [
      "/talks",
      "/quotes",
      "/podcasts",
      "/programming",
      "/languages",
      "/books",
      "/health"
    ],
    links: [
      { text: "wayanjimmy.gitlab.io", link: "https://wayanjimmy.gitlab.io" },
      { text: "wayanjimmy.netlify.com", link: "https://wayanjimmy.netlify.com" }
    ],
    frontline: false,
    ignoreIndex: true
  },
  siteMetadata: {
    title: "Notebook | @wayanjimmy",
    description: "Personal knowledge base",
    ogImage: null,
    docsLocation:
      "https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content",
    favicon: "https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg"
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: "Gatsby Gitbook Starter",
      short_name: "GitbookStarter",
      start_url: "/",
      background_color: "#6b37bf",
      theme_color: "#6b37bf",
      display: "standalone",
      crossOrigin: "use-credentials",
      icons: [
        {
          src: "src/pwa-512.png",
          sizes: `512x512`,
          type: `image/png`
        }
      ]
    }
  }
};

module.exports = config;
