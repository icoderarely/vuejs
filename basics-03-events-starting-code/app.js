const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmName: "",
    };
  },
  computed: {
    fullname() {
      if (this.confirmName === "") return "";
      return this.confirmName + " Doe";
    },
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    setName(e) {
      this.name = e.target.value;
    },
    submitForm() {
      alert(this.counter);
    },
    setConfirmName(e) {
      this.confirmName = this.name;
      e.target.value = "";
    },
  },
});

app.mount("#events");
