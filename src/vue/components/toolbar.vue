<template>
    <md-toolbar class="header-toolbar">
        <div class="md-toolbar-container">
            <md-button class="md-icon-button" @click="toggleLeftSidenav">
                <md-icon>menu</md-icon>
            </md-button>
            <h2 class="md-title" style="flex: 1;">{{ $route.name }}</h2>
        </div>
        <div class="md-toolbar-container toolbar-btn">
            <md-button class="md-icon-button" @click="tabClick('/')">
                <md-icon class="md-primary" md-src="assets/images/icons/wallet.svg"></md-icon>
            </md-button>
            <md-button class="md-icon-button" @click="tabClick('/exchange')">
                <md-icon class="md-primary" md-src="assets/images/icons/exchange_2.svg"></md-icon>
            </md-button>
        </div>
    </md-toolbar>
</template>

<script>
    export default {
        data: function() {
            return {}
        },
        methods: {
            tabClick(url) {
                this.$router.push(url)
            },
            toggleLeftSidenav() {
                this.$root.$refs.leftSideBar.$refs.leftSidenav.toggle()
            }
        }
    }
</script>