<template>
  <div class="container">
    <div class="left">
      <h1>Sign Up</h1>
      <p>create a new account</p>

      <form>
        <label for="firstname">firstname</label>
        <input
          type="text"
          v-model="firstname"
          name="firstname"
          id="firstname"
        />

        <label for="lastname">lastname</label>
        <input type="text" v-model="lastname" name="lastname" id="lastname" />

        <label for="tel">Phone Number</label>
        <input type="tel" v-model="mobile" name="mobile" id="mobile" />

        <label for="email">Email</label>
        <input type="email" v-model="email" name="email" id="email" />

        <label for="password">Password</label>
        <input
          type="password"
          v-model="password"
          name="password"
          id="password"
        />
        <label for="adhaar">Adhaar Number</label>
        <input type="text" v-model="adhaar" name="adhaar" id="adhaar" />

        <input
          @click="handleSubmit"
          class="button"
          type="button"
          value="Sign Up"
        />
      </form>
    </div>

    <!-- <div class="right">
      <img
        src="https://images.unsplash.com/photo-1581215524789-83361d941827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      />
    </div> -->
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Signup",
  data() {
    return {
      count: 0,
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
      adhaar: "",
    };
  },
  methods: {
    handleSubmit: async function (e) {
      e.preventDefault();
      console.log("hiii");
      if (!this.firstname) {
        alert("please enter your firstname");
      } else if (!this.lastname) {
        alert("please enter your lastname");
      } else if (!this.email) {
        alert("please enter your email");
      } else if (!this.mobile) {
        alert("please enter your mobile");
      } else if (!this.adhaar) {
        alert("please enter your adhaar number");
      } else if (!this.password) {
        alert("please enter a password");
      } else {
        const newUser = {
          firstname: this.firstname,
          lastname: this.lastname,
          mobile: this.mobile,
          email: this.email,
          password: this.password,
          adhaar: this.adhaar,
        };
        await axios
          .post("http://localhost:8000/signup", newUser)
          .then((res) => {
            console.log(res);
            let fullname = `${res.data.firstname} ${res.data.lastname}`;
            localStorage.setItem("user_full_name", fullname);
            this.$router.push("/login");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,900&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
}

body {
  height: 100vh;
  background-image: linear-gradient(130deg, #fefefe, #ededed);
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background-color: white;
  display: flex;
  width: 800px;
  margin: 2% 24%;
  border: 1px solid black;
  box-shadow: 8px 8px 0 0 black;
}

.left {
  width: 580px;
  margin: 0% 13%;
}

.left {
  padding: 10px 30px;
}

form {
  display: flex;
  flex-direction: column;
}

.accept {
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 0.9rem;
}

.accept input {
  width: 15px;
  margin-right: 10px;
}

img {
  height: 530px;
  padding: 40px 60px;
}

.left h1 {
  margin-bottom: 10px;
}

label {
  margin: 10px 0 5px;
  font-size: 0.9rem;
}

.left p {
  margin-bottom: 15px;
}

input {
  height: 35px;
}

.accept p {
  margin: 0;
}

.button {
  width: 100%;
  height: 45px;
  background-color: black;
  color: white;
  font-size: 1rem;
  margin-top: 30px;
}
</style>
