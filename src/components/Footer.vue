<template>
  <div>
    <p class="footer">Zahraatul Islam &copy; <span>{{ currYear }}</span></p>
  </div>
</template>

<script>
export default {
  name: "FooterComp",
  data() {
    return {
      currYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped></style>
