<template>
    <div class="comment">
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-md-10">
                    <div class="inner">
                        <div class="row">
                            <div class="col-12">
                                <div class="content">
                                    <div class="profile">
                                        <router-link to="/portal">
                                            <img :src="get_image(img)"
                                                 class="img" alt=""/>
                                        </router-link>
                                    </div>
                                    <div class="name">{{title}}</div>
                                    <div class="text">{{desc}}</div>
                                    <div class="like-time-wrapper">
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <router-link to="/portal" :class="['like', liked ? 'liked' : '']">
                                                    <span class="icon"></span><span
                                                        class="counter">{{likes}}</span>
                                                </router-link>
                                            </li>
                                            <li class="list-inline-item">
                                                <span class="date">{{date_text}}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';


@Component
export default class Comment extends Vue {

    @Prop({required: true}) title!: string;
    @Prop({required: true}) desc!: string;
    @Prop({required: true}) likes!: number;
    @Prop({required: true}) liked!: boolean;
    @Prop({required: true}) date_text!: string;
    @Prop({required: true}) img!: string;

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

@import "~bootstrap/scss/_functions.scss";
@import "~bootstrap/scss/_variables.scss";
@import "~bootstrap/scss/mixins/_breakpoints.scss";


.comment {
    margin: 0 0 21px 0;

    .inner {
        background: #fff;
        padding: 22px 0;
        border-radius: 5px;

        .content .profile {
            position: absolute;
            top: -16px;
            left: 0;

            @include media-breakpoint-up(md) {
                position: absolute;
                top: -10px;
                left: -82px;
                z-index: 11;
            }

            .img {
                max-width: 60px;
                border-radius: 50%;
                display: inline-block;
            }
        }
    }

    .content {
        margin: 20px;
        position: relative;

        @include media-breakpoint-up(md) {
            margin: 10px 0 0 120px;
        }

        .name {
            color: #3C3E46;
            font-family: "Maison Neue", sans-serif;
            font-size: 18px;
            font-weight: 500;
            letter-spacing: 0;
            line-height: 24px;
            margin: 0 0 40px 70px;

            @include media-breakpoint-up(md) {
                margin: 0 0 10px 0;
            }
        }

        .text {
            color: #3C3E46;
            font-family: "Maison Neue", sans-serif;
            font-size: 18px;
            font-weight: 300;
            letter-spacing: 0;
            line-height: 32px;
            margin: 0 0 20px 0;

            @include media-breakpoint-up(md) {
                font-size: 20px;
            }
        }

        .like-time-wrapper {
            .list-inline {
                margin: 0;

                .list-inline-item {
                    margin: 0 25px 0 0;

                    &:last-child {
                        margin: 0;
                    }

                    .like {
                        position: relative;
                        padding: 0 0 0 33px;
                        min-width: 52px;
                        display: block;

                        .icon {
                            background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwIDUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6IzNDM0U0Njt9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjUsMzkuN2wtMC42LTAuNUMxMS41LDI4LjcsOCwyNSw4LDE5YzAtNSw0LTksOS05YzQuMSwwLDYuNCwyLjMsOCw0LjFjMS42LTEuOCwzLjktNC4xLDgtNC4xYzUsMCw5LDQsOSw5YzAsNi0zLjUsOS43LTE2LjQsMjAuMkwyNSwzOS43eiBNMTcsMTJjLTMuOSwwLTcsMy4xLTcsN2MwLDUuMSwzLjIsOC41LDE1LDE4LjFjMTEuOC05LjYsMTUtMTMsMTUtMTguMWMwLTMuOS0zLjEtNy03LTdjLTMuNSwwLTUuNCwyLjEtNi45LDMuOEwyNSwxNy4xbC0xLjEtMS4zQzIyLjQsMTQuMSwyMC41LDEyLDE3LDEyeiIvPjwvc3ZnPg==);
                            display: inline-block;
                            width: 35px;
                            height: 35px;
                            background-position: left;
                            background-size: contain;
                            background-repeat: no-repeat;
                            position: absolute;
                            top: -8px;
                            left: -5px;
                        }

                        &.liked .icon, &:hover .icon {
                            background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwIDUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6I0U0MEE1MTt9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjUsMzkuN2wtMC42LTAuNUMxMS41LDI4LjcsOCwyNSw4LDE5YzAtNSw0LTksOS05YzQuMSwwLDYuNCwyLjMsOCw0LjFjMS42LTEuOCwzLjktNC4xLDgtNC4xYzUsMCw5LDQsOSw5YzAsNi0zLjUsOS43LTE2LjQsMjAuMkwyNSwzOS43eiIvPjwvc3ZnPg==);
                        }

                        .counter {
                            color: #3C3E46;
                            font-family: "Maison Neue", sans-serif;
                            font-size: 18px;
                            font-weight: 500;
                            letter-spacing: 0;
                            line-height: 24px;
                        }

                        &:hover {
                            text-decoration: none;
                        }
                    }

                    .date {
                        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyMXB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCAyMSAyMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT40MkMwRDVCRi04NEYyLTQ0RkUtQTI0OC1GMzUwNDJDOUM5NDA8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+ICAgIDxnIGlkPSJXZWIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuODAwMDAwMDEyIj4gICAgICAgIDxnIGlkPSJTdG9yeSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ2Mi4wMDAwMDAsIC0zMzA1LjAwMDAwMCkiIGZpbGw9IiMzQzNFNDYiIGZpbGwtcnVsZT0ibm9uemVybyI+ICAgICAgICAgICAgPGcgaWQ9IkNvbW1lbnRzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMzAwMi4wMDAwMDApIj4gICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxMjEuMDAwMDAwKSI+ICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iMDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2MC4wMDAwMDAsIDU5LjAwMDAwMCkiPiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJEYXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMDIuMDAwMDAwLCAxMjEuMDAwMDAwKSI+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOS42Nzc1MjEzLDQuMzg3MzIyNzggQzE5LjE4Mjc1MDEsMy44OTI1NTE1NSAxOC41Mzc2MjA3LDMuNjM0NjcxODMgMTcuODQ5NjU0NywzLjYzNDY3MTgzIEwxNi4wNjQ2MjQ4LDMuNjM0NjcxODMgTDE2LjA2NDYyNDgsMi45ODk1NDI0NSBDMTYuMDY0NjI0OCwyLjQ1MTkzNDY0IDE1LjYxMjY5MDEsMiAxNS4wNzUwODIzLDIgTDE0LjM2NTI2OCwyIEMxMy44Mjc2NjAxLDIgMTMuMzc1NzI1NSwyLjQ1MTkzNDY0IDEzLjM3NTcyNTUsMi45ODk1NDI0NSBMMTMuMzc1NzI1NSwzLjYzNDY3MTgzIEw3LjA1NDUzMjc5LDMuNjM0NjcxODMgTDcuMDU0NTMyNzksMi45ODk1NDI0NSBDNy4wNTQ1MzI3OSwyLjQ1MTkzNDY0IDYuNjAyNTk4MTUsMiA2LjA2NDk5MDMzLDIgTDUuMzU1MTc1OTgsMiBDNC44MTc1NjgxNiwyIDQuMzY1NjMzNTMsMi40NTE5MzQ2NCA0LjM2NTYzMzUzLDIuOTg5NTQyNDUgTDQuMzY1NjMzNTMsMy42MzQ2NzE4MyBMMi42MDI0NTE5MiwzLjYzNDY3MTgzIEMxLjE2MTgzNTAxLDMuNjM0NjcxODMgMS43NzYzNTY4NGUtMTUsNC43OTU1NjA2NSAxLjc3NjM1Njg0ZS0xNSw2LjIzNzEyMzc2IEwxLjc3NjM1Njg0ZS0xNSwxOS4zOTc1NDgxIEMxLjc3NjM1Njg0ZS0xNSwyMC44MzgxNjUgMS4xNjA4ODg4MiwyMiAyLjYwMjQ1MTkyLDIyIEwxNC4zNjUwOTU5LDIyIEMxNS4wNzQ5MTAzLDIyIDE1Ljc4NDcyNDYsMjEuNjk5MjgzNyAxNi4yNzg2MzU3LDIxLjIwNDUxMjUgTDE5LjYxMTgwNDEsMTcuODcxMzQ0IEMyMC4xMjc1NjM2LDE3LjM1NTU4NDYgMjAuNDA3MjkxNywxNi42NjY3NTg0IDIwLjQwNzI5MTcsMTUuOTU3ODA0MiBMMjAuNDA3MjkxNyw2LjI1ODkyOTEzIEMyMC40Mjk5NzIzLDUuNTI3Mjg3OSAyMC4xNTAyNTA2LDQuODgyMTU4NTIgMTkuNjc3MzI3OCw0LjM4NzM4NzI5IEwxOS42Nzc1MjEzLDQuMzg3MzIyNzggWiBNMS42MTM4OTg2NywxOS4zNzU2MTM3IEwxLjYxMzg5ODY3LDguODYwNDM0ODYgTDE4LjgxNzM0ODgsOC44NjA0MzQ4NiBMMTguODE3MzQ4OCwxNS40NDExODQ2IEwxNS43MjExNTc5LDE1LjQ0MTE4NDYgQzE0LjcxMDYyNzIsMTUuNDQxMTg0NiAxMy44OTMyOTEzLDE2LjI1ODUyMDUgMTMuODkzMjkxMywxNy4yNjkwNTEyIEwxMy44OTMyOTEzLDIwLjM2NTI0MjEgTDIuNjAzNTI3MTQsMjAuMzY1MjQyMSBDMi4wNjU5MTkzMiwyMC4zNjUyNDIxIDEuNjEzODk4NjcsMTkuOTEzMzA3NSAxLjYxMzg5ODY3LDE5LjM3NTY5OTcgTDEuNjEzODk4NjcsMTkuMzc1NjEzNyBaIiBpZD0iSWNvbiI+PC9wYXRoPiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4gICAgICAgICAgICAgICAgICAgIDwvZz4gICAgICAgICAgICAgICAgPC9nPiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==);
                        padding: 0 0 0 31px;
                        background-position: left;
                        background-size: contain;
                        background-repeat: no-repeat;
                        color: #3C3E46;
                        font-family: "Maison Neue", sans-serif;
                        font-size: 18px;
                        font-weight: 500;
                        letter-spacing: 0;
                        line-height: 24px;
                    }
                }
            }
        }

    }
}
</style>
