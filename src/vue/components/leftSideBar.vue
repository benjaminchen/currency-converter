<template>
    <md-sidenav class="md-left" ref="leftSidenav">
        <md-toolbar class="md-large">
            <div class="md-toolbar-container">
                <h3 class="md-title">{{ $t("settings.settings") }}</h3>
            </div>
        </md-toolbar>

        <div class="setting">
            <form>
                <md-input-container>
                    <label>{{ $t("settings.currency") }}</label>
                    <md-select v-model="currency">
                        <md-option v-for="(currency, index) in currencies"
                        :key="index"
                        :value="currency">
                        {{ currency }}
                        </md-option>
                    </md-select>
                </md-input-container>
                <md-input-container>
                    <label>{{ $t("language.language") }}</label>
                    <md-select v-model="language">
                        <md-option v-for="(l, index) in languages"
                        :key="index"
                        :value="l">
                        {{ $t(`language.${l}`) }}
                        </md-option>
                    </md-select>
                </md-input-container>
            </form>
        </div>
    </md-sidenav>
</template>

<script>
    export default {
        mounted: function() {
            this.currency = this.$store.state.settings.currency
            this.currencies = this.$store.state.currencies.lists
            this.language = this.$store.state.settings.language
            this.languages = this.$store.state.languages.lists
        },
        data: () => {
            return {
                currencies: [],
                languages: [],
                currency: "",
                language: "",
            }
        },
        watch: {
            'currency'(currency) {
                this.$store.dispatch("settings/setCurrency", currency)
            },
            'language'(language) {
                this.$store.dispatch("settings/setLanguage", language)
                this.$i18n.locale = language
            }
        }
    }
</script>