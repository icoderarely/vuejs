const app = Vue.createApp({
  data() {
    return {
      taskValue: "",
      tasks: [],
      isVisible: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.isVisible ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.taskValue);
    },
    toggleTasks() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount("#assignment");
