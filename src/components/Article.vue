<template>
    <div :class="{'grid sm:grid-cols-5 gap-2 sm:gap-12': isList}">
        <div class=" h-64" :class="{'sm:h-400px sm:col-span-3': isList, 'sm:col-span-5': isGrid}">
            <img src="/public/images/image-1.jpg" alt="article" class="w-full h-full object-cover">
        </div>
        <div class="mt-1 sm:col-span-2 flex flex-col justify-between">
            <div :class="{'sm:py-2 sm:mt-0': isGrid,}">
                <div class="text-base text-gray-500">Category name</div>
                <h3 class="mt-1 text-2xl"><router-link to="/artiles"
                        class="hover:text-primary font-bold transition-colors duration-300">Lorem ipsum dolor sit amet,
                        consectetur adipisicing.</router-link></h3>
                <div class="mt-2 text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
                    incidunt sint atque odit sed vel praesentium excepturi sapiente eveniet ipsa...</div>
            </div>
            <div class="mt-1 text-base text-gray-500 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

                <div class="ml-2">
                    5 mins ago
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from "vue";

export default {

    props: {
        layout: {
            type: String,
            default: "List"
        }
    },

    setup(props) {
        let isGrid = computed(() => {
            return props.layout === 'grid';
        });

        let isList = computed(() => {
            return props.layout === 'list';
        });

        return {
            isGrid,
            isList,
        }
    }
}
</script>