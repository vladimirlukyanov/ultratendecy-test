<template>
    <div>
        <div class="section1">
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col-12 col-md-10">
                        <div class="text">
                            According to the National Oceanic and Atmospheric Administration, Ted, Scambos,
                            NSIDClead
                            scentist, puts the potentially record low maximum sea ice extent tihs year down
                            to low
                            ice
                            extent in the Pacific and a late drop in ice extent in the Barents Sea.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section2">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 left">

                    </div>
                    <div class="col-md-6 right">
                        <div class="big-quote">
                            <div class="quote">
                                <div class="text">Over the span of the satellite record, Arctic sea ice
                                    has been
                                    declining significantly, while sea ice in the Antarctichas increased
                                    very
                                    slightly.
                                </div>
                                <div class="signature">-NOAA</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section3">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 left">
                        <div class="intro">
                            <h2 class="title">So what does the new record for the lowest level of winter
                                ice
                                actually
                                mean?</h2>
                            <p class="desc">
                                The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                                every
                                summer,
                                and that process will continue whatever happens with climate change. Even if
                                the
                                Arctic
                                continues to be one of the fastest-warming regions of the world, it will
                                always be
                                plunged into bitterly cold polar dark every winter. And year-by-year, for
                                all kinds
                                of
                                natural reasons, there’s huge variety of the state of the ice.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 right">

                    </div>
                </div>
            </div>
        </div>

        <div class="section4">
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col-12 col-md-10">
                        <div class="text">
                            For a start, it does not automatically follow that a record amount of ice will
                            melt this
                            summer. More important for determining the size of the annual thaw is the state
                            of the
                            weather as the midnight sun approaches and temperatures rise. But over the more
                            than 30
                            years of satellite records, scientists have observed a clear pattern of decline,
                            decade-by-decade.
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="section5">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="play-btn-wrapper">
                            <router-link to="/" class="play-btn"><span class="play icon"></span></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';


@Component
export default class PageContent extends Vue {
}

</script>

<style lang="scss">
@import "~bootstrap/scss/_functions.scss";
@import "~bootstrap/scss/_variables.scss";
@import "~bootstrap/scss/mixins/_breakpoints.scss";


.section1 .text {
    padding: 40px 0;
    color: #3C3E46;
    font-family: "Maison Neue", sans-serif;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 40px;

    @include media-breakpoint-up(md) {
        padding: 80px 0;
        font-size: 20px;
        line-height: 45px;
    }

}

.section2 {
    background: none;

    @include media-breakpoint-up(md) {
        background: url('~@/assets/images/section2_bg.jpg') no-repeat left (center / contain);
        background-size: 50%;
        background-position-x: left;
    }

    .left {
        background: url('~@/assets/images/section2_bg.jpg') no-repeat center (center / cover);
        min-height: 500px;

        @include media-breakpoint-up(md) {
            background: none;
            min-height: auto;
        }
    }

    .big-quote {
        margin: 40px 0 0 0;
        padding: 50px 20px;

        @include media-breakpoint-up(md) {
            padding: 155px 105px 121px 97px;
            margin: 0;
        }

        .quote {
            color: #6648CD;
            font-family: "Maison Neue", sans-serif;
            font-size: 20px;
            font-weight: 500;
            letter-spacing: 0;
            line-height: 45px;
            font-style: italic;

            @include media-breakpoint-up(md) {
                font-size: 20px;
            }
        }

        .text {
            margin: 0 0 45px 0;
            position: relative;

            &:before {
                content: '„';
                color: #6648CD;
                font-family: "Maison Neue", sans-serif;
                font-size: 100px;
                font-style: italic;
                font-weight: 300;
                letter-spacing: 0;
                line-height: 133px;
                position: absolute;
                top: -88px;
                left: -11px;
                transform: rotate(180deg);
            }
        }

        .quote .signature {
        }
    }
}

.section3 {
    background: none;

    @include media-breakpoint-up(md) {
        background: url('~@/assets/images/section3_bg.jpg') no-repeat left (center / contain);
        background-size: 50%;
        background-position-x: 100%;
    }

    .intro {
        padding: 0 0 50px 0;

        @include media-breakpoint-up(sm) {
            padding: 50px 0 50px 0;
        }

        @include media-breakpoint-up(md) {
            padding: 89px 84px 70px 0;
        }

        .title {
            color: #3C3E46;
            font-family: "Eina 03", sans-serif;
            font-size: 24px;
            font-weight: bold;
            letter-spacing: -0.6px;
            line-height: 40px;
        }

        .desc {
            color: #3C3E46;
            font-family: "Maison Neue", sans-serif;
            font-size: 18px;
            font-weight: 300;
            letter-spacing: 0;
            line-height: 38px;

            @include media-breakpoint-up(md) {
                font-size: 20px;
                line-height: 45px;
            }
        }
    }

    .right {
        background: url('~@/assets/images/section3_bg.jpg') no-repeat center (center / cover);
        min-height: 500px;

        @include media-breakpoint-up(md) {
            background: none;
            min-height: auto;
        }

    }
}

.section4 .text {
    padding: 95px 0 107px 0;
    color: #3C3E46;
    font-family: "Maison Neue", sans-serif;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 45px;
}

.section5 {
    background: url('~@/assets/images/section5_bg.jpg') no-repeat center (center / cover);

    .play-btn-wrapper {
        min-height: 481px;
        display: flex;
        align-items: center;
        justify-content: center;

        .play-btn {
            height: 79px;
            width: 80px;
            background: #6648cd;
            display: inline-block;
            border-radius: 50%;
            vertical-align: middle;
            position: relative;
            cursor: pointer;

            &:hover {
                background: #5238a9;
            }

            .icon {
                background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgODQuMyA4Ni43IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4NC4zIDg2Ljc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0wLDQzYzAtOS4zLTAuMS0xOC43LDAtMjhDMC4yLDIuNywxMC4yLTMuNSwyMSwyLjFjMTguNSw5LjUsMzYuOSwxOS4yLDU1LjIsMjguOWM0LjgsMi42LDgsNi42LDguMSwxMi4zYzAsNi0zLjMsMTAtOC4zLDEyLjdDNTgsNjUuNSwzOS45LDc1LDIxLjcsODQuNEMxMC4yLDkwLjQsMC4yLDg0LjEsMCw3MUMwLDYxLjYsMCw1Mi4zLDAsNDN6Ii8+PC9zdmc+);
                background-repeat: no-repeat;
                background-position: center;
                display: inline-block;
                position: absolute;
                top: 1px;
                left: 7px;
                right: 0;
                bottom: 0;
                background-size: 25px 25px;
                pointer-events: none;
            }
        }
    }
}
</style>
