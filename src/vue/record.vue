<template>
    <div>
        <card v-for="(row, index) in rows" :date="row.date" :title="row.title" :expenses="row.expenses" :currency="currency" :deleteRow="deleteRow" :saveRows="saveRows" key="index"></card>
        <md-dialog md-open-from="#fab" md-close-to="#fab" ref="add-dialog">
            <md-dialog-title>新增旅程紀錄</md-dialog-title>

            <md-dialog-content>
                <form>
                    <md-input-container>
                        <input type="date" v-model="newRow.date">
                    </md-input-container>
                    <md-input-container>
                        <label>標題</label>
                        <md-textarea v-model="newRow.title"></md-textarea>
                    </md-input-container>
                </form>
            </md-dialog-content>

            <md-dialog-actions>
                <md-button class="md-primary" @click="closeDialog('add-dialog')">取消</md-button>
                <md-button class="md-primary" @click="editOrAdd('add-dialog')">新增</md-button>
            </md-dialog-actions>
        </md-dialog>
        <md-button class="md-icon-button md-raised md-accent add-row-btn" @click="openDialog('add-dialog')">
            <md-icon>add</md-icon>
        </md-button>
    </div>
</template>

<script>
    import card from './components/spendingCard.vue'

    export default {
        mounted: function() {
            var rows = window.localStorage.getItem("TravelToolRows");
            if (rows) this.rows = JSON.parse(rows)
        },
        props: [
            'currency'
        ],
        components: {
            card
        },
        data: function() {
            return {
                newRow: {
                    date: "",
                    title: "",
                    expenses: []
                },
                editIndex: null,
                editRow: {
                    date: "",
                    title: "",
                    expenses: []
                },
                rows: [
                    {
                        date: "2017-10-20",
                        title: "日本花費範例",
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
            openDialog(ref, row = null, index = null) {
                if (row) {
                    this.editRow = row
                    this.editIndex = index
                }
                this.$refs[ref].open()
            },
            closeDialog(ref) {
                this.$refs[ref].close()
            },
            editOrAdd(ref, index = null) {
                var nullRow = {
                    date: "",
                    title: "",
                    expenses: []
                }
                index ? this.editRow = nullRow : this.rows.push(this.newRow)
                this.newRow = nullRow
                this.closeDialog(ref)
                this.rows.sort(function(a, b) {
                    return new Date(a.date) < new Date(b.date)
                })
            },
            deleteRow(e) {
                this.rows.splice(e, 1)
            },
            saveRows() {
                window.localStorage.setItem("TravelToolRows", JSON.stringify(this.rows))
            }
        },
        watch: {
            'rows'(rows) {
                this.saveRows()
            }
        }
    }
</script>