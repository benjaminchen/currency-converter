<template>
    <div class="container">
        <toolbar></toolbar>
        <calculator></calculator>
    </div>
</template>

<script>
    import toolbar from './components/toolbar.vue'
    import calculator from './components/calculator.vue'

    export default {
        components: {
            toolbar,
            calculator,
        },
        methods: {
        }
    }
</script>