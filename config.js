const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://notebook.wayanjimmy.xyz",
    gaTrackingId: "UA-154878946-1"
  },
  header: {
    logo: "https://avatars2.githubusercontent.com/u/1282808?s=460&v=4",
    logoLink: "https://notebook.wayanjimmy.xyz",
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
      { text: "wayanjimmy.xyz", link: "https://wayanjimmy.xyz" },
      { text: "blog.wayanjimmy.xyz", link: "https://blog.wayanjimmy.xyz" },
      { text: "resume.wayanjimmy.xyz", link: "https://resume.wayanjimmy.xyz" }
    ],
    frontline: false,
    ignoreIndex: true
  },
  siteMetadata: {
    title: "Notebook | @wayanjimmy",
    description: "Personal knowledge base",
    ogImage: null,
    docsLocation: "https://github.com/wayanjimmy/notebook/tree/master/content",
    favicon: "https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg"
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: "Notebook",
      short_name: "Notebook",
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
