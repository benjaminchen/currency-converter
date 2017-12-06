<template>
    <md-toolbar class="header-toolbar">
        <div class="md-toolbar-container">
            <md-button class="md-icon-button" @click="toggleLeftSidenav">
                <md-icon>menu</md-icon>
            </md-button>
            <h2 class="md-title" style="flex: 5;">{{ $t("app_name") }}</h2>
        </div>
        <div class="md-toolbar-container toolbar-btn">
            <md-layout>
                <md-button :class="{active: isHome}" @click="tabClick('/')">
                    <md-icon md-src="assets/images/icons/diary.svg"></md-icon>
                    {{ $t("toolbar.expense_record") }}
                </md-button>
            </md-layout>
            <md-layout>
                <md-button :class="{active: isExchange}" @click="tabClick('/exchange')">
                    <md-icon md-src="assets/images/icons/exchange_2.svg"></md-icon>
                    {{ $t("toolbar.exchange") }}
                </md-button>
            </md-layout>
        </div>
    </md-toolbar>
</template>

<script>
    export default {
        data: function() {
            let url = this.$route.path
            return {
                isHome: url == '/',
                isExchange: url == '/exchange',
            }
        },
        methods: {
            tabClick(url) {
                this.isHome = url == '/'
                this.isExchange = url == '/exchange'
                this.$router.push(url)
            },
            toggleLeftSidenav() {
                this.$root.$refs.leftSideBar.$refs.leftSidenav.toggle()
            }
        }
    }
</script>