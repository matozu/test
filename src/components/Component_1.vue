<template>
  <div class="component-1">
    <div>
      <h1>Bok.</h1>
      <h2>Ja sam mato.</h2>
      <p>Ja sam frontend developer.</p>
      <p>Vrlo sam kreativan.</p>
      <p>Volim i pase i mačke.</p>
      <p>Najdraža boja mi je plava.</p>
    </div>

    <router-link class="link" to="/2">version #2 ---></router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.component-1 {
  height: 100%;
  font-family: "Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: calc(10px + 0.33vw);
  -webkit-font-smoothing: antialiased;
  padding: 5vh 10vw;
  color: #121314;
}

h1 {
  font-size: 4.5em;
  font-weight: 500;
  margin: 8vh 0 0 0;
}

h2 {
  font-weight: 500;
  font-size: 2.2em;
  margin: 30px 0;
}

p {
  font-size: 1.6em;
  font-weight: 350;
  line-height: 1.5;
  max-width: 28em;
}

.link {
  text-decoration: none;
  display: block;
  margin: 30px 100px;
  font-weight: bold;
  color: gray;
}
</style>