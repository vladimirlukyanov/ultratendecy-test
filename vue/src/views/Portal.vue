<template>
    <div class="account">

        <NavBar/>
        <SubNavBar/>

        <div class="contents">
            <div class="white-bg">

                <Hero :title="hero_info.title" :source="hero_info.source" :time="hero_info.time" :tag="hero_info.tag"/>
                <PageContent/>
                <Comments/>

            </div>
        </div>

        <Footer/>

    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

import NavBar from "@/components/NavBar.vue";
import SubNavBar from "@/components/SubNavBar.vue";
import Hero from "@/components/Hero.vue";
import PageContent from "@/components/PageContent.vue";
import Comments from "@/components/Comments.vue";
import Footer from "@/components/Footer.vue";

@Component({
    components: {
        NavBar,
        SubNavBar,
        Hero,
        PageContent,
        Comments,
        Footer
    }
})

export default class Portal extends Vue {
    hero_info = {
        title: 'Fresh wave of climate strikes takes place around the world',
        source: 'The Guardian',
        time: 'Today',
        tag: 'NATURE'
    }
}
</script>

<style lang="scss">

.account {

    .contents {
        .white-bg {
            background: #fff;
        }
    }

    .footer .social {

        @media (min-width: 1200px) {
            left: 56px;
        }
    }

}
</style>
