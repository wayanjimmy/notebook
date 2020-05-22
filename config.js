const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://notebook.wayanjimmy.xyz",
    gaTrackingId: "UA-154878946-1",
    trailingSlash: false
  },
  header: {
    logo: "https://avatars2.githubusercontent.com/u/1282808?s=50&v=4",
    logoLink: "https://notebook.wayanjimmy.xyz",
    title: "Notebook",
    githubUrl: "https://github.com/wayanjimmy/notebook",
    helpUrl: "",
    tweetText: "",
    social: `<li>
		    <a href="https://twitter.com/wayanjimmy" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>`,
    links: [
      { text: "wayanjimmy.xyz", link: "https://wayanjimmy.xyz" },
      { text: "blog.wayanjimmy.xyz", link: "https://blog.wayanjimmy.xyz" },
      { text: "resume.wayanjimmy.xyz", link: "https://resume.wayanjimmy.xyz" }
    ],
    search: {
      enabled: false,
      indexName: "notebook",
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY
    }
  },
  sidebar: {
    forcedNavOrder: [],
    collapsedNav: [
      "/books",
      "/cooking",
      "/finance",
      "/health",
      "/herbs",
      "/books",
      "/languages",
      "/podcasts",
      "/coding",
      "/talks",
      "/workshop",
      "/quotes",
      "/japanese-popculture"
    ],
    links: [],
    frontline: false,
    ignoreIndex: true,
    title: "knowledge base"
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
