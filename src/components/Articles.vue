<template>
    <div>
        <div :class="{'space-y-8 sm:space-y-16': isList, 'grid sm:grid-cols-3 sm:gap-12': isGrid,}">
            <Article :layout="layout" />
            <Article :layout="layout" />
            <Article :layout="layout" />
            <Article :layout="layout" />
            <Article :layout="layout" />
            <Article :layout="layout" />
        </div>

        <div v-if="showViewAll" class="mt-8 sm:mt-12">
            <router-link to="/articles" class="px-4 py-2 sm:px-6 bg-primary text-white rounded">View All</router-link>
        </div>
    </div>
</template>


<script>
import Article from '@/components/Article';
import { computed } from "vue";

export default {
    components: {
        Article,
    },

    props: {
        layout: {
            type: String,
            default: "list"
        },
        showViewAll: {
            type: Boolean,
            default: true,
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
};
</script>
