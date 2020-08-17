<template>
  <Layout>
    <div class="mt-16">
      <div class="text-center">
        <h1 class="post__title text-5xl mb-4">{{ $page.post.title }}</h1>
        <div class="post__time text-xs">
          <span>{{ moment($page.post.date).format("MMMM Do, YYYY") }}</span> |
          <span class="font-bold">{{ $page.post.timeToRead }} min read</span>
        </div>
        <div class="post__author text-xs">
          Posted by<span class="font-bold"> {{ $page.post.author }} </span>
        </div>
        <div class="post__tags mt-1">
          <span
            class="px-1 rounded mx-1"
            v-for="tag in $page.post.tags"
            :key="tag"
          >
            {{ tag }}
          </span>
        </div>
      </div>
      <div class="mt-16 break-words">
        <p v-html="$page.post.content"></p>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    title
    date
    timeToRead
    tags
    content
    author
  }
}
</page-query>

<script>
export default {};
</script>

<style scoped>
h1 {
  color: var(--title-color);
}

.post__tags span {
  background: var(--link-bg);
  color: var(--link-color);
  transition: all 0.3s ease-in-out;
  font-size: 13px;
}

h2 {
  font-size: 1.25rem;
}
</style>
