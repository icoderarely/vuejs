const app = Vue.createApp({
  data() {
    return {
      boxA: false,
      boxB: false,
      boxC: false,
      boxD: false,
      boxE: false,
      boxF: false,
    };
  },
  computed: {
    boxEClasses() {
      return { active: this.boxE };
    },
  },
  methods: {
    boxSelected(box) {
      // if (box === "A") this.boxA = true;
      if (box === "A") this.boxA = !this.boxA;
      else if (box === "B") this.boxB = !this.boxB;
      else if (box === "C") this.boxC = !this.boxC;
      else if (box === "D") this.boxD = !this.boxD;
      else if (box === "E") this.boxE = !this.boxE;
      else if (box === "F") this.boxF = !this.boxF;
    },
  },
});

app.mount("#styling");
