<template>
    <div class="spending-card">
        <md-card>
            <md-card-header>
                <md-card-header-text>
                    <md-layout>
                        <div class="md-title">{{ `${date} ${title}` }}</div>
                        <md-button class="md-icon-button detail-btn" @click="toggle">
                            <md-icon>keyboard_arrow_down</md-icon>
                        </md-button>
                    </md-layout>
                </md-card-header-text>
                <md-menu md-size="4" md-direction="bottom left">
                    <md-button class="md-icon-button" md-menu-trigger>
                        <md-icon>more_vert</md-icon>
                    </md-button>
                    <md-menu-content>
                        <md-menu-item>
                            <span>Add Spending</span>
                            <md-icon>playlist_add</md-icon>
                        </md-menu-item>
                        <md-menu-item>
                            <span>Edit</span>
                            <md-icon>settings</md-icon>
                        </md-menu-item>
                    </md-menu-content>
                </md-menu>
            </md-card-header>
            <md-card-content>
                <md-list>
                    <md-list-item v-for="(expense, index) in expenses" class="md-inset" key="index">
                        <md-layout md-flex="55">{{ expense.title}}</md-layout>
                        <md-layout md-flex="15">{{ expense.currency }}</md-layout>
                        <md-layout md-flex="20">{{ expense.money }}</md-layout>
                        <md-layout md-flex="10">
                            <md-button class="md-icon-button" md-menu-trigger>
                                <md-icon>edit</md-icon>
                            </md-button>
                        </md-layout>
                    </md-list-item>
                    <md-list-item class="md-inset">
                        <md-layout md-flex="55">總花費</md-layout>
                        <md-layout md-flex="15">{{ currency }}</md-layout>
                        <md-layout md-flex="20">{{ sum }}</md-layout>
                        <md-layout md-flex="10"></md-layout>
                    </md-list-item>
                </md-list>
            </md-card-content>
        </md-card>
        <md-button class="md-icon-button md-raised md-accent add-btn">
            <md-icon>add</md-icon>
        </md-button>
    </div>
</template>

<script>
    export default {
        props: [
            'date',
            'title',
            'expenses',
            'currency'
        ],
        methods: {
            toggle() {
                let card = this.$el.querySelector('.md-card')
                card.classList.toggle('detail-active')
            }
        },
        computed: {
            sum() {
                return this.expenses.reduce((total, expense) => {
                    var rate = 0.2691
                    var m = parseFloat(expense.money)
                    var money = this.currency === expense.currency ? (total + m) : (total + m * rate)
                    return money.toFixed(2)
                }, 0)
            }
        }
    }
</script>