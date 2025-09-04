const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "1",
          name: "John Doe",
          phone: "1234",
          email: "abc@mail.com",
        },
        {
          id: "2",
          name: "George Push",
          phone: "9876",
          email: "xyz@mail.com",
        },
      ],
    };
  },
  methods: {},
});

app.component("friend-contact", {
  template: `
<li>
  <h2>{{ friend.name }}</h2>
  <button @click="toggleView">{{isVisible ? "Hide" : "Show"}} Details</button>
  <ul v-if="isVisible">
    <li><strong>Phone:</strong> {{ friend.phone }}</li>
    <li><strong>Email:</strong> {{ friend.email }}</li>
  </ul>
</li>
`,
  props: ["friend"],
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    toggleView() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount("#app");
