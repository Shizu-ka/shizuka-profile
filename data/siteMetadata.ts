export let siteMetadata = {
  siteUrl: 'https://www.shizuka.my.id',
  siteRepo: 'https://github.com/Shizu-ka/shizuka-profile',
  siteLogo: '/static/images/logo.jpg',
  image: '/static/images/logo.jpg',
  socialBanner: '/static/images/socialBanner.png',
  email: 'shizuka0@proton.me',
  github: 'https://github.com/Shizu-ka',
  x: 'https://instagram.com/yosiatp_',
  facebook: 'https://facebook.com/elonmusk',
  youtube: 'https://www.youtube.com/elonmusk',
  linkedin: 'https://www.linkedin.com/in/yosia-pangondian-828104221',
  locale: 'en-US',
  analyticsURL: 'https://analytics.eu.umami.is/share/twSI8AhZ2dPuXRTg/Shizuka%20Web',
  analytics: {
    plausibleDataDomain: '',
    simpleAnalytics: false, // true | false
    umamiWebsiteId: 'ff28aa2e-6a67-4c71-82d4-2201fadd1db1',
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  socialAccounts: {
    github: 'Shizu-ka',
    linkedin: 'Yosia',
    x: 'yosiatp_',
  },
}

/**
 * Select a provider and use the environment variables associated to it
 * https://vercel.com/docs/environment-variables
 * --
 *
 * Visit each provider's documentation link and follow the instructions, then add the environment variable to your project.
 */
export let commentConfig = {
  provider: 'giscus', // 'giscus' | 'utterances' | 'disqus',
  // https://giscus.app/
  giscusConfig: {
    repo: '', // process.env.GISCUS_REPO
    repositoryId: '', // process.env.GISCUS_REPOSITORY_ID
    category: '', // process.env.GISCUS_CATEGORY
    categoryId: '', // process.env.GISCUS_CATEGORY_ID
    mapping: 'title',
    reactions: '1',
    metadata: '0',
    lightTheme: 'light',
    darkTheme: 'transparent_dark',
    themeURL: '',
  },
  // https://utteranc.es/
  utterancesConfig: {
    repo: '', // process.env.UTTERANCES_REPO
    issueTerm: '',
    label: '',
    lightTheme: '',
    darkTheme: '',
  },
  // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
  disqus: {
    shortname: '', // process.env.DISQUS_SHORTNAME
  },
}
