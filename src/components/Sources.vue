<template>
    <div class="float__right">
        <v-menu offset-y>
            <v-btn
                slot="activator"
                color="primary"
                dark
            >
                {{selectedSource ? selectedSource : 'Filter'}}
            </v-btn>
            <v-list style="overflow-y:scroll; max-height:300px;">
                <v-list-tile @click="$emit('filterNewsHandler', '')">
                    <v-list-tile-title >All</v-list-tile-title>
                </v-list-tile>
                <v-list-tile v-for="(source, i) in sourcesDataList"  @click="$emit('filterNewsHandler', source.id)" :key="i">
                    <v-list-tile-title>{{ source.name }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
export default {
    name: 'Sources',
    props: ['sourcesDataList', 'selectedSource']
}
</script>

<style scoped>

</style>

