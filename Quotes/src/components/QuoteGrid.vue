<template>
    <div class="row">
         <app-quote :key="quote" v-for="quote in quotes">{{ Quote }}</app-quote>
    </div>
</template>

<script>
    import Quote from './Quote.vue';

    export default {
        props: ['quotes'],
        components: {
            appQuote: Quote
        }
    }
</script>

<style>

</style>