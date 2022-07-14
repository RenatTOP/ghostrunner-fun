<template lang="pug">
q-toolbar(class="text-primary")
    q-btn(flat, round, dense, icon="fa-brands fa-mendeley")
    q-toolbar-title Ghostrunner
</template>

<script setup></script>

<style lang="sass">
.q-toolbar
    background-color: $grey
    min-height: 100px !important
    max-height: 20vh 
    .q-toolbar__title
        font-family: 'Cyberwar Regular'
    .q-btn
        .fa-mendeley
            color: $red-one
</style>
