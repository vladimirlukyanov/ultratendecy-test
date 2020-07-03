<template>
    <div class="item">
        <img :src="get_image(image)" alt="" class="img"/>
        <div class="inner">

            <div class="row no-gutters">
                <div class="col-6">
                    <div class="title">{{title}}</div>
                    <div class="followers-counter">{{counter}} Followers</div>
                </div>
                <div class="col-6">
                    <div class="followers-profiles">
                        <ul class="list-inline">

                        </ul>
                    </div>
                </div>
            </div>

            <router-link to="/portal" :class="[following ? 'btn following' : 'btn']">{{following ? 'Following': 'Follow'}}</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';


@Component
export default class Trend extends Vue {
    @Prop({ required: true }) title!: string;
    @Prop({ required: true }) image!: string;
    @Prop({ required: true }) counter!: string;
    @Prop({ required: true }) following!: boolean;
    @Prop({ type: Array, required: true }) followers!: string[];

    get_image(img: string) : string {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return require('@/assets/images/' + img);
    }
}

</script>

<style lang="scss">
@import "~bootstrap/scss/_functions.scss";
@import "~bootstrap/scss/_variables.scss";
@import "~bootstrap/scss/mixins/_breakpoints.scss";

.item {
    min-height: 300px;
    background: #fff;
    margin: 0 0 20px 0;
    max-height: 2000px;
    border-radius: 5px;
    display: inline-block;

    .img {
        width: 100%;
    }

    .inner {
        padding: 15px 30px;

        .title {
            color: #3C3E46;
            font-family: "Eina 03", sans-serif;
            font-size: 26px;
            font-weight: bold;
            letter-spacing: -0.65px;
            line-height: 34px;
        }

        .followers-counter {
            color: #3C3E46;
            font-family: "Maison Neue", sans-serif;
            font-size: 16px;
            font-weight: 300;
            letter-spacing: 0;
            line-height: 21px;
        }

        .followers-profiles {
            text-align: right;

            .list-inline {
                width: auto;
                display: inline-block;

                .list-inline-item {
                    margin: 0;
                    padding: 0;

                    &:nth-child(1) {
                        position: relative;
                        z-index: 12;
                    }

                    &:nth-child(2) {
                        position: relative;
                        z-index: 11;
                        margin: 0 0 0 -15px;
                    }

                    &:nth-child(3) {
                        position: relative;
                        z-index: 10;
                        margin: 0 0 0 -15px;
                    }

                    .img {
                        border-radius: 50%;
                        border: 3px solid #fff;
                        max-width: 43px;
                    }
                }
            }
        }

        .btn {
            font-family: "Maison Neue", sans-serif;
            font-size: 18px;
            font-weight: 500;
            letter-spacing: 0;
            line-height: 24px;
            border-radius: 30px;
            margin: 21px 0 17px 0;
            padding: 8px 36px;
            transition: none;
            background: #6648cd;
            border: 2px solid #6648cd;
            color: #fff;

            &:hover {
                color: #6648cd;
                background: #f7f6fc;
                border: 2px solid #6648cd;
            }

            &.following {
                color: #6648CD;
                font-family: "Maison Neue", sans-serif;
                font-size: 18px;
                font-weight: 500;
                letter-spacing: 0;
                line-height: 24px;
                background: #f7f6fc;
                border: 2px solid #6648cd;
                border-radius: 30px;
                margin: 21px 0 17px 0;
                padding: 8px 36px;
                transition: none;

                &:hover {
                    background: #6648cd;
                    border: 2px solid #6648cd;
                    color: #fff;
                }
            }
        }
    }
}
</style>
