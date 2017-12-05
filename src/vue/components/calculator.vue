<template>
    <md-card class="caculator">
        <md-card-media>
            <form novalidate @submit.stop.prevent="submit">
                <md-layout md-flex="100">
                    <md-layout md-flex="15">
                        <md-button class="md-icon-button exchange-btn" @click="swap">
                            <md-icon class="md-primary" md-src="assets/images/icons/exchange.svg"></md-icon>
                        </md-button>
                    </md-layout>
                    <md-layout md-flex="85">
                        <md-layout md-flex="100">
                            <md-layout md-flex="30">
                                <md-layout md-flex="100" class="flag-dollar">
                                    <md-button class="md-icon-button" @click="openDialog('dialog1', 'fromDollar')">
                                        <md-icon class="md-size-2x" v-bind:md-src="getFlag(fromDollar)"></md-icon>
                                    </md-button>
                                </md-layout>
                                <md-layout md-flex="100" class="dollar-info">
                                    <span>{{ `1 : ` + exchangeRate.toFixed(2) }}</span>
                                </md-layout>
                            </md-layout>
                            <md-layout md-flex="70">
                                <md-input-container class="md-has-value">
                                    <label>{{ fromDollar }}</label>
                                    <md-input placeholder="0" v-model="inputDollars"></md-input>
                                </md-input-container>
                            </md-layout>
                        </md-layout>
                        <md-layout md-flex="100" class="margin-top-20">
                            <md-layout md-flex="30">
                                <md-layout md-flex="100" class="flag-dollar">
                                    <md-button class="md-icon-button" @click="openDialog('dialog1', 'toDollar')">
                                        <md-icon class="md-size-2x" v-bind:md-src="getFlag(toDollar)"></md-icon>
                                    </md-button>
                                </md-layout>
                                <md-layout md-flex="100" class="dollar-info">
                                    <span>{{ `1 : ` + (1/exchangeRate).toFixed(2) }}</span>
                                </md-layout>
                            </md-layout>
                            <md-layout md-flex="70">
                                <md-input-container class="md-has-value">
                                    <label>{{ toDollar }}</label>
                                    <md-input v-bind:value="caculate()" disabled></md-input>
                                </md-input-container>
                            </md-layout>
                        </md-layout>
                    </md-layout>
                </md-layout>
            </form>
        </md-card-media>
        <md-dialog md-open-from="#custom" md-close-to="#custom" ref="dialog1">
            <md-dialog-content>
                <md-list class="flag-list">
                    <md-list-item v-for="(currency, index) in currencies.lists" :key="index" @click="setDollar(currency, 'dialog1')">
                        <md-button class="md-icon-button">
                            <md-icon class="md-size-2x" v-bind:md-src="getFlag(currency)"></md-icon>
                        </md-button>
                        <span>{{ currency }}</span>
                    </md-list-item>
                </md-list>
            </md-dialog-content>
        </md-dialog>
    </md-card>
</template>

<script>
    export default {
        mounted: function() {
            this.currencies = this.$store.state.currencies
        },
        data: function() {
            return {
                currencies: [],
                fromDollar: "NTD",
                toDollar: "USD",
                exchangeRate: 0.033,
                inputDollars: null,
                setTarget: null
            }
        },
        methods: {
            getFlag(dollar) {
                return `assets/images/icons/${dollar}.svg`
            },
            caculate() {
                return (this.inputDollars * this.exchangeRate).toFixed(4)
            },
            swap() {
                let fromDollar = this.fromDollar
                this.fromDollar = this.toDollar
                this.toDollar = fromDollar
                this.exchangeRate = (1/this.exchangeRate)
            },
            openDialog(ref, target) {
                this.setTarget = target
                this.$refs[ref].open()
            },
            closeDialog(ref) {
                this.$refs[ref].close()
            },
            setDollar(currency, ref) {
                this[this.setTarget] = currency
                this.exchangeRate = this.currencies[this.fromDollar] / this.currencies[this.toDollar]
                this.$refs[ref].close()
            }
        }
    }
</script>