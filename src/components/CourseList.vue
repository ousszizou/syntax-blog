<template>
  <div>
    <span v-if="$page.allCourse.totalCount == 0">
      نعمل على تجهيز دورات إحترافية ... شكرا لإهتمامك
    </span>
    <g-link v-else :to="course.path">
      <li class="rounded hover:bg-gray-300 p-3">
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
