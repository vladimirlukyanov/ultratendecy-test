<template>
    <div id="app">
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>

<script lang="ts">
import {Vue} from 'vue-property-decorator';

export default class App extends Vue {
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';

@font-face {
    font-family: 'Maison Neue';
    src: url('~@/assets/fonts/Maison Neue/MaisonNeue-Book.eot');
    src: url('~@/assets/fonts/Maison Neue/MaisonNeue-Book.eot?#iefix') format("embedded-opentype"), url('~@/assets/fonts/Maison Neue/MaisonNeue-Book.woff2') format("woff2"), url('~@/assets/fonts/Maison Neue/MaisonNeue-Book.woff') format("woff"), url('~@/assets/fonts/Maison Neue/MaisonNeue-Book.ttf') format("truetype"), url('~@/assets/fonts/Maison Neue/MaisonNeue-Book.svg#MaisonNeue-Book') format("svg");
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Maison Neue';
    src: url('~@/assets/fonts/Maison Neue/MaisonNeue-LightItalic.eot');
    src: url('~@/assets/fonts/Maison Neue/MaisonNeue-LightItalic.eot?#iefix') format("embedded-opentype"), url('~@/assets/fonts/Maison Neue/MaisonNeue-LightItalic.woff2') format("woff2"), url('~@/assets/fonts/Maison Neue/MaisonNeue-LightItalic.woff') format("woff"), url('~@/assets/fonts/Maison Neue/MaisonNeue-LightItalic.ttf') format("truetype"), url('~@/assets/fonts/Maison Neue/MaisonNeue-LightItalic.svg#MaisonNeue-LightItalic') format("svg");
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Maison Neue';
    src: url('~@/assets/fonts/Maison Neue/MaisonNeue-Medium.eot');
    src: url('~@/assets/fonts/Maison Neue/MaisonNeue-Medium.eot?#iefix') format("embedded-opentype"), url('~@/assets/fonts/Maison Neue/MaisonNeue-Medium.woff2') format("woff2"), url('~@/assets/fonts/Maison Neue/MaisonNeue-Medium.woff') format("woff"), url('~@/assets/fonts/Maison Neue/MaisonNeue-Medium.ttf') format("truetype"), url('~@/assets/fonts/Maison Neue/MaisonNeue-Medium.svg#MaisonNeue-Medium') format("svg");
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Maison Neue';
    src: url('~@/assets/fonts/Maison Neue/MaisonNeue-MediumItalic.eot');
    src: url('~@/assets/fonts/Maison Neue/MaisonNeue-MediumItalic.eot?#iefix') format("embedded-opentype"), url('~@/assets/fonts/Maison Neue/MaisonNeue-MediumItalic.woff2') format("woff2"), url('~@/assets/fonts/Maison Neue/MaisonNeue-MediumItalic.woff') format("woff"), url('~@/assets/fonts/Maison Neue/MaisonNeue-MediumItalic.ttf') format("truetype"), url('~@/assets/fonts/Maison Neue/MaisonNeue-MediumItalic.svg#MaisonNeue-MediumItalic') format("svg");
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: 'Maison Neue';
    src: url('~@/assets/fonts/Maison Neue/MaisonNeue-MonoItalic.eot');
    src: url('~@/assets/fonts/Maison Neue/MaisonNeue-MonoItalic.eot?#iefix') format("embedded-opentype"), url('~@/assets/fonts/Maison Neue/MaisonNeue-MonoItalic.woff2') format("woff2"), url('~@/assets/fonts/Maison Neue/MaisonNeue-MonoItalic.woff') format("woff"), url('~@/assets/fonts/Maison Neue/MaisonNeue-MonoItalic.ttf') format("truetype"), url('~@/assets/fonts/Maison Neue/MaisonNeue-MonoItalic.svg#MaisonNeue-MonoItalic') format("svg");
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Maison Neue';
    src: url('~@/assets/fonts/Maison Neue/MaisonNeue-BookItalic.eot');
    src: url('~@/assets/fonts/Maison Neue/MaisonNeue-BookItalic.eot?#iefix') format("embedded-opentype"), url('~@/assets/fonts/Maison Neue/MaisonNeue-BookItalic.woff2') format("woff2"), url('~@/assets/fonts/Maison Neue/MaisonNeue-BookItalic.woff') format("woff"), url('~@/assets/fonts/Maison Neue/MaisonNeue-BookItalic.ttf') format("truetype"), url('~@/assets/fonts/Maison Neue/MaisonNeue-BookItalic.svg#MaisonNeue-BookItalic') format("svg");
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Maison Neue';
    src: url('~@/assets/fonts/Maison Neue/MaisonNeue-Demi.eot');
    src: url('~@/assets/fonts/Maison Neue/MaisonNeue-Demi.eot?#iefix') format("embedded-opentype"), url('~@/assets/fonts/Maison Neue/MaisonNeue-Demi.woff2') format("woff2"), url('~@/assets/fonts/Maison Neue/MaisonNeue-Demi.woff') format("woff"), url('~@/assets/fonts/Maison Neue/MaisonNeue-Demi.ttf') format("truetype"), url('~@/assets/fonts/Maison Neue/MaisonNeue-Demi.svg#MaisonNeue-Demi') format("svg");
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Maison Neue';
    src: url('~@/assets/fonts/Maison Neue/MaisonNeue-Bold.eot');
    src: url('~@/assets/fonts/Maison Neue/MaisonNeue-Bold.eot?#iefix') format("embedded-opentype"), url('~@/assets/fonts/Maison Neue/MaisonNeue-Bold.woff2') format("woff2"), url('~@/assets/fonts/Maison Neue/MaisonNeue-Bold.woff') format("woff"), url('~@/assets/fonts/Maison Neue/MaisonNeue-Bold.ttf') format("truetype"), url('~@/assets/fonts/Maison Neue/MaisonNeue-Bold.svg#MaisonNeue-Bold') format("svg");
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Maison Neue';
    src: url('~@/assets/fonts/Maison Neue/MaisonNeue-Mono.eot');
    src: url('~@/assets/fonts/Maison Neue/MaisonNeue-Mono.eot?#iefix') format("embedded-opentype"), url('~@/assets/fonts/Maison Neue/MaisonNeue-Mono.woff2') format("woff2"), url('~@/assets/fonts/Maison Neue/MaisonNeue-Mono.woff') format("woff"), url('~@/assets/fonts/Maison Neue/MaisonNeue-Mono.ttf') format("truetype"), url('~@/assets/fonts/Maison Neue/MaisonNeue-Mono.svg#MaisonNeue-Mono') format("svg");
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Maison Neue';
    src: url('~@/assets/fonts/Maison Neue/MaisonNeue-BoldItalic.eot');
    src: url('~@/assets/fonts/Maison Neue/MaisonNeue-BoldItalic.eot?#iefix') format("embedded-opentype"), url('~@/assets/fonts/Maison Neue/MaisonNeue-BoldItalic.woff2') format("woff2"), url('~@/assets/fonts/Maison Neue/MaisonNeue-BoldItalic.woff') format("woff"), url('~@/assets/fonts/Maison Neue/MaisonNeue-BoldItalic.ttf') format("truetype"), url('~@/assets/fonts/Maison Neue/MaisonNeue-BoldItalic.svg#MaisonNeue-BoldItalic') format("svg");
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Maison Neue';
    src: url('~@/assets/fonts/Maison Neue/MaisonNeue-DemiItalic.eot');
    src: url('~@/assets/fonts/Maison Neue/MaisonNeue-DemiItalic.eot?#iefix') format("embedded-opentype"), url('~@/assets/fonts/Maison Neue/MaisonNeue-DemiItalic.woff2') format("woff2"), url('~@/assets/fonts/Maison Neue/MaisonNeue-DemiItalic.woff') format("woff"), url('~@/assets/fonts/Maison Neue/MaisonNeue-DemiItalic.ttf') format("truetype"), url('~@/assets/fonts/Maison Neue/MaisonNeue-DemiItalic.svg#MaisonNeue-DemiItalic') format("svg");
    font-weight: 600;
    font-style: italic;
}

@font-face {
    font-family: 'Maison Neue';
    src: url('~@/assets/fonts/Maison Neue/MaisonNeue-Light.eot');
    src: url('~@/assets/fonts/Maison Neue/MaisonNeue-Light.eot?#iefix') format("embedded-opentype"), url('~@/assets/fonts/Maison Neue/MaisonNeue-Light.woff2') format("woff2"), url('~@/assets/fonts/Maison Neue/MaisonNeue-Light.woff') format("woff"), url('~@/assets/fonts/Maison Neue/MaisonNeue-Light.ttf') format("truetype"), url('~@/assets/fonts/Maison Neue/MaisonNeue-Light.svg#MaisonNeue-Light') format("svg");
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: "Eina 03";
    src: url("~@/assets/fonts/Eina 03/eina-light.eot");
    src: url("~@/assets/fonts/Eina 03/eina-light.eot?#iefix") format("embedded-opentype"), url("~@/assets/fonts/Eina 03/eina-light.woff") format("woff"), url("~@/assets/fonts/Eina 03/eina-light.ttf") format("truetype");
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: "Eina 03";
    src: url("~@/assets/fonts/Eina 03/eina-bold.eot");
    src: url("~@/assets/fonts/Eina 03/eina-bold.eot?#iefix") format("embedded-opentype"), url("~@/assets/fonts/Eina 03/eina-bold.woff") format("woff"), url("~@/assets/fonts/Eina 03/eina-bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: "Eina 03";
    src: url("~@/assets/fonts/Eina 03/eina-semibold.eot");
    src: url("~@/assets/fonts/Eina 03/eina-semibold.eot?#iefix") format("embedded-opentype"), url("~@/assets/fonts/Eina 03/eina-semibold.woff") format("woff"), url("~@/assets/fonts/Eina 03/eina-semibold.ttf") format("truetype");
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: "Eina 03";
    src: url("~@/assets/fonts/Eina 03/eina-regular.eot");
    src: url("~@/assets/fonts/Eina 03/eina-regular.eot?#iefix") format("embedded-opentype"), url("~@/assets/fonts/Eina 03/eina-regular.woff") format("woff"), url("~@/assets/fonts/Eina 03/eina-regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
}

</style>
