<template>
    <div class="container">
        <app-new-quoute></app-new-quoute>
        <app-quote-grid :quotes="quotes"></app-quote-grid>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';
    export default {
        data: function() {
            return {
                quotes: [
                 'jedan'
                ],
                maxQuotes: 10
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQupte: NewQuote,  
        }
    }
</script>

<style>
  
</style>
