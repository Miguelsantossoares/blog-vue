<template>
    <div>
        <div class="">
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
        </div>

        <div>
            <router-link to="/articles">View all</router-link>
        </div>
    </div>
</template>


<script>
import Article from '@/components/Article';

    export default {
    components: {
        Article,
    },

        props: {},
    
        setup () {
        }
    };
</script>
