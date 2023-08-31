/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, publicRuntimeConfig: {
    GQL_HOST:'https://mockend.com/manoj-ap/mockbackend/graphql',
    NAV_MENU:[{caption:"Home",path:"/"},{caption:"Blog",path:"/id"},{caption:"Category",path:"/category"},{caption:"About",path:"/About"}],
  }
}

module.exports = nextConfig
