const app = Vue.createApp({
  data() {
    return {
      firstname: "John",
      lastname: "doe",
      gender: "male",
      email: "johndoe@gmail.com",
      image:
        "https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3JhbmdlJTIwZmxvd2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");

      const { results } = await res.json();
    //   console.log(results);

      this.firstname = results[0].name.first;
      this.lastname = results[0].name.last;
      this.gender = results[0].gender;
      this.email = results[0].email;
      this.image = results[0].picture.large;
    },
  },
});
app.mount("#app");
