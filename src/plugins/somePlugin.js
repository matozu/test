export default {
  install: (app, options) => {
    app.config.globalProperties.$mato = (data) => {
      return "mato " + (data ? data : "default");
    };
  },
};
