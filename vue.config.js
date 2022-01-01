module.exports = {
  publicPath: "/personal-site/",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/constants.scss";`,
      },
    },
  },
};
