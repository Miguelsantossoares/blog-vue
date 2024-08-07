<template>
  <InnerPageHero image-url="/images/image-3.jpg" title="Contact Us" />

    <div class="container mx-auto py-8 sm:py-12">
         <div class="grid sm:grid-cols-3 sm:gap-4 px-4 sm:px-0">
            <div><span class="text-gray-500">Adress:</span> Lorem Ipsum</div>
            <div><span class="text-gray-500">Phone:</span> +0987654321</div>
            <div><span class="text-gray-500">Email:</span> info@laratipsofficial.com</div>
         </div>
    </div>
</template> 

<script>
import InnerPageHero from '@/components/InnerPageHero';

export default {
    components: {
        InnerPageHero,
    },

    
    setup () {
        

        return {}
    },
}
</script>