<template>
    <v-layout row wrap >
        <Article v-for="(ad, i) in articleDataList" :key="i"  v-bind:articleData="ad" />
    </v-layout>
</template>

<script>
import Article from './Article'
export default {
    name: "Articles",
    props: ['articleDataList'],
    components: {
        Article
    },
    created() {
        // eslint-disable-next-line
        console.log(this.articleDataList)
    }
}
</script>

<style scoped>
</style>

