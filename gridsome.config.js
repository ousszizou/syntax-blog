// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwindcss = require("tailwindcss");

module.exports = {
  siteName: "مدونة سينتاكس",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/posts/**/*.md",
        typeName: "Post",
        path: "./content/posts/**/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/tutorials/**/*.md",
        typeName: "Tutorial",
        path: "./content/tutorials/**/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/courses/**/*.md",
        typeName: "Course",
        path: "./content/courses/**/*.md",
      },
    },
  ],
  templates: {
    Post: "/posts/:slug",
    Tutorial: "/tutorials/:slug",
    Course: "/courses/:slug",
  },
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"],
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  },
};
