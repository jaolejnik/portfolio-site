module.exports = {
  publicPath: "/portfolio-site/",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/constants.scss"; @import "@/styles/transitions.scss";`,
      },
    },
  },
};
