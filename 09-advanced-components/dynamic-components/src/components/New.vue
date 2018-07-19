<template>
  <div>
    <h1>New Component</h1>
    <div>This is where the new component will live</div>
  </div>
</template>

<script>
export default {
  deactivated() {
    console.log("The component has been deactivated");
  },
  activated() {
    console.log("The component has been activated");
  }
}
</script>
