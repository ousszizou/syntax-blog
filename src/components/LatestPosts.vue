<template>
  <div>
    <div class="latestPosts__header">
      <h2 class="text-xl font-bold inline-block ml-4">
        <coffee-icon class="inline ml-1 w-4"></coffee-icon>آخر المقالات
      </h2>
      <g-link to="/" class="inline-block text-xs p-1 rounded">شاهد الكل</g-link>
    </div>
    <div class="latestPosts__content mt-6">
      <ul>
        <li
          v-for="article in articles"
          :key="article.title"
          class="rounded hover:bg-gray-300 p-3"
        >
         <g-link to="">{{ article.title }}</g-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { CoffeeIcon } from "vue-feather-icons";
export default {
  components: {
    CoffeeIcon,
  },
  data() {
    return {
      articles: [
        { title: "7 أوامر Git قد لا تعرفها" },
        { title: "كيف تتعلم البرمجة؟" },
        { title: "5 أشياء أحببتها في معرض اعمالي المعمول بالـ Gridsome" },
        { title: "ما هو الجديد في إصدار Tailwindcss 2" },
        { title: "اجعل تصفح GitHub أسهل وأسرع مع Octotree" },
      ],
    };
  },
};
</script>

<style>
.latestPosts__header h2 {
  color: var(--title-color);
}

.latestPosts__header a {
  background: var(--link-bg);
  color: var(--link-color);
  transition: all 0.3s ease-in-out;
}

.latestPosts__header a:hover {
  background: var(--link-hover-bg);
}

.latestPosts__content ul li:hover {
  background: var(--each-color);
  cursor: pointer;
}
</style>
