<template>
    <md-card class="caculator">
        <md-card-media>
            <md-layout>
                <md-layout md-flex="40">
                    <md-layout md-flex="100" class="flag-dollar">
                        <md-icon class="md-size-2x md-primary" md-src="assets/images/icons/tw.svg"></md-icon>
                        <span>{{ fromDollar }}</span>
                    </md-layout>
                    <md-layout md-flex="100" class="dollar-info">
                        <span>{{ `1 ${fromDollar} = ${exchangeRate} ${toDollar}` }}</span>
                    </md-layout>
                </md-layout>
                <md-layout md-flex="20">
                    <md-icon class="md-size-2x md-primary" md-src="assets/images/icons/right-arrow-in-a-circle.svg"></md-icon>
                </md-layout>
                <md-layout  md-flex="40">
                    <md-layout md-flex="100" class="flag-dollar">
                        <span>{{ toDollar }}</span>
                        <md-icon class="md-size-2x md-primary" md-src="assets/images/icons/us.svg"></md-icon>
                    </md-layout>
                    <md-layout md-flex="100" class="dollar-info">
                        <span>{{ `1 ${toDollar} = ` + (1/exchangeRate).toFixed(4) + ` ${fromDollar}` }}</span>
                    </md-layout>
                </md-layout>
            </md-layout>
            <md-layout>
                <form novalidate @submit.stop.prevent="submit">
                    <md-input-container class="md-has-value">
                        <label>輸入面額</label>
                        <md-input placeholder="0" v-model="inputDollars"></md-input>
                        <span>{{ fromDollar }}</span>
                    </md-input-container>
                    <md-input-container class="md-has-value">
                        <label>轉換面額</label>
                        <md-input v-bind:value="caculate()" disabled></md-input>
                        <span>{{ toDollar }}</span>
                    </md-input-container>
                </form>
            </md-layout>
        </md-card-media>
    </md-card>
</template>

<script>
    export default {
        data: function() {
            return {
                fromDollar: "TWD",
                toDollar: "USD",
                exchangeRate: 0.033,
                inputDollars: null
            }
        },
        methods: {
            caculate() {
                return (this.inputDollars * this.exchangeRate).toFixed(4)
            }
        }
    }
</script>