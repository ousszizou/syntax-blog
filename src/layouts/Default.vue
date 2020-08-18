<template>
  <div class="layout">
    <headroom>
      <header class="header block text-center sm:flex sm:justify-between sm:items-center w-full md:w-base">
        <strong class="block my-6">
          <g-link to="/" class="logo text-xs md:text-base">{{ $static.metadata.siteName }}</g-link>
        </strong>
        <nav class="nav">
          <g-link class="nav__link px-1 text-base md:px-2" to="/articles/">مقالات </g-link>
          <g-link class="nav__link px-1 text-base md:px-2" to="/tutorials/">دروس </g-link>
          <g-link class="nav__link px-1 text-base md:px-2" to="/courses/">دورات </g-link>
          <g-link class="nav__link px-1 text-base md:px-2" to="/contact">اتصل بنا</g-link>
          <ToggleDarkMode class="align-middle mr-2 md:mr-6" data-cursor-hover>
            <template slot="default" slot-scope="{ dark }">
              <MoonIcon v-if="dark" />
              <SunIcon v-else />
            </template>
          </ToggleDarkMode>
        </nav>
      </header>
    </headroom>
    <slot />
    <footer class="text-xs sm:text-sm mt-16 mb-6">
      <div class="my-6 flex flex-wrap lg:flex-no-wrap justify-center lg:justify-between">
        <div class="footer__links self-center order-2 lg:order-1 w-full lg:text-right">
          <g-link to="/" class="footer__link">سياسة الخصوصية</g-link>
          <g-link to="/" class="footer__link">خدماتنا</g-link>
          <g-link to="/" class="footer__link">عنا</g-link>
        </div>
        <div class="footer__socialmedia mb-4 lg:mb-0 w-full order-1 lg:order-2 lg:text-left">
          <g-link>
            <twitter-icon class="inline-block ml-2 w-4 sm:w-6"></twitter-icon>
          </g-link>
          <g-link>
            <facebook-icon class="inline-block ml-2 w-4 sm:w-6"></facebook-icon>
          </g-link>
          <g-link>
            <linkedin-icon class="inline-block ml-2 w-4 sm:w-6"></linkedin-icon>
          </g-link>
        </div>
      </div>
      <p>
        Created by <g-link to="https://xenodochial-yonath-b7c6a8.netlify.app/" class="font-bold">Oussama Djaidri</g-link>. Powered by
        <g-link to="https://gridsome.org/" class="font-bold underline"
          >Gridsome</g-link
        >
        &copy; 2020
      </p>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import ToggleDarkMode from "~/components/ToggleDarkMode";
import { headroom } from "vue-headroom";
import {
  SunIcon,
  MoonIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "vue-feather-icons";

export default {
  components: {
    ToggleDarkMode,
    SunIcon,
    MoonIcon,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    headroom,
  },
};
</script>

<style>

/* .layout div:first-child {
  width: 100%;
} */

.headroom {
  width: 100%;
  background: var(--bg-color);
  transition: background-color .6s !important;
}

.headroom--top {
  box-shadow: none !important;
}

.headroom--not-top {
  transform: translate3d(0px, 0px, 0px) !important;
  width: 100% !important;
  position: fixed !important;
}

.headroom--not-top header {
  @apply px-2
}

.headroom--pinned {
  box-shadow: 1px 1px 18px #00000030;
  width: 100%;
}

.headroom--unpinned {
  transform: translate3d(0px, 0px, 0px) !important;
  box-shadow: 1px 1px 18px #00000030;
}

.headroom > header {
  margin: 0 auto 10px auto;
  transition: background-color .6s;
}

/* change highlight selection color */
::-moz-selection {
  /* Code for Firefox */
  color: #111;
  background: #ffee5b;
}

::selection {
  color: #111;
  background: #ffee5b;
}

body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  margin-bottom: 20px;
  height: 80px;
}

.header .logo {
  padding: 4px 7px;
  border-radius: 7px;
  position: relative;
  background: var(--text-color);
  color: var(--bg-color);
  z-index: 999;
  transition: all 0.3s ease-in;
}

.header .logo:hover {
  background: var(--logo-color);
}

.header .logo::after {
  content: " ";
  width: 100%;
  height: 100%;
  border: 2px solid var(--text-color);
  border-radius: 7px;
  position: absolute;
  right: 5px;
  top: 4px;
  z-index: -1;
}

.nav__link:hover {
  color: var(--text-hover);
}

footer {
  text-align: center;
}

.footer__link {
  margin-left: 20px;
}

.footer__links a:hover {
  color: #6fb451;
}

.footer__socialmedia a:hover {
  cursor: pointer;
  color: #6fb451;
}

footer p a:hover {
  cursor: pointer;
  color: #6fb451;
}


/* Responsive */

@screen md {
  .headroom--not-top header {
    @apply px-0
  }
}

</style>
