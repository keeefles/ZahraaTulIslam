<template>
    <div class="card">
      <div class="cardHeader">
        <slot name="card-header"></slot>
      </div>
      <div class="cardBody">
        <slot name="card-body"></slot>
      </div>
      <div class="cardFooter">
        <slot name="card-footer"></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Card",
  };
  </script>
  
  <style scoped>
  .card {
    width: 18rem;
    margin: 0.5rem;
  }
  </style>