const app = Vue.createApp({
  data() {
    return {
      goalValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.goalValue);
      // e.target.value = "";
    },
  },
});

app.mount("#user-goals");
