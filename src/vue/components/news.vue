<template>
    <md-card class="news">
        <md-card-header>
            <div class="md-title">新聞</div>
        </md-card-header>
        <md-card-media>
            <md-list>
                <md-list-item v-for="(row, index) in news" :key="index">
                    <span>{{ row.title }}</span>
                </md-list-item>
            </md-list>
        </md-card-media>
    </md-card>
</template>

<script>
    export default {
        props: ['news'],
    }
</script>