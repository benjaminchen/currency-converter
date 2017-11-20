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
            </md-card-header>
            <md-card-content>
                <md-list>
                    <md-list-item v-for="(expense, index) in expenses" class="md-inset" key="index">
                        <md-layout md-flex="55">{{ expense.title}}</md-layout>
                        <md-layout md-flex="15">{{ expense.currency }}</md-layout>
                        <md-layout md-flex="20">{{ expense.money }}</md-layout>
                        <md-layout md-flex="10">
                            <md-button class="md-icon-button" @click="openDialog('edit-dialog', expense)">
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
                <md-dialog md-open-from="#fab" md-close-to="#fab" ref="edit-dialog">
                    <md-dialog-title>更新支出</md-dialog-title>

                    <md-dialog-content>
                        <form>
                            <md-input-container>
                                <label>消費</label>
                                <md-textarea v-model="tempExpense.title"></md-textarea>
                            </md-input-container>
                            <md-input-container>
                                <label>幣別</label>
                                <md-textarea v-model="tempExpense.currency"></md-textarea>
                            </md-input-container>
                            <md-input-container>
                                <label>金額</label>
                                <md-textarea v-model="tempExpense.money"></md-textarea>
                            </md-input-container>
                        </form>
                    </md-dialog-content>

                    <md-dialog-actions>
                        <md-button class="md-primary" @click="closeDialog('edit-dialog')">取消</md-button>
                        <md-button class="md-primary" @click="closeDialog('edit-dialog')">修改</md-button>
                    </md-dialog-actions>
                </md-dialog>
            </md-card-content>
        </md-card>
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
        data: () => ({
                tempExpense: {
                    title: "",
                    currency: "",
                    money: "",
                },
        }),
        methods: {
            toggle() {
                let card = this.$el.querySelector('.md-card')
                card.classList.toggle('detail-active')
            },
            openDialog(ref, expense) {
                this.tempExpense = expense
                this.$refs[ref].open();
            },
            closeDialog(ref) {
                this.$refs[ref].close();
            },
            onOpen() {
                console.log('Opened');
            },
            onClose(type) {
                console.log('Closed', type);
            }
        },
        computed: {
            sum() {
                return this.expenses.reduce((total, expense) => {
                    var rate = 0.2691
                    var m = parseFloat(expense.money)
                    var money = this.currency === expense.currency ? (total + m) : (total + m * rate)
                    return Math.round(money * 100) / 100
                }, 0)
            }
        }
    }
</script>