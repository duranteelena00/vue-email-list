console.log("Vue OK", Vue);
Vue.config.devtools = true;

const app = new Vue({
  el: "#app",
  data: {
    emailsList: [],
  },
  methods: {},
  created() {
    for (let i = 0; i < 10; i++) {
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((res) => {
            const response = res.data.response;
            this.emailsList.push(response);
        });
    }
  },
});

