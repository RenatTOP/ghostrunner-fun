<template lang="pug">
section
.section-element-left-one
.section-element-left-two
.section-element-left-three
.section-element-right-one
.section-element-right-two
.section-element-right-three

.section-element-left-one-light
.section-element-left-two-light
.section-element-left-three-light
.section-element-right-one-light
.section-element-right-two-light
.section-element-right-three-light
</template>

<script setup></script>

<style lang="sass" scope>
section
    min-height: 100vh
    max-height: 100vh
    height: 100%
    width: 100vw
    background-image: url('@/assets/images/ghostrunner-bg2.jpg')
    z-index: 0
.section-element-left-one,
.section-element-left-two,
.section-element-left-three,
.section-element-right-one,
.section-element-right-two,
.section-element-right-three,
.section-element-left-one-light,
.section-element-left-two-light,
.section-element-left-three-light,
.section-element-right-one-light,
.section-element-right-two-light,
.section-element-right-three-light
    position: absolute
    top: 0
    left: 0
    min-height: 100vh
    max-height: 100vh
    height: 100%
    width: 100vw
.section-element-left-one,
.section-element-left-two,
.section-element-left-three,
.section-element-right-one,
.section-element-right-two,
.section-element-right-three
    background-color: $dark
    z-index: 2


.section-element-left-one-light,
.section-element-left-two-light,
.section-element-left-three-light,
.section-element-right-one-light,
.section-element-right-two-light,
.section-element-right-three-light
    background: $rainbow-bg
    background-size: 250% 250%
    animation: rainbow 10s ease infinite
    z-index: 1
.section-element-left-one
    clip-path: polygon(0.02% 15.3%, 2.5% 15.3%, 2.5% 79.9%, 1.4% 77%, 1.4% 40%, 0.02% 37%)
.section-element-left-two
    clip-path: polygon(0.02% 37.6%, 1.1% 40%, 1.1% 77.1%, 2.5% 80.7%, 2.5% 89%, 3% 90%, 11% 90%, 11.5% 91.5%, 21.5% 91.5%, 22% 90%, 33% 90%, 35.5% 96%, 46% 96%, 47.5% 99%, 80% 99%, 79% 99.95%, 33% 99.95%, 32% 97.5%, 10% 97.5%, 10% 99.95%, 3% 99.95%, 0.02% 93%)
.section-element-left-three
    clip-path: polygon(10.2% 99.95%, 10.2% 97.9%, 31.9% 97.9%, 32.7% 99.95%)
.section-element-right-one
    clip-path: polygon(52% 96%, 92% 96%, 98.9% 85%, 98.9% 65%, 99.98% 62%, 99.98% 86.2%, 92.5% 98%, 53% 98%)
.section-element-right-two
    clip-path: polygon(98.63% 84.7%, 98.63% 64.9%, 99.98% 61.2%, 99.98% 40%, 98.63% 37%, 98.63% 8%, 98.89% 7.55%, 98.89% 36.85%, 99.98% 39.3%, 99.98% 2.7%, 97.3% 6.5%, 97.3% 87%)
.section-element-right-three
    clip-path: polygon(79.5% 99.95%, 99.98% 99.95%, 99.98% 87.5%, 92.8% 99%, 80.5% 99%)

.section-element-left-one-light
    clip-path: polygon(0% 15.25%, 2.52% 15.25%, 2.52% 80.05%, 1.38% 77.05%, 1.38% 40.05%, 0% 37.05%)
.section-element-left-two-light
    clip-path: polygon(0% 37.55%, 1.12% 39.95%, 1.12% 77.05%, 2.52% 80.65%, 2.52% 88.95%, 3.02% 89.95%, 11.02% 89.95%, 11.52% 91.45%, 21.48% 91.45%, 21.98% 89.95%, 33.02% 89.95%, 35.52% 95.95%, 46.02% 95.95%, 47.52% 98.95%, 80.1% 98.95%, 79.04% 100%, 32.95% 100%, 31.95% 97.55%, 10.02% 97.55%, 10.02% 100%, 2.98% 100%, 0% 93.1%)
.section-element-left-three-light
    clip-path: polygon(10.18% 100%, 10.18% 97.85%, 31.92% 97.85%, 32.75% 100%)
.section-element-right-one-light
    clip-path: polygon(51.92% 95.95%, 91.98% 95.95%, 98.865% 84.95%, 98.865% 64.95%, 100% 61.85%, 100% 86.25%, 92.52% 98.05%, 52.98% 98.05%)
.section-element-right-two-light
    clip-path: polygon(98.67% 84.75%, 98.67% 64.95%, 100% 61.25%, 100% 39.95%, 98.67% 36.95%, 98.67% 8%, 98.85% 7.7%, 98.85% 36.9%, 100% 39.45%, 100% 2.6%, 97.26% 6.5%, 97.26% 87.15%)
.section-element-right-three-light
    clip-path: polygon(79.4% 100%, 100% 100%, 100% 87.4%, 92.78% 98.95%, 80.48% 98.95%)
</style>