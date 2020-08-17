<template>
  <Layout>
    <h1 class="text-5xl font-bold">سينتاكس</h1>

    <div class="blog-principle">
      <p class="mt-4">
        <q>
          إذا مُنع العلم عن العامة فلا خير فيه للخاصة -
          <span class="font-bold">أنس بن مالك</span>
        </q>
      </p>
      <p class="mt-3 max-w-md">
        <q>
          شَرُّ القومِ قَوْمٌ مَرُّوُا بِأَرْضٍ فَلاَةٍ، فلما تمكن منهم الظمأ
          واستيأسوا من طلب الورد، أدركوا بئرا فشربوا منها حتى قضوا وطرهم، ووردوا
          إبلهم وملؤوا قرابهم، ثم طمروا البئر وواصلوا سفرهم لئلا ينتفع منها
          غيرهم، وما علموا أن لو سبقهم إليها أمثالهم لكانوا قد هلكوا عطشا. -
          <span class="font-bold">وصية مبرمج حكيم لإبنه (خالد السعداني)</span>
        </q>
      </p>
    </div>
    <latest-posts class="mt-16" />
    <latest-tutorials class="mt-16" />
    <latest-courses class="mt-16" />
  </Layout>
</template>

<page-query>
query {
  allPost {
    totalCount
    edges{
      node{
      	id
        title
        path
      }
    }
  }
  allTutorial {
    totalCount
  }
  allCourse {
    totalCount
  }
}
</page-query>

<script>
import LatestPosts from "~/components/LatestPosts.vue";
import LatestTutorials from "~/components/LatestTutorials.vue";
import LatestCourses from "~/components/LatestCourses.vue";
export default {
  metaInfo: {
    title: "الرئيسية",
  },
  components: {
    LatestPosts,
    LatestTutorials,
    LatestCourses,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.blog-principle span {
  color: #6fb451;
}
</style>
