<template>
  <div class="error-wrapper">
    <div class="error-content">
      <h1>404 Not Found</h1>
      <div>
        <h4>Go Back To Exercises:</h4>
        <p>
          <a href="/">Exercise 1</a>
        </p>
        <p>
          <a href="/ex2">Exercise 2</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.error-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
}
.error-content {
  text-align: center;
}
</style>