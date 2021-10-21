<template>
  <div class="all container px-4 mx-auto max-w-lg">
    <div class="article left-half container">
      <h1><strong>Cum se desfasoara o seara?</strong></h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimd minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <img src="../static/images/people.png">
    </div>
    <div class="article right-half container">
      <img src="../static/images/people.png">
      <h1><strong>Cum se desfasoara o seara?</strong></h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextArea'
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  text-align: center;
  width: 100%;
  height: 100%;
  padding: auto;
  margin: auto;
  position: static;
}

img {
  width: 100%;
}

.all {
  padding: 20px 20px;
  height: 100%;
}

article {
  text-align: center;
  transform: translate(-50%, -50%);
  margin: 20px 20px;
}

.left-half {
  float: left;
  width: 45%;
}

.right-half {
  float: left;
  width: 45%;
}
</style>
