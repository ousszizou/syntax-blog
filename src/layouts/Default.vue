<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/" class="logo">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/articles/">مقالات </g-link>
        <g-link class="nav__link" to="/tutorials/">دروس </g-link>
        <g-link class="nav__link" to="/courses/">دورات </g-link>
        <g-link class="nav__link" to="/contact">اتصل بنا</g-link>
        <ToggleDarkMode class="align-middle mr-6" data-cursor-hover>
          <template slot="default" slot-scope="{ dark }">
            <MoonIcon v-if="dark" />
            <SunIcon v-else />
          </template>
        </ToggleDarkMode>
      </nav>
    </header>
    <slot />
    <footer class="text-sm mt-16">
      <div class="my-6 flex justify-between">
        <div class="footer__links self-center">
          <g-link to="/" class="footer__link">سياسة الخصوصية</g-link>
          <g-link to="/" class="footer__link">خدماتنا</g-link>
          <g-link to="/" class="footer__link">عنا</g-link>
        </div>
        <div class="footer__socialmedia">
          <twitter-icon class="inline-block ml-2"></twitter-icon>
          <facebook-icon class="inline-block ml-2"></facebook-icon>
          <linkedin-icon class="inline-block ml-2"></linkedin-icon>
        </div>
      </div>
      <p>
        Created by <span class="font-bold">Oussama Djaidri</span>. Powered by
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
import {
  SunIcon,
  MoonIcon,
  HeartIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "vue-feather-icons";

export default {
  components: {
    ToggleDarkMode,
    SunIcon,
    MoonIcon,
    HeartIcon,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
  },
};
</script>

<style>

/* change highlight selection color */
::-moz-selection { /* Code for Firefox */
  color: #111;
  background: #FFEE5B;
}

::selection {
  color: #111;
  background: #FFEE5B;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  transition: all .3s ease-in;
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

.nav__link {
  margin-left: 20px;
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

.footer__links a {
  transition: all .3s ease-in-out;
}

.footer__links a:hover {
  color: #6fb451;
}

.footer__socialmedia:hover {
  cursor: pointer;
}

</style>
