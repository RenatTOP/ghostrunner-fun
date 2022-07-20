<template lang="pug">
navbar.navbar
    q-toolbar
        q-btn(class="no-hover", flat, icon="fa-brands fa-mendeley")
        q-tabs(no-ripple, v-model="tab")
            q-tab(name="Home" label="Ghostrunner")
            q-tab(name="Collections" label="Collection")
            q-tab(name="Enemies" label="Enemies")
            q-tab(name="Achievements" label="Achievements")
    .q-toolbar-after
    .q-toolbar-after-light
    
    .q-toolbar-elemet-one
    .q-toolbar-elemet-two

    .q-toolbar-element-light-one
    .q-toolbar-element-light-two
</template>

<script setup></script>

<style lang="sass" scope>
.navbar
    +adaptive-height(140, 50)
    .q-toolbar-element-light-one, .q-toolbar-element-light-two,
    .q-toolbar-elemet-one, .q-toolbar-elemet-two,
    .q-toolbar-after-light, .q-toolbar-after,
    .q-toolbar
        position: absolute
        top: 0
        left: 0
        width: 100%
    .q-toolbar
        background: linear-gradient($grey1, $grey2, $grey3, $grey4)
        clip-path: polygon(0% 0.3%, 12.28% 0.3%, 12.9% 5%, 20% 5%, 21.08% 0.3%, 29.25% 0.3%, 30% 5%, 51% 5%, 53% 20%, 53.53% 20%, 54.6% 5%, 100% 5%, 93% 75%, 62% 75%, 60.94% 70%, 26.77% 70%, 25.77% 83%, 13% 83%, 9.75% 100%, 0% 100%)
        font-family: 'Cyberwar Regular'
        +adaptive-height(140, 50)
        z-index: 4
        .q-btn
            .fa-mendeley
                color: $red-two
                +adaptive-font(45, 20)

    .q-toolbar-after
        clip-path: polygon(0% 10%, 100.4% 10%, 93% 78%, 62% 78%, 60.94% 72%, 26.97% 72%, 25.87% 85%, 13% 85%, 9.72% 102%, 0% 102%)
        background: $rainbow-bg
        animation: rainbow 10s ease infinite
        background-size: 250% 250%
        +adaptive-height(155, 55)
        z-index: 2
    .q-toolbar-after-light
        clip-path: polygon(0% 0%, 12.28% 0%, 12.9% 4%, 20% 4%, 21.08% 0%, 29.25% 0%, 30% 4%, 51% 4%, 53% 17.8%, 53.53% 17.8%, 54.6% 4%, 100.1% 4%, 93% 67.6%, 62% 67.6%, 60.94% 63%, 26.8% 63%, 25.8% 74.8%, 13% 74.8%, 9.78% 90%, 0% 90%)
        background-color: $light
        +adaptive-height(156, 56)
        z-index: 3

    .q-toolbar-elemet-one
        clip-path: polygon(0% 0.3%, 12.28% 0.3%, 12.9% 5%, 20% 5%, 21.08% 0.3%, 29.25% 0.3%, 30% 5%, 51% 5%, 53% 20%, 52% 30%, 27% 30%, 26% 40%, 11% 40%, 10% 30%, 1.5% 30%, 0.6% 48%, 0% 48%)
        background-color: $dark
        +adaptive-height(140, 50)
        z-index: 5
    
    .q-toolbar-elemet-two
        clip-path: polygon(0% 52%, 0.6% 52%, 1.5% 68%, 20% 68%, 21.5% 83%, 13% 83%, 9.75% 99.8%, 0% 99.8%)
        background-color: $dark
        +adaptive-height(140, 50)
        z-index: 5
    
    .q-toolbar-element-light-one
        clip-path: polygon(53% 20.6%, 52.02% 30.5%, 27% 30.5%, 26% 40.5%, 11% 40.5%, 10% 30.5%, 1.5% 30.5%, 0.62% 48.5%, 0% 48.5%, 0% 20%)
        background-color: $light
        +adaptive-height(140, 50)
        z-index: 4

    .q-toolbar-element-light-two
        clip-path: polygon(0% 51.6%, 0.62% 51.6%, 1.52% 67.6%, 20% 67.6%, 21.56% 83%, 0% 83%)
        background-color: $light
        +adaptive-height(140, 50)
        z-index: 4

    .q-tabs
        margin: 0 auto
        text-align: center
        max-width: 80vw
        .q-tab
            color: $black
            &__label
                +adaptive-font(25, 15)
            .q-focus-helper, .q-ripple
                display: none !important
    .q-tabs__arrow
        display: none !important
    .no-hover 
        .q-focus-helper, .q-ripple
            display: none !important

@keyframes rainbow
    0%
        background-position:0% 82%
    50%
        background-position:100% 19%
    100%
        background-position:0% 82%

</style>
