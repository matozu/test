<template>
  <div class="component-2">
    <div class="appricot">
      {{ $mato("is the best guy ever") }}
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.component-2 {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-image: url("src/assets/img/2.jpg");
  background-size: cover;
}
.appricot {
  font-size: 3rem;
  padding: 10px;
  background: rgb(251, 206, 177);
}
</style>