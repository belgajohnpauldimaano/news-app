<template>
    <v-container fluid>
        <div class="page__header_container">
            <h1 class="float__left font-weight-light">Headlines</h1>
            <Sources v-bind:sourcesDataList="sourcesDataList" v-bind:selectedSource="selectedSource" v-on:filterNewsHandler="filterNewsHandler" />
        </div>
        <div class="clearfix"></div>
        <div class="articles__container">
        <v-container  grid-list-sm fluid>
            <Articles v-bind:articleDataList="articleDataList" v-if="articleDataList.length"  />
            <div class="font-weight-light headline" v-else> No record found </div>
        </v-container>
        </div>
    </v-container>
</template>

<script>
import Articles from './../components/Articles'
import Sources from './../components/Sources'
export default {
    name: "ArticlesPage",
    components: {
        Articles,
        Sources
    },
    data () {
        return {
            selectedSource: ''
        }
    },
    computed: {
        articleDataList() {
            const articles = this.$store.getters['article/getArticles']
            if (!this.selectedSource) {
                return articles
            }
            return articles.filter(a => a.source.id === this.selectedSource)
        },
        sourcesDataList() {
            const sources = this.$store.getters['article/getSources']
            return sources
        }
    }, created () {
        this.$store.dispatch("article/fetchArticles")
        this.$store.dispatch("article/fetchSources")
    },
    methods: {
        filterNewsHandler(selectedSource) {
            this.selectedSource = selectedSource
        } 
    }
}
</script>

<style scoped>
    .float__left {
        float: left;
    }
    .float__right {
        float: right;
    }
    .clearfix {
        clear: both;
    }
    .articles__container {

    }
</style>

