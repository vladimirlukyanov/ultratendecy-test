<template>
    <div class="account">

        <NavBar/>
        <SubNavBar/>

        <div class="mansory">
            <div class="container">
                <div class="mansory-wrapper" id="macy-container">
                    <Trend v-for="trend in get_trends" :key="trend.title" :title="trend.title" :counter="trend.counter"
                           :image="trend.image" :following="trend.following" :followers="trend.followers"/>
                </div>
            </div>
        </div>

        <Footer/>

    </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator'
import { sampleSize } from 'lodash';


import Macy from 'macy/dist/macy';

import NavBar from "@/components/NavBar.vue";
import SubNavBar from "@/components/SubNavBar.vue";
import Footer from "@/components/Footer.vue";

import Trend from "@/components/Trend.vue";

type TrendsType = {
    title: string,
    counter: string,
    image: string,
    following: boolean,
    followers: Array<string>
}

const trends_items: Array<TrendsType> = [
    {
        title: 'Cooking',
        counter: '6.5M',
        image: 'cat1.jpg',
        following: true,
        followers: ['profile2.png', 'profile3.png', 'profile4.png']
    },
    {
        title: 'Nature',
        counter: '300k',
        image: 'cat2.jpg',
        following: true,
        followers: ['profile2.png', 'profile3.png', 'profile4.png']
    },
    {
        title: 'Travel',
        counter: '140k',
        image: 'cat3.jpg',
        following: false,
        followers: ['profile2.png', 'profile3.png']
    },
    {
        title: 'Climate',
        counter: '2M',
        image: 'cat4.jpg',
        following: false,
        followers: ['profile2.png', 'profile3.png', 'profile4.png']
    },
    {
        title: 'Music',
        counter: '80k',
        image: 'cat5.jpg',
        following: false,
        followers: ['profile2.png', 'profile3.png', 'profile4.png']
    },
    {
        title: 'Science',
        counter: '230k',
        image: 'cat6.jpg',
        following: false,
        followers: ['profile2.png', 'profile3.png', 'profile4.png']
    }
]

@Component({
    components: {
        NavBar,
        SubNavBar,
        Trend,
        Footer
    }
})


export default class Trends extends Vue {


    @Watch('$route.path')
    onChildChanged(val: string, oldVal: string): void {

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

        if (val !== '/portal' && val !== '/') {
            setTimeout(function () {
                new Macy({
                    container: '#macy-container',
                    trueOrder: false,
                    waitForImages: false,
                    margin: 24,
                    columns: 3,
                    breakAt: {
                        1200: 3,
                        940: 3,
                        520: 1,
                        400: 1
                    }
                });
            }, 1)

        }
    }

    macy = {}

    mounted(): void {


        setTimeout(function () {

            new Macy({
                container: '#macy-container',
                trueOrder: false,
                waitForImages: false,
                margin: 24,
                columns: 3,
                breakAt: {
                    1200: 3,
                    940: 3,
                    520: 1,
                    400: 1
                }
            });
        }, 1)

    }


    get get_trends(): Array<TrendsType> {

        if (this.$route.params.trends === 'for_you') {
            return sampleSize(trends_items, 3);
        }

        if (this.$route.params.trends === 'cooking') {
            return [trends_items[0]];
        }

        if (this.$route.params.trends === 'nature') {
            return [trends_items[1]];
        }

        if (this.$route.params.trends === 'science') {
            return [trends_items[5]];
        }

        if (this.$route.params.trends === 'travel') {
            return [trends_items[2]];
        }

        if (this.$route.params.trends === 'climate') {
            return [trends_items[3]];
        }

        if (this.$route.params.trends === 'music') {
            return [trends_items[5]];
        }

        if (this.$route.params.trends === 'people') {
            return [trends_items[1]];
        }

        return trends_items;
    }


}
</script>

<style lang="scss">
.mansory {
    background: #eeeef2;
    padding: 30px 0 60px 0;

    min-height: 400px;


    .mansory-wrapper {
        margin: 1em;
        column-count: 3;
        column-gap: 1em;

    }
}
</style>
