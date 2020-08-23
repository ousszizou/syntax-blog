<template>
  <Layout>
    <div class="mt-16">
      <h1 class="text-2xl sm:text-3xl mb-4 font-bold">مقالات</h1>
      <!-- v-for="edge in $page.posts.edges" :key="edge.node.id" -->
      <div>
        <ul>
          <li
            class="rounded hover:bg-gray-300 py-2 text-sm md:text-lg cursor-pointer"
            v-for="edge in $page.posts.edges"
            :key="edge.node.id"
          >
            <span class="date text-xs font-bold italic">{{ edge.node.date }} / </span><g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPost {
    totalCount
    edges {
      node {
        id
        title
        path
        date(format: "YYYY-MM-DD")
      }
    }
  }
}
</page-query>

<script>
export default {
  props: ["posts"],
};
</script>

<style scoped>

.date::before {
  content: " ";
  width: 10px;
  height: 10px;
  background: #6fb451;
  display: inline-block;
  margin-left: 7px;
  border-radius: 50px;
}
</style>
