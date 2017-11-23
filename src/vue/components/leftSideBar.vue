<template>
    <md-sidenav class="md-left" ref="leftSidenav">
        <md-toolbar class="md-large">
            <div class="md-toolbar-container">
                <h3 class="md-title">設定</h3>
            </div>
        </md-toolbar>

        <div class="setting">
            <form>
                <md-input-container>
                    <label for="users=">幣別</label>
                    <md-select v-model="currency">
                        <md-option v-for="(currency, index) in currencies"
                        :key="index"
                        :value="currency">
                        {{ currency }}
                        </md-option>
                    </md-select>
                </md-input-container>
            </form>
        </div>
    </md-sidenav>
</template>

<script>
    export default {
        data: () => ({
                currencies: [
                    'NTD',
                    'JPY'
                ],
                currency: 'NTD'
        }),
    }
</script>