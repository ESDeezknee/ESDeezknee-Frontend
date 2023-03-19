<template>
    <MobileTemplate>
      <p class="fw-bold mt-4" style="font-size:large; text-align: center;">{{ title }}</p>
      <form>
        <div class="mb-3" style="font-size:small">
          <label for="pax" class="col col-form-label">Number of pax:</label>
          <div class="col-sm-10">
            <input type="number" class="form-control" id="pax">
          </div>
        </div>
  
        <div class="mb-3" style="font-size:small;">
          <label for="description" class="col form-label">Description:</label>
          <textarea class="form-control" id="description" rows="2"></textarea>
        </div>
  
        <button type="button" class="btn btn-primary form-control mt-2" @click="openModal">Confirm</button>
      </form>
  
      <div class="modal fade" id="confirmationModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Confirm Input Group Details</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Number of pax: {{ numberOfPax }}</p>
              <p>Description: {{ description }}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-primary" @click="submitForm">Confirm</button>
            </div>
          </div>
        </div>
      </div>
  
    </MobileTemplate>
  </template>
  
  <script>
  import MobileTemplate from '../components/MobileTemplate.vue';
  import $ from 'jquery';
  
  export default{
    name: "InputGroupView",
    components: {
      MobileTemplate
    },
    props: {
      title: {
        type: String,
        default: 'Input Group Details'
      }
    },
    data() {
      return {
        numberOfPax: '',
        description: '',
      }
    },
    methods: {
      openModal() {
        $('#confirmationModal').modal('show');
        this.numberOfPax = $('#pax').val();
        this.description = $('#description').val();
      },
      submitForm() {
        // do something with the form data
        $('#confirmationModal').modal('hide');
      }
    }
  }
  </script>
  
  <style>
  .form-control {
    width: 100%;
    text-align: left;
  }
  </style>
  