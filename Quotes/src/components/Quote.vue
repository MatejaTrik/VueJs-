<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="pane panel-default">
            <div class="panel-body quote">
                <slot></slot>
            </div>
        </div>        
    </div>
</template>

<script>
</script>

<style>
    .panel-body {
        font-family: 'Arizonia', cursive;
        font-size: 24px;
        color: #a10000;
    }

    .quote {
        cursor: pointer;
    }

    .quote:hover {
        background-color: #ffe2e2
    }
</style>