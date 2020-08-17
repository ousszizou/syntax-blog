<template>
  <div>
    <span v-if="$page.allCourse.totalCount == 0" class="text-sm md:text-xl">
      نعمل على تجهيز دورات جديدة ... شكرا لإهتمامك
    </span>
    <g-link v-else :to="course.path">
      <li class="rounded hover:bg-gray-300 p-3 text-sm">
        {{ course.title }}
      </li>
    </g-link>
  </div>
</template>

<script>
export default {
  props: ["course"],
};
</script>

<style scoped>
span {
  color: #FF9800;
}
</style>
