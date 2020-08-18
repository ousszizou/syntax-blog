<template>
  <Layout>
    <div class="mt-16">
      <div class="text-center">
        <h1 class="post__title text-2xl sm:text-3xl mb-4">{{ $page.post.title }}</h1>
        <div class="post__time text-smallest sm:text-xs">
          <span>{{ moment($page.post.date).format("MMMM Do, YYYY") }}</span> |
          <span class="font-bold">{{ $page.post.timeToRead }} min read</span>
        </div>
        <div class="post__author text-smallest sm:text-xs">
          Posted by<span class="font-bold"> {{ $page.post.author }} </span>
        </div>
        <div class="post__tags mt-3 text-smallest sm:text-sm">
          <span
            class="px-1 rounded mx-1"
            v-for="tag in $page.post.tags"
            :key="tag"
          >
            {{ tag }}
          </span>
        </div>
      </div>
      <div class="mt-10 sm:mt-16 break-words text-lg md:text-xl">
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
}
</style>
