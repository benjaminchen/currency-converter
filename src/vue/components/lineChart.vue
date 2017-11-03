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
        <md-card-actions>
            <md-button default>今日</md-button>
            <md-button>本週</md-button>
            <md-button>本月</md-button>
        </md-card-actions>
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
