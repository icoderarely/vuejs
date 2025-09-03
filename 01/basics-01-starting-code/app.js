const app = Vue.createApp({
  // data: function() {}
  // method shorthand of modern js
  data() {
    return {
      message: "Hey there boi...",
      goalA: "Learn Vue",
      goalB: "Master Vue",
      vueLink: "https://vuejs.org/",
      htmlContent: "<h3>This is heading 3</h3>",
    };
  },
  methods: {
    outputGoal() {
      const rNum = Math.random();
      // if (rNum < 0.5) return "Learn Vue";
      if (rNum < 0.5) return this.goalA;
      // else return "Master Vue";
      else return this.goalB;
    },
  },
});
app.mount("#user-goal");
