<template>
  <div class="component-2">
    <div class="card">
      <h1>mato</h1>
      <h2>Najbolji frontend developer u Hrvatskoj</h2>
      <a>#matojenajbolji</a>
    </div>
    <div class="links">
      <router-link class="link" to="/1">&larr;&nbsp;version #1</router-link>
      <router-link class="link" to="/3">version #3&nbsp;&rarr;</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.component-2 {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-image: url(/src/assets/img/1.jpg);
  background-size: cover;
  font-size: calc(10px + 0.33vw);
}
.card {
  font-size: 1.3em;
  padding: 20px;
  text-align: center;
}

h1 {
  display: inline-block;
  padding: 5px;
  line-height: 1;
  font-size: 3em;
  background: rgb(245, 245, 245, 0.8);
}

h2 {
  margin-top: 20px;
  font-size: 1em;
  background: rgb(220, 220, 220, 0.9);
  padding: 3px;
}

a {
  display: inline-block;
  margin-top: 30px;
  background: rgb(220, 220, 220, 0.9);
  padding: 3px;
  cursor: pointer;
}

.links {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  width: 30vw;
  min-width: 250px;
}
.link {
  text-decoration: none;
  font-weight: bold;
  color: #121314;
  background: whitesmoke;
  padding: 3px;
  transition: all 0.5s ease-in-out;
}

.link:hover {
  background: gold;
}
</style>