<template>
    <div>
        <card v-for="(row, index) in rows" :date="row.date" :title="row.title" :expenses="row.expenses" :currency="currency" key="index"></card>
        <md-button class="md-icon-button md-raised md-accent add-btn">
            <md-icon>add</md-icon>
        </md-button>
    </div>
</template>

<script>
    import card from './components/spendingCard.vue'

    export default {
        props: [
            'currency'
        ],
        components: {
            card
        },
        data: function() {
            return {
                rows: [
                    {
                        date: "2017/10/20",
                        title: "日本-範例",
                        expenses: [
                            {
                                title: "機票",
                                currency: "JPY",
                                money: "27988"
                            },
                            {
                                title: "住宿",
                                currency: "JPY",
                                money: "45678"
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
        }
    }
</script>