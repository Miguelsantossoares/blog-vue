<template>
  <nav
    id="navbar"
    class="px-4 py-4 sm:py-6 bg-white sm:bg-transparent sm:shadow-none sm:fixed w-full z-10"
  >
    <div class="container mx-auto flex flex-col sm:flex-row items-center justify-between">
      <div class="w-full flex flex-row items-center justify-between">
        <div class="text-3xl font-bold">
          <span class="sm:text-white">Lara</span>
          <span class="text-primary">Tips</span>
        </div>

        <div>
          <button v-show="!isVisible" class="sm:hidden" @click="toggle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          <button v-show="isVisible" class="sm:hidden" @click="toggle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        class="mt-4 sm:mt-0 w-full sm:space-x-4 sm:text-right sm:block sm:text-white"
        :class="{ hidden: !isVisible }"
      >
        <NavbarLink to="/articles" label="Articles" />
        <NavbarLink to="/about" label="About" />
        <NavbarLink to="/contact" label="Contact" />
      </div>
    </div>
  </nav>
</template>

<script>
import NavbarLink from "./NavbarLink";
import { useToggle } from "../../composables/useToggle";

export default {
  components: {
    NavbarLink,
  },

  props: {},

  setup() {
    let { isVisible, toggle } = useToggle();

    return {
      isVisible,
      toggle,
    };
  },
};
</script>
