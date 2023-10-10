<template>
  <div class="head">
    <div class="logo"><span>MZ</span></div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </div>
</template>
<script>
export default {
  name: "AppV",
};
</script>

<style lang="scss" scoped>
.head {
  background-color: rgba(19, 18, 18, 0.898);
  height: 60px;
  display: flex;
  align-items: center; /* لوضع العناصر على نفس ارتفاع الهيدر */

  .logo {
    border-radius: 50%;
    background-color: white;
    padding: 7px 7px;
    text-align: left;
    justify-content: left;
    margin-left: 40px;
    flex: 0; /* يمكن تغيير هذه القيمة حسب حجم الشعار */
    span {
      letter-spacing: -3px;
      padding: 9px 9px;
      border-radius: 50%;
      background-color: black;
      display: inline-block;
      font-size: 20px;
      color: white;
      font-style: oblique;
      font-family: "Your Unique Font", cursive;
    }
  }

  nav {
    button {
      position: absolute;
      left: 67%;
    }

    text-align: right;
    flex: 1; /* يمكن تغيير هذه القيمة حسب الحاجة */
    a {
      text-decoration: none;
      font-size: 20px;
      padding-left: 30px;
      color: antiquewhite;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
