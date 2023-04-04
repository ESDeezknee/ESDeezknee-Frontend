<template>
  <!-- <div class="container"> -->
  <div
    class="row justify-content-center align-items-center"
    style="height: 100vh"
  >
    <div class="">
      <div class="mobile-phone bg-white">
        <!-- content of mobile phone -->
        <div style="overflow-y: auto; height: calc(100% - 50px)">
          <slot></slot>
        </div>

        <div class="bottom-nav">
          <router-link to="/home" class="button mx-auto" style="color: black"
            ><i class="bi bi-house"></i
          ></router-link>
          <router-link to="/group" class="button mx-auto" style="color: black"
            ><i class="bi bi-search-heart"></i
          ></router-link>
          <router-link to="/ride" class="button mx-auto" style="color: black"
            ><i class="bi bi-ticket-perforated"></i
          ></router-link>
          <router-link
            to="/mission"
            class="button mx-auto"
            style="color: black"
          >
            <i class="bi bi-gift"></i
          ></router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
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
  /* height: 640px; adjust height as needed */
  margin: auto;
  padding: 20px;
  overflow: scroll;
  position: relative;
}

.bottom-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-decoration: none;
  background-color: white;
  padding: 18px 5px;
  margin-top: gray;
}

.bottom-nav button {
  flex-grow: 1; /* add this to make the buttons take equal width */
  border: none;
  background-color: gray;
  font-size: 14px;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  padding: 30px;
}

.bottom-nav a {
  text-decoration: none;
  color: white;
}

.bottom-nav button:active {
  color: #7f7f7f; /* change color when clicked */
}
</style>
