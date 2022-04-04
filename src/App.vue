<template>
  <div class="container">
    <div class="navigation">
      <router-link to="/1">component 1</router-link>
      <router-link to="/2">component 2</router-link>
      <router-link to="/3">component 3</router-link>
    </div>
    <div class="router-view-container">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  margin: auto;
  margin-top: 10px;
  border: 1px solid black;
  width: 99vw;
  height: 90vh;
}

.navigation {
  height: 10%;
  width: 100%;
  background: gainsboro;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 1.2em;
  }

  a.router-link-active {
    color: purple;
    font-weight: bold;
  }
}
.router-view-container {
  height: 80%;
  width: 90%;
  margin: 4% auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  // transform: translateX(30%);
}
</style>
