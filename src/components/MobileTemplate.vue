<template>
  <div class="container">
    <div
      class="row justify-content-center align-items-center"
      style="height: 100vh"
    >
      <div class="">
        <div class="mobile-phone bg-white">
          <!-- content of mobile phone -->
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MobileTemplate",
  // other options
};
</script>

<style>
* {
  font-family: "Inter", sans-serif;
}

.mobile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

h2 {
  font-weight: bold;
  font-family: "Arial Rounded MT Bold", sans-serif;
}

.mobile-phone {
  border: 10px solid #000000;
  border-radius: 20px;
  width: 340px; /* adjust width as needed */
  height: 640px; /* adjust height as needed */
  margin: auto;
  padding: 20px;
  overflow: scroll;
}
</style>
