<template>
  <div class="notfound flex justify-center items-center h-screen">
    <div class="w-1/2 text-center">
      <frown-icon size="4x" class="mx-auto icon"></frown-icon>
      <h1 class="text-5xl mb-8">الصفحة التي تبحث عنها غير موجودة أو تم حذفها</h1>
      <g-link to="/" class="rounded-full px-6 py-2 text-xl">عودة للرئيسية</g-link>
    </div>
  </div>
</template>

<script>
import { FrownIcon } from "vue-feather-icons";
export default {
  components: {
    FrownIcon,
  },
};
</script>

<style scoped>

.icon {
  color:#ffc107;
}
a {
  background: #ffc107;
  color: var(--bg-color);
  transition: all .6s ease-in-out;
}

a:hover {
  background: #e4ac02;
}

</style>
