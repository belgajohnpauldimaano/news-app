<template>
        <v-flex xs12 sm6 md3 lg3 elevation-10>
            <v-img
                :src="`${articleData.urlToImage ? articleData.urlToImage : ''}`"
                height="250px"  dark>
                <div v-bind:class="['block__overlay']">
                    <div class="goto__button">
                        <v-btn v-bind:href="articleData.url" flat icon color="grey" >
                            <v-icon>arrow_forward</v-icon>
                        </v-btn>
                    </div>
                    
                    <div v-bind:class="['flex-block',articleData.urlToImage === null ? 'article__content__white' : '']">
                        <div class="flex-bottom article__content">
                            <div v-bind:class="[(articleData.urlToImage === null ? 'article__date_dark' : 'article__date'), 'font-weight-medium', ]">{{ moment(String(articleData.publishedAt)).format('DD.MM.YY') }}</div>
                            <div v-bind:class="['title' ,(articleData.urlToImage === null ? 'article__title_blue' : 'article__title'), 'font-weight-medium', 'subheading']">{{ articleData.title }}</div>
                            <div class="caption article__description">{{ articleData.description  | truncate(50) }} <a v-bind:href="articleData.url" v-bind:class="['article__link']" v-if="articleData.description">Read More</a> </div>
                        </div>
                    </div>
                </div>
            </v-img>
        </v-flex>
</template>

<script>
import moment from 'moment'
export default {
    name: "Article",
    props: ['articleData'],
    created() {
    },
    methods: {
        moment
    }
}
</script>

<style scoped>
    .article__content {
        text-align: left;
    }
    .goto__button {
        position: absolute;
        right: 0;
        top: 0;
    }
    .block{
        position: relative;
        height: 100%;
        width: 100%;
        background-size: cover;
        background-size: 100% 100%;
    }
    .block__overlay{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }

    .flex-block {
        display: flex;
        height: 100%;
        padding: 20px;
        background: rgba(63, 81, 181, 0.30);
    }
    .flex-bottom {
        align-self: flex-end;
    }
    .article__date {
        color: #dbdada;
    }
    .article__date_dark {
        color: #6d6d6d;
    }
    .article__title {
        color: #fff;
    }
    .article__link {
        color: #fff;
        text-decoration: none;
    }
    .article__description {
        color: #ebebeb;
    }
    .article__content__white {
        background: #fff !important;
    }
</style>

