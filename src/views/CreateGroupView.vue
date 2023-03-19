<template>
    <RouterView/>
    <MobileTemplate>
        <div class="container">
            <p class="fw-bold mt-4" style='font-size:x-large'>{{ title }}</p>
            <span class="fw-normal" style="font-size:small">
                Create our very own group, and choose to either <b>broadcast your own group</b> or <b>find other groups to join</b>. 
                Click on the button below to get started!
            </span>
            <div class="image-container mt-4">
                <img class="rounded-image" src="../assets/create-group.jpeg" alt="Create Group">
            </div>
            <router-link class="rounded-button" to="/input-group">Create Group</router-link>
        </div>
    </MobileTemplate>
</template>


<script>
import MobileTemplate from '../components/MobileTemplate.vue';

export default{
    name: 'MyView',
    components: {
        MobileTemplate
    },
    props: {
      title: {
        type: String,
        default: 'Ready for an adventure?'
      }
    },

    methods: {
    
    }
}
</script>


<style>
* {
  font-family: 'Inter', sans-serif;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 50vh; */
  overflow: hidden;
}


.image-container {
  border-radius: 5%;
  overflow: hidden;
  margin-bottom: 20px;
}

.rounded-image {
  width: 100%;
  height: auto;
  border-radius: 5;
}

.rounded-button {
  margin-top: 10px;
  width: 100%;
  border-radius: 20px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  text-align: center;
  text-decoration: none;

}
</style>