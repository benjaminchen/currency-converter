<template>
    <md-toolbar class="header-toolbar">
        <div class="md-toolbar-container">
            <md-button class="md-icon-button" @click="toggleLeftSidenav">
                <md-icon>menu</md-icon>
            </md-button>
            <h2 class="md-title" style="flex: 5;">背包幫</h2>
        </div>
        <div class="md-toolbar-container toolbar-btn">
            <md-layout>
                <md-button :class="{active: isHome}" @click="tabClick('/')">
                    <md-icon md-src="assets/images/icons/diary.svg"></md-icon>
                    支出紀錄
                </md-button>
            </md-layout>
            <md-layout>
                <md-button :class="{active: isExchange}" @click="tabClick('/exchange')">
                    <md-icon md-src="assets/images/icons/exchange_2.svg"></md-icon>
                    匯率換算
                </md-button>
            </md-layout>
        </div>
    </md-toolbar>
</template>

<script>
    export default {
        data: function() {
            return {
                isHome: true,
                isExchange: false,
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