// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// import custom style
import "./assets/styles/main.scss";

// Import tailwindcss
import "~/assets/styles/tailwind.css";

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  head.htmlAttrs = {
    lang: "ar",
    dir: "rtl",
  };

  
}
