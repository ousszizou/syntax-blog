<template>
  <div>
    <span v-if="$page.allPost.totalCount == 0">
      نعمل على كتابة مقالات جديدة و حصرية ... شكرا لإهتمامك
    </span>
    <g-link v-else :to="post.path">
      <li class="rounded hover:bg-gray-300 p-3">
        {{ post.title }}
      </li>
    </g-link>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style scoped>
span {
  color: #FF9800;
}
</style>
