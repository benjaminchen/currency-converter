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
                        <md-menu-item @click="openDialog('edit-row-dialog')">
                        <span>修改標題</span>
                        <md-icon>edit</md-icon>
                        </md-menu-item>

                        <md-menu-item @click="deleteRow">
                        <span>刪除旅程</span>
                        <md-icon>delete</md-icon>
                        </md-menu-item>
                    </md-menu-content>
                </md-menu>
            </md-card-header>
            <md-card-content>
                <md-list>
                    <md-list-item v-for="(expense, index) in expenses" class="md-inset" key="index">
                        <md-layout md-flex="50"><span>{{ expense.title}}</span></md-layout>
                        <md-layout md-flex="15">{{ expense.currency }}</md-layout>
                        <md-layout md-flex="20">{{ expense.money }}</md-layout>
                        <md-layout md-flex="10">
                            <md-button class="md-icon-button" @click="openDialog('edit-dialog', expense, index)">
                                <md-icon>edit</md-icon>
                            </md-button>
                        </md-layout>
                        <md-layout md-flex="5">
                            <md-button class="md-icon-button" @click="deleteExpense(index)">
                                <md-icon>delete</md-icon>
                            </md-button>
                        </md-layout>
                    </md-list-item>
                    <md-list-item class="md-inset">
                        <md-layout md-flex="50">總花費</md-layout>
                        <md-layout md-flex="15">{{ $store.state.settings.currency }}</md-layout>
                        <md-layout md-flex="20">{{ sum }}</md-layout>
                        <md-layout md-flex="15">
                            <md-button class="md-icon-button" @click="openDialog('add-dialog')">
                                <md-icon>add</md-icon>
                            </md-button>
                        </md-layout>
                    </md-list-item>
                </md-list>

                <md-dialog md-open-from="#fab" md-close-to="#fab" ref="edit-row-dialog">
                    <md-dialog-title>修改旅程標題</md-dialog-title>

                    <md-dialog-content>
                        <form>
                            <md-input-container>
                                <input type="date" v-model="date">
                            </md-input-container>
                            <md-input-container>
                                <label>標題</label>
                                <md-textarea v-model="title"></md-textarea>
                            </md-input-container>
                        </form>
                    </md-dialog-content>

                    <md-dialog-actions>
                        <md-button class="md-primary" @click="closeDialog('edit-row-dialog')">關閉</md-button>
                    </md-dialog-actions>
                </md-dialog>

                <md-dialog md-open-from="#fab" md-close-to="#fab" ref="add-dialog">
                    <md-dialog-title>新增支出</md-dialog-title>

                    <md-dialog-content>
                        <form>
                            <md-input-container>
                                <label>消費</label>
                                <md-textarea v-model="newExpense.title"></md-textarea>
                            </md-input-container>
                            <md-input-container>
                                <select v-model="newExpense.currency">
                                    <option value="" disabled selected>幣別</option>
                                    <option v-for="(currency, index) in currencies" :value="currency">{{ currency }}</option>
                                </select>
                            </md-input-container>
                            <md-input-container>
                                <label>金額</label>
                                <md-textarea v-model="newExpense.money"></md-textarea>
                            </md-input-container>
                        </form>
                    </md-dialog-content>

                    <md-dialog-actions>
                        <md-button class="md-primary" @click="closeDialog('add-dialog')">取消</md-button>
                        <md-button class="md-primary" @click="editOrAdd('add-dialog')">新增</md-button>
                    </md-dialog-actions>
                </md-dialog>

                <md-dialog md-open-from="#fab" md-close-to="#fab" ref="edit-dialog">
                    <md-dialog-title>更新支出</md-dialog-title>

                    <md-dialog-content>
                        <form>
                            <md-input-container>
                                <label>消費</label>
                                <md-textarea v-model="editExpense.title"></md-textarea>
                            </md-input-container>
                            <md-input-container>
                                <select v-model="editExpense.currency">
                                    <option v-for="(currency, index) in currencies" :value="currency">{{ currency }}</option>
                                </select>
                            </md-input-container>
                            <md-input-container>
                                <label>金額</label>
                                <md-textarea v-model="editExpense.money"></md-textarea>
                            </md-input-container>
                        </form>
                    </md-dialog-content>

                    <md-dialog-actions>
                        <md-button class="md-primary" @click="closeDialog('edit-dialog')">取消</md-button>
                        <md-button class="md-primary" @click="editOrAdd('edit-dialog', editIndex)">修改</md-button>
                    </md-dialog-actions>
                </md-dialog>
            </md-card-content>
        </md-card>
    </div>
</template>

<script>
    export default {
        created: function() {
            this.editExpense = Object.assign({}, this.nullExpense)
            this.newExpense = Object.assign({}, this.nullExpense)
        },
        mounted: function() {
            this.currencies = this.$store.state.currencies
        },
        props: [
            'date',
            'title',
            'expenses',
            'deleteRow',
            'saveRows'
        ],
        data: () => ({
                currencies: [],
                editIndex: null,
                nullExpense: {
                    title: "",
                    currency: "",
                    money: "",
                },
                editExpense: null,
                newExpense: null,
        }),
        methods: {
            toggle() {
                let card = this.$el.querySelector('.md-card')
                card.classList.toggle('detail-active')
            },
            openDialog(ref, expense = null, index = null) {
                if (expense) {
                    this.editExpense = expense
                    this.editIndex = index
                }
                this.$refs[ref].open()
            },
            closeDialog(ref) {
                this.$refs[ref].close()
                this.newExpense = Object.assign({}, this.nullExpense)
            },
            editOrAdd(ref, index = null) {
                var nullExpense = Object.assign({}, this.nullExpense)
                index ? this.editExpense = nullExpense : this.expenses.push(this.newExpense)
                this.newExpense = nullExpense
                this.closeDialog(ref)
            },
            deleteExpense(index) {
                this.expenses.splice(index, 1)
            }
        },
        computed: {
            sum() {
                return this.expenses.reduce((total, expense) => {
                    let currency = this.$store.state.settings.currency
                    let rate = this.currencies[expense.currency] / this.currencies[currency]
                    let m = parseFloat(expense.money)
                    let money = currency === expense.currency ? (total + m) : (total + m * rate)
                    return Math.round(money * 100) / 100
                }, 0)
            }
        },
        watch: {
            'expenses'(expenses) {
                this.saveRows()
            }
        }
    }
</script>