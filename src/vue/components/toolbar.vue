<template>
    <md-toolbar>
        <div class="md-toolbar-container">
            <md-button class="md-icon-button">
                <md-icon>menu</md-icon>
            </md-button>
            <h2 class="md-title" style="flex: 1;">{{ title }}</h2>
        </div>
        <div class="md-toolbar-container toolbar-btn">
            <md-button class="md-icon-button" @click="tabClick('貨幣換算')">
                <md-icon>autorenew</md-icon>
            </md-button>
            <md-button class="md-icon-button" @click="tabClick('匯率')">
                <md-icon>monetization_on</md-icon>
            </md-button>
            <md-button class="md-icon-button" @click="tabClick('貨幣換算名單')">
                <md-icon>format_list_numbered</md-icon>
            </md-button>
        </div>
    </md-toolbar>
</template>

<script>
    export default {
        data: function() {
            return {
                title: "貨幣換算"
            }
        },
        methods: {
            tabClick(title) {
                console.log(123, title)
                this.title = title
            }
        }
    }
</script>