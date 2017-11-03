<template>
    <div>
        <md-card>
            <md-card-header>
                <md-card-header-text>
                    <div class="md-title">2017/10/20 日本--範例</div>
                </md-card-header-text>
                <md-menu md-size="4" md-direction="bottom left">
                    <md-button class="md-icon-button" md-menu-trigger>
                        <md-icon>more_vert</md-icon>
                    </md-button>

                    <md-menu-content>
                        <md-menu-item>
                            <span>Call</span>
                            <md-icon>phone</md-icon>
                        </md-menu-item>

                        <md-menu-item>
                            <span>Send a message</span>
                            <md-icon>message</md-icon>
                        </md-menu-item>
                    </md-menu-content>
                </md-menu>
            </md-card-header>
        </md-card>
        <md-button class="md-icon-button md-raised md-accent add-btn">
            <md-icon>add</md-icon>
        </md-button>
    </div>
</template>

<script>
    export default {
        components: {
        },
        data: function() {
            return {}
        },
        methods: {
        }
    }
</script>