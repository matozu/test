<template>
  <div class="component-3">
    <div class="pink">
      <h1>Bok.</h1>
      <h2>Ja sam mato.</h2>
      <p>Frontend developer.</p>
      <p>Neki misle da ja nemam osjećaje,</p>
      <p>ali ja imam mnogo raznih osjećaja.</p>

      <a href="#" @click="showOthers = true"
        >Pogledaj što drugi developeri kažu o mati</a
      >
      <router-link class="link" to="/2">&larr;&nbsp;version #2</router-link>
    </div>

    <div
      class="other"
      :style="showOthers ? 'transform: scale(1)' : 'transform: scale(0);'"
    >
      <div class="close fa fa-times" @click="showOthers = false"></div>
      <img src="../assets/img/3.jpg" alt="" />
      <div class="opinion">
        <p>"If you haven't noticed, mato is the best!"</p>
        <p style="text-align: right"><b>Frank (32)</b></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showOthers: false,
    };
  },
};
</script>

<style scoped>
.component-3 {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(/src/assets/img/7.jpg);
  background-size: cover;
  font-size: calc(10px + 0.33vw);
}
.pink {
  position: relative;
  padding: 10px;
  background: rgb(255, 192, 203, 0.7);
  color: #121314;
}

h2 {
  margin: 10px 0;
}

p {
  line-height: 1.4em;
}

a {
  margin-top: 20px;
  display: block;
  text-decoration: none;
  color: blue;
}

.other {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30%;
  padding: 30px;
  background: pink;
  transition: all 1s ease-in-out;
  transform: scale(1);
  z-index: 1;
  width: 80vw;
  max-width: 400px;
}
img {
  height: 30vw;
  max-height: 200px;
  margin-right: 30px;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.link {
  background: rgb(245, 222, 179, 0.5);
  padding: 0 3px;
  text-decoration: none;
  color: #121314;
  position: absolute;
}
</style>