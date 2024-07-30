<template>
  <div>
  <Navbar/>
  <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/layouts/Navbar";

export default {
  components: {
    Navbar,
  }
}
</script>