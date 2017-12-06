<template>
    <div>
        <card v-for="(row, index) in rows" :date="row.date" :title="row.title" :expenses="row.expenses" :deleteRow="deleteRow" :saveRows="saveRows" key="index"></card>
        <md-dialog md-open-from="#fab" md-close-to="#fab" ref="add-dialog">
            <md-dialog-title>{{ $t("record.add_trip") }}</md-dialog-title>

            <md-dialog-content>
                <form>
                    <md-input-container>
                        <input type="date" v-model="newRow.date">
                    </md-input-container>
                    <md-input-container>
                        <label>{{ $t("record.title") }}</label>
                        <md-textarea v-model="newRow.title"></md-textarea>
                    </md-input-container>
                </form>
            </md-dialog-content>

            <md-dialog-actions>
                <md-button class="md-primary" @click="closeDialog('add-dialog')">{{ $t("record.cancel") }}</md-button>
                <md-button class="md-primary" @click="editOrAdd('add-dialog')">{{ $t("record.add") }}</md-button>
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
        created: function() {
            this.newRow = Object.assign({}, this.nullRow)
            this.editRow = Object.assign({}, this.nullRow)
        },
        mounted: function() {
            var rows = window.localStorage.getItem("TravelToolRows")
            if (rows) this.rows = JSON.parse(rows)
        },
        components: {
            card
        },
        data: function() {
            return {
                nullRow: {
                    date: "",
                    title: "",
                    expenses: []
                },
                newRow: null,
                editIndex: null,
                editRow: null,
                rows: [
                    {
                        date: "2017-10-20",
                        title: "Japan example",
                        expenses: [
                            {
                                title: "air ticket",
                                currency: "JPY",
                                money: "27988"
                            },
                            {
                                title: "hotel",
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
                var nullRow = Object.assign({}, this.nullRow)
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