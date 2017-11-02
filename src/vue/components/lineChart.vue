<template>
    <md-card class="line-chart">
        <md-card-media>
            <line-chart
                :data="data"
                :options="options"
                :width="width"
                :height="height"
            ></line-chart>
        </md-card-media>
    </md-card>
</template>

<script>
    import Vue from 'vue';
    import { Line } from 'vue-chartjs'

    let LineChart = {
        extends: Line,
        props: ['data', 'options', 'height'],
        mounted () {
            this.renderChart(this.data, this.options)
        }
    }

    export default {
        components: {
            LineChart
        },
        props: ['data', 'options', 'width', 'height'],
    }
</script>
