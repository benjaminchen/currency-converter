<template>
    <div>
        <calculator :input="input"></calculator>
        <md-layout class="keyboard">
            <md-layout v-for="i in 3" :key="i" md-flex="100">
                <md-layout v-for="j in 3" :key="j">
                    <md-button class="md-raised" @click="btnClick((i-1)*3+j)">{{ (i-1)*3+j }}</md-button>
                </md-layout>
            </md-layout>
            <md-layout md-flex="100">
                <md-layout>
                    <md-button class="md-raised" @click="back">Back</md-button>
                </md-layout>
                <md-layout>
                    <md-button class="md-raised" @click="btnClick(0)">0</md-button>
                </md-layout>
                <md-layout>
                    <md-button class="md-raised" @click="btnClick('.')">.</md-button>
                </md-layout>
                <md-layout>
                    <md-button class="md-raised" @click="clear">Clear</md-button>
                </md-layout>
            </md-layout>
        </md-layout>
    </div>
</template>

<script>
    import calculator from './components/calculator.vue'

    export default {
        components: {
            toolbar,
            calculator,
        },
        data: () => ({
            input: null
        }),
        methods: {
            btnClick(num) {
                if (this.input <= 0 && num === '.') {
                    this.input = '0.'
                } else if (this.input > 0 || this.input === '0.') {
                    this.input += `${num}`
                } else {
                    this.input = `${num}`
                }
            },
            clear() {
                this.input = null
            },
            back() {
                this.input && (this.input = this.input.substring(0, (this.input.length - 1)))
            }
        }
    }
</script>