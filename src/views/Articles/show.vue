<template>
  <InnerPageHero image-url="/images/image-5.jpg" title="Article Title" />

  <div class="container px-4 py-8 mx-auto sm:px-0 sm:py-20">
    <div class="flex flex-col justify-between sm:flex-row sm:items-center">
      <div class="flex items-center text-gray-700">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 6h.008v.008H6V6Z"
            />
          </svg>
        </div>
        <div class="l-1">Category Name</div>
      </div>

      <div class="flex items-center mt-2 text-sm text-gray-700 sm:mt-0">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
        <div class="ml-1">September 18th, 2020</div>
      </div>
    </div>

    <div class="mt-4 sm:mt-16">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
        quia facere dolorem vel recusandae inventore autem iusto minima
        distinctio consequuntur, dolorum, voluptatem consequatur reiciendis
        ipsam et earum laudantium fugit corporis, possimus non accusantium
        quibusdam! Iste beatae doloremque qui explicabo labore eos dignissimos
        architecto ipsam. Expedita iure animi fuga eos assumenda.
      </p>
      <p class="mt-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
        quia facere dolorem vel recusandae inventore autem iusto minima
        distinctio consequuntur, dolorum, voluptatem consequatur reiciendis
        ipsam et earum laudantium fugit corporis, possimus non accusantium
        quibusdam! Iste beatae doloremque qui explicabo labore eos dignissimos
        architecto ipsam. Expedita iure animi fuga eos assumenda.
      </p>
      <p class="mt-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
        quia facere dolorem vel recusandae inventore autem iusto minima
        distinctio consequuntur, dolorum, voluptatem consequatur reiciendis
        ipsam et earum laudantium fugit corporis, possimus non accusantium
        quibusdam! Iste beatae doloremque qui explicabo labore eos dignissimos
        architecto ipsam. Expedita iure animi fuga eos assumenda.
      </p>
      <p class="mt-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
        quia facere dolorem vel recusandae inventore autem iusto minima
        distinctio consequuntur, dolorum, voluptatem consequatur reiciendis
        ipsam et earum laudantium fugit corporis, possimus non accusantium
        quibusdam! Iste beatae doloremque qui explicabo labore eos dignissimos
        architecto ipsam. Expedita iure animi fuga eos assumenda.
      </p>
    </div>
  </div>
</template>

<script>
import InnerPageHero from "@/components/InnerPageHero";

export default {
  components: {
    InnerPageHero,
  },

  setup() {
    return {};
  },
};
</script>
