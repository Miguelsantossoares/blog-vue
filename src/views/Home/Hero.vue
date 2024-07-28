<template>
    <div class="relative z-0 hero-height">
        <img src="/public/images/hero.jpg"
             alt="Hero"
             class="block w-full h-full object-cover">

        <div class="absolute inset-0 bg-black opacity-50"></div>

        <div class="px-4 sm:px-0 absolute inset-0 text-white">  
              <div class="container mx-auto h-full flex flex-col justify-center">
                <div>Welcome to</div>
                <div class="mt-1 text-6xl font-bold">Laratips</div>
                <div class="mt-2 sm:w-1/2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, numquam nesciunt? Voluptatibus veritatis eligendi voluptate dignissimos quas asperiores iure, maxime maiores ut excepturi magni porro. Doloremque quae quibusdam necessitatibus quo!
                </div>

                <div class="mt-8 text-primary">
                    <svg
                    class="h-10 animate-bounce"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor" >
                    <path stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
                    </svg>
                </div>
               </div>
            </div>    
        </div>
</template>

<script>
export default {
props: {},

    setup () {
    }
}
</script>