<template>
  <div>
    <div class="latestCourses__header">
      <h2 class="text-xl font-bold inline-block ml-4"><zap-icon class="inline ml-1 w-4"></zap-icon>آخـر الدورات</h2>
      <g-link to="/" class="inline-block text-xs p-1 rounded">شاهد الكل</g-link>
    </div>
    <div class="latestCourses__content mt-6">
      <ul>
        <li v-for="course in courses" :key="course.title" class="rounded hover:bg-gray-300 p-3">
          <g-link to="">{{ course.title }}</g-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ZapIcon } from "vue-feather-icons";
export default {
  components: {
    ZapIcon,
  },
  data() {
    return {
      courses: [
        {title: "دورة تعلم بايثون من الصفر إلى الإحتراف"},
        {title: "دورة تعلم جافاسكربت الشاملة"},
        {title: "دورة تعلم react من الصفر إلى الإحتراف"},
        {title: "دورة تعلم Vuejs من الصفر إلى الإحتراف"},
        {title: "دورة الويب الشاملة"},
      ],
    }
  }
};
</script>

<style>
.latestCourses__header h2 {
  color: var(--title-color);
}

.latestCourses__header a {
  background: var(--link-bg);
  color: var(--link-color);
  transition: all 0.3s ease-in-out;
}

.latestCourses__header a:hover {
  background: var(--link-hover-bg);
}

.latestCourses__content ul li:hover {
  background: var(--each-color);
  cursor: pointer;
}
</style>
