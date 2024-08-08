<template>
    <InnerPageHero image-url="/images/image-3.jpg" title="Articles" />

    <div class="container mx-auto py-8 sm:py-12">
       <Articles layout="grid" :show-view-all="false" />

       <div class="mt-8 sm:mt-12">
            <button class="px-4 py-2 sm:px-6 bg-primary text-white rounded focus:outline-none">
                View More
            </button>
       </div>
    </div>
</template>

<script>
import InnerPageHero from '@/components/InnerPageHero';
import Articles from '@/components/Articles'

export default {
    components: {
        InnerPageHero,
        Articles,
    },


    setup() {


        return {}
    },
}
</script>