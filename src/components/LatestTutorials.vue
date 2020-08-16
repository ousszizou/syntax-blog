<template>
  <div>
    <div class="latestTutorials__header">
      <h2 class="text-xl font-bold inline-block ml-4"><feather-icon class="inline ml-1 w-4"></feather-icon>آخر الدروس</h2>
      <g-link to="/" class="inline-block text-xs p-1 rounded">شاهد الكل</g-link>
    </div>
    <div class="latestTutorials__content mt-6">
      <ul>
        <li v-for="tutorial in tutorials" :key="tutorial.title" class="rounded hover:bg-gray-300 p-3">
          <g-link to="">{{ tutorial.title }}</g-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { FeatherIcon } from "vue-feather-icons";
export default {
  components: {
    FeatherIcon,
  },
  data() {
    return {
      tutorials: [
        {title: "كيفية إضافة عنصر في بداية مصفوفة في JavaScript"},
        {title: "كيفية تبديل عنصري مصفوفة في JavaScript"},
        {title: "كيفية استخدام Sequelize للتعامل مع PostgreSQL"},
        {title: "مقدمة في Linux"},
        {title: "كيفية عكس مصفوفة JavaScript"},
      ],
    }
  }
};
</script>

<style>
.latestTutorials__header h2 {
  color: var(--title-color);
}

.latestTutorials__header a {
  background: var(--link-bg);
  color: var(--link-color);
  transition: all 0.3s ease-in-out;
}

.latestTutorials__header a:hover {
  background: var(--link-hover-bg);
}

.latestTutorials__content ul li:hover {
  background: var(--each-color);
  cursor: pointer;
}

</style>
