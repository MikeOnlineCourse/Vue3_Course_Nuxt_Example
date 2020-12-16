<script>
export default {
  data() {
    return {
      user: {
        username: "mike",
        password: "7654321"
      },
      error_message: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    LoginFn() {}
  }
};
</script>
<template>
  <div class="loginBox">
    <div class="center">
      <div class="input-box">
        <p>NAME</p>
        <input
          type="text"
          placeholder="輸入使用者名稱"
          v-model="user.username"
        />
        <!-- <p v-if="error_message.username" class="error">
          {{ error_message.username }}
        </p> -->
      </div>
      <div class="input-box mb-20">
        <p>PASSWORD</p>
        <input type="password" placeholder="輸入密碼" v-model="user.password" />
        <!-- <p v-if="error_message.password" class="error">
          {{ error_message.password }}
        </p> -->
      </div>
      <button class="btn" @click="LoginFn">登入</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loginBox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 250px;
  // border-radius: 5px;
  padding: 20px 0;
  background-color: rgb(6, 43, 73);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 1px rgb(26, 29, 53);
}
p,
label {
  color: white;
  margin-bottom: 6px;
  font-size: 14px;
}
input[type="text"],
input[type="password"],
input[type="number"] {
  width: 180px;
  height: 24px;
  padding-left: 5px;
  font-size: 12px;
}
.input-box {
  margin-bottom: 20px;
}

input[type="radio"] {
  margin: 0 7px;
}
label {
  margin-right: 15px;
}

p.error {
  color: rgb(255, 119, 119);
  font-size: 12px;
  padding-top: 4px;
}
.mb-20 {
  margin-bottom: 30px;
}
h1 {
  color: aliceblue;
}
.btn {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: snow;
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 20px;
  // border-radius: 20px;
}
</style>
