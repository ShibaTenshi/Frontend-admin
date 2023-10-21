<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
const tokenRef = useCookie("token");
tokenRef.value = "";
navigateTo("login");
</script>