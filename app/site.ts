// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  title: 'Vue Designer',
  description:
    'A visual IDE for Vue applications with a Nuxt and Tailwind CSS starter.',
  logo: 'i-vscode-icons:file-type-vue',
  author: 'Pinegrow',
  url: 'https://pg-nuxt-tailwindcss.netlify.app',
  github: 'https://github.com/pinegrow/pg-nuxt-tailwindcss',
  ogImageUrl: 'og-image.jpg', // absolute url (or) from public folder
  generator: 'https://vuedesigner.com',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default

  navs: {
    primary: [
      {
        title: 'Home',
        icon: 'i-mdi-home',
        to: '/',
      },
      {
        title: 'Quick start',
        icon: 'i-mdi-rocket-launch-outline',
        to: '/quick-start',
      },
    ],
    secondary: [
      {
        title: 'Subscribe',
        icon: 'i-mdi-email-outline',
        to: '/subscribe',
      },
    ],
  },
}
