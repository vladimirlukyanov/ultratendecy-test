<template>
    <div class="welcome">
        <div class="contents">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="top">
                            <a class="logo"/>
                            <h1 class="title">Welcome</h1>
                            <span class="subtitle">Please create an account to continue!</span>

                            <div class="big-buttons">
                                <router-link to="/portal" class="btn facebook">Continue with Facebook</router-link>
                                <router-link to="/portal" class="btn google">Continue with Google</router-link>
                            </div>

                            <div class="signup-form">
                                <span class="title">OR USE EMAIL INSTEAD</span>

                                <form class="form" action="">
                                    <input class="text mail" placeholder="Email Address"/>
                                    <input class="text lock" placeholder="Password"/>
                                    <button type="submit" class="submit" @click="submitForm">Sign Up</button>
                                </form>

                                <div class="login">
                                    Already have an account? <a class="link">Login</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer></Footer>

    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import Footer from "@/components/Footer.vue";

@Component({
    components: {
        Footer
    }
})

export default class Home extends Vue {
    async submitForm(): Promise<void> {
        await this.$router.push('/portal');
    }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/_functions.scss";
@import "~bootstrap/scss/_variables.scss";
@import "~bootstrap/scss/mixins/_breakpoints.scss";

.welcome {
    background: #eeeef2;

    .contents {
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI3ODlweCIgaGVpZ2h0PSI5MDBweCIgdmlld0JveD0iMCAwIDc4OSA5MDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+MkRBOTU5RTAtQzBEMC00MDVDLUFCNTktN0VDNDY1MjAzOTU2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIHNrZXRjaHRvb2wuPC9kZXNjPiAgICA8ZGVmcz4gICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMzMuNjM2MzE1NyUiIHkxPSI1MCUiIHgyPSI3Mi44NjQxMjYyJSIgeTI9IjE5LjM4NDY4NTclIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+ICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzNFMTI5NCIgb2Zmc2V0PSIwJSI+PC9zdG9wPiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM3NjI2REYiIG9mZnNldD0iMTAwJSI+PC9zdG9wPiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4gICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNDIuMjk4OTk3OSUiIHkxPSI1MCUiIHgyPSI1NC4xMjYwODklIiB5Mj0iNjUuMjc1MjgzNyUiIGlkPSJsaW5lYXJHcmFkaWVudC0yIj4gICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZGRkZGIiBvZmZzZXQ9IjAlIj48L3N0b3A+ICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIwLjcwODYxNTYwMyIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+ICAgICAgICA8L2xpbmVhckdyYWRpZW50PiAgICA8L2RlZnM+ICAgIDxnIGlkPSJXZWIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9IlNpZ24tVXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTEuMDAwMDAwLCAwLjAwMDAwMCkiPiAgICAgICAgICAgIDxnIGlkPSJJbGx1c3RyYXRpb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYxMC4wMDAwMDAsIC03My4wMDAwMDApIj4gICAgICAgICAgICAgICAgPHBhdGggZD0iTTAsMCBMODM0LDU4LjYzMzc2MjYgTDgzNCw2MzkuNTM0ODcxIEM3MTYuNDUyNDMyLDYyOS41NDMxMjQgNTkzLjMzODk0OCw2NzUuNTMwMjA3IDQ2NC42NTk1NDcsNzc3LjQ5NjEyIEMzMzUuOTgwMTQ2LDg3OS40NjIwMzMgMzg5LjEyODY2OSw5ODMuMjk2NjYgNjI0LjEwNTExOCwxMDg5IEwwLDAgWiIgaWQ9IjAxIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIj48L3BhdGg+ICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSIwMiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0yKSIgcG9pbnRzPSI0NTEgNzg4IDgzNCA1OSA4MzQgNDE4LjkzMTQwMiI+PC9wb2x5Z29uPiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==);
        background-repeat: no-repeat;
        background-size: contain;
        background-position-x: 140px;
        background-position-y: top;

        @include media-breakpoint-up(md) {
            background-position-x: 260px;
            background-position-y: bottom;
        }


        @include media-breakpoint-up(lg) {
            background-position-x: right;
            background-position-y: bottom;
        }

        .top {
            padding: 70px 0 0 0;

            .logo {
                width: 31px;
                height: 60px;
                display: inline-block;
                background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIzMXB4IiBoZWlnaHQ9IjYwcHgiIHZpZXdCb3g9IjAgMCAzMSA2MCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT42NzExM0NBMy01NEMwLTQwRDQtOTYwNC1FQjhCMTE1MTEyQkY8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+ICAgIDxnIGlkPSJXZWIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9IlNpZ24tVXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjUuMDAwMDAwLCAtMzguMDAwMDAwKSIgZmlsbD0iIzY2NDhDRCI+ICAgICAgICAgICAgPGcgaWQ9IlRpdGxlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjUuMDAwMDAwLCAzOC4wMDAwMDApIj4gICAgICAgICAgICAgICAgPGcgaWQ9IkxvZ28iPiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTguMDE5NDM4OCw0OC4xMDA5Nzc5IEw4LjAxOTQzODgsNTYuNzA2MjUzNCBDOC4wMTk0Mzg4LDU4LjQ2MzAxMyA2LjU5NTMwMzczLDU5Ljg4NzE0ODEgNC44Mzg1NDQwOCw1OS44ODcxNDgxIEMzLjA4MTc4NDQ0LDU5Ljg4NzE0ODEgMS42NTc2NDkzNiw1OC40NjMwMTMgMS42NTc2NDkzNiw1Ni43MDYyNTM0IEwxLjY1NzY0OTM2LDMyLjg0MzM5MjIgQzEuNjU3NjQ5MzYsMzEuMTA5NjEzMSAzLjA2MzE1NTAxLDI5LjcwNDEwNzUgNC43OTY5MzQwOCwyOS43MDQxMDc1IEM1LjgwNDk0NDIsMjkuNzA0MTA3NSA2Ljc1MTY0MTUyLDMwLjE4ODE0OTkgNy4zNDE4NDE5NSwzMS4wMDUzMDgzIEwxMS41MTA4NzY3LDM2Ljc3NzUxOTggQzEyLjUyMDMxNzYsMzguMTc1MTM1MSAxMy42MDA3NzgsMzkuNTIwMDU2MyAxNC43NDc5OTk5LDQwLjgwNjk4MzQgTDE3LjU3ODk0NjgsNDMuOTgyNjc0NSBDMTguNTM3MDEwNCw0NS4wNTc0MDgyIDIwLjE4NDkxODMsNDUuMTUxOTg4IDIxLjI1OTY1Miw0NC4xOTM5MjQzIEMyMS44MTQ1MzAyLDQzLjY5OTI4MjIgMjIuMTMxODU5LDQyLjk5MTI5MSAyMi4xMzE4NTksNDIuMjQ3OTQ2OCBMMjIuMTMxODU5LDMxLjI1OTA5NTYgQzIyLjEzMTg1OSwyOS41MDIzMzU5IDIzLjU1NTk5NDEsMjguMDc4MjAwOSAyNS4zMTI3NTM4LDI4LjA3ODIwMDkgQzI3LjA2OTUxMzQsMjguMDc4MjAwOSAyOC40OTM2NDg1LDI5LjUwMjMzNTkgMjguNDkzNjQ4NSwzMS4yNTkwOTU2IEwyOC40OTM2NDg1LDU3LjQ0NjQ1NiBDMjguNDkzNjQ4NSw1OC43MTkyOTc4IDI3LjQ2MTgwNjMsNTkuNzUxMTM5OSAyNi4xODg5NjQ1LDU5Ljc1MTEzOTkgQzI1LjQzODQ5OCw1OS43NTExMzk5IDI0LjczNTAyNzYsNTkuMzg1NzQzMyAyNC4zMDM0NjgyLDU4Ljc3MTc3NTQgQzIxLjI1MDc1ODYsNTQuNDk4ODc1MiAxOS40NjU2NTQxLDUyLjA2NDI3OTQgMTguOTQ4MTU0Nyw1MS40Njc5ODgyIEwxNC4wNjYzNjM0LDQ1Ljg0MjkyMDUgQzEyLjgxOTI3MjcsNDQuNDA1OTU0MiAxMC42NDM0MTQ2LDQ0LjI1MjAyOTYgOS4yMDY0NDgzMyw0NS40OTkxMjAzIEM4LjQ1MjQ4NjcyLDQ2LjE1MzQ1NjEgOC4wMTk0Mzg4LDQ3LjEwMjY3MjYgOC4wMTk0Mzg4LDQ4LjEwMDk3NzkgWiIgaWQ9Ik4iPjwvcGF0aD4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMC4wOTE4NTM1LDQuODIyMDcwMDcgQzIwLjA5MTg1MzUsMTAuNDQyMjI3OSAxOC4xMzgzMjQyLDE1Ljc3NzMwNTIgMTQuNjMxOTg5NywyMC4yMTY0MTUzIEwxMC41NzQ2NTk3LDE4LjA1Nzk0ODkgQzEzLjU4MDA4OTMsMTQuMjcwNDUxMyAxNS4xMzI4OTQ2LDkuNzA5MTYzODEgMTUuMTMyODk0Niw0LjgyMjA3MDA3IEMxNS4xMzI4OTQ2LC0wLjAyNDI5Nzg4MTYgMTMuNTI5OTk4OCwtNC41MDQxMzM4IDEwLjU3NDY1OTcsLTguMjkxNjMxNDUgTDE0LjYzMTk4OTcsLTEwLjQ1MDA5NzggQzE4LjA4ODIzMzcsLTYuMDEwOTg3NzEgMjAuMDkxODUzNSwtMC43OTgwODc3MjMgMjAuMDkxODUzNSw0LjgyMjA3MDA3IFoiIGlkPSJTaGFwZSIgb3BhY2l0eT0iMC4zMDAwMDAwMTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1LjMzMzI1NywgNC44ODMxNTkpIHJvdGF0ZSgtOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTE1LjMzMzI1NywgLTQuODgzMTU5KSAiPjwvcGF0aD4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOS4wMzQzODc1LDE1LjQxNTgxNjMgTDE5LjAzNDM4NzUsMTUuMzczODE0MiBDMTkuMDM0Mzg3NSwxOC42OTE5ODQyIDE3LjgyNTg1NSwyMS44NDIxNDU3IDE1Ljg2MTk4OTYsMjQuNDQ2Mjc5MiBMMTEuNjMyMTI1NywyMi4yMjAxNjUxIEMxMy4xNDI3OTE0LDIwLjI0NjA2MzkgMTMuOTk4ODM1MiwxNy44NTE5NDEyIDEzLjk5ODgzNTIsMTUuMzczODE0MiBDMTMuOTk4ODM1MiwxMi44OTU2ODcxIDEzLjE0Mjc5MTQsMTAuNjY5NTczIDExLjYzMjEyNTcsOC42OTU0NzE4MSBMMTUuODYxOTg5Niw2LjQ2OTM1NzcgQzE3Ljg3NjIxMDUsOS4xMTU0OTMzNCAxOS4wMzQzODc1LDEyLjA5NzY0NjIgMTkuMDM0Mzg3NSwxNS40MTU4MTYzIFoiIGlkPSJQYXRoIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNS4zMzMyNTcsIDE1LjQ1NzgxOCkgcm90YXRlKC05MC4wMDAwMDApIHRyYW5zbGF0ZSgtMTUuMzMzMjU3LCAtMTUuNDU3ODE4KSAiPjwvcGF0aD4gICAgICAgICAgICAgICAgPC9nPiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==);
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
                margin: 0 0 32px 0;
            }

            > {
                .title {
                    color: #3C3E46;
                    font-family: "Eina 03", sans-serif;
                    font-size: 46px;
                    font-weight: 600;
                    letter-spacing: -1.7px;
                    line-height: 64px;
                    margin: 0 0 5px 0;
                }

                .subtitle {
                    color: #3C3E46;
                    display: block;
                    width: 100%;
                    max-width: 214px;
                    font-family: "Maison Neue", sans-serif;
                    font-size: 18px;
                    font-weight: 300;
                    letter-spacing: 0;
                    line-height: 24px;
                    margin: 0 0 30px 0;
                }
            }

            .big-buttons {
                width: 100%;
                max-width: 100%;
                margin: 0 0 30px 0;

                @include media-breakpoint-up(sm) {
                    max-width: 100%;
                }

                @include media-breakpoint-up(md) {
                    max-width: 350px;
                }

                .btn {
                    width: 100%;
                    display: block;
                    text-align: left;
                    border: 1px solid #fff;
                    color: #3C3E46;
                    font-family: "Maison Neue", sans-serif;
                    font-size: 18px;
                    font-weight: 500;
                    letter-spacing: 0;
                    line-height: 24px;
                    background-color: #ffffff;
                    padding: 23px 0;
                    margin: 0 0 10px 0;
                    text-indent: 56px;
                    outline: none;
                    transition: none;

                    &:focus {
                        box-shadow: 0 0 0 1px #6648cd;
                    }

                    &.facebook {
                        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyM3B4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyMyAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT43Q0Y0RDEzMC04RUEwLTQ1MzUtOTZEMy0zQUU2M0QxNjlGODE8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+ICAgIDxnIGlkPSJXZWIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9IlNpZ24tVXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xODUuMDAwMDAwLCAtMzA4LjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+ICAgICAgICAgICAgPGcgaWQ9IlNvY2lhbC1Mb2dpbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY1LjAwMDAwMCwgMjg1LjAwMDAwMCkiPiAgICAgICAgICAgICAgICA8ZyBpZD0iRmFjZWJvb2siPiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkxvZ28iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLjAwMDAwMCwgMjMuMDAwMDAwKSI+ICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIyLjc1NTUyLDExLjM3Nzc2IEMyMi43NTU1Miw1LjA5NDQ3MTY0IDE3LjY2MTA0ODQsMCAxMS4zNzc3NiwwIEM1LjA5NDQ3MTY0LDAgMCw1LjA5NDQ3MTY0IDAsMTEuMzc3NzYgQzAsMTcuMDU2MjM5OSA0LjE2MDA1ODUsMjEuNzYzNTA2IDkuNjAwMTM1LDIyLjYxNzkxODEgTDkuNjAwMTM1LDE0LjY2NzQwNjMgTDYuNzEwNDk0MzcsMTQuNjY3NDA2MyBMNi43MTA0OTQzNywxMS4zNzc3NiBMOS42MDAxMzUsMTEuMzc3NzYgTDkuNjAwMTM1LDguODcwNTI0NzQgQzkuNjAwMTM1LDYuMDE5Mjg0NjUgMTEuMjk5MzU4OSw0LjQ0MzI2MjQ4IDEzLjg5Nzc5NTQsNC40NDMyNjI0OCBDMTUuMTQyNjEyOSw0LjQ0MzI2MjQ4IDE2LjQ0NTAzMTMsNC42NjU2NjU2MSAxNi40NDUwMzEzLDQuNjY1NjY1NjEgTDE2LjQ0NTAzMTMsNy40NjU3MDQ5OSBMMTUuMDA5ODExMSw3LjQ2NTcwNDk5IEMxMy41OTY5OTEyLDcuNDY1NzA0OTkgMTMuMTU1Mzg1LDguMzQyNTE3MzIgMTMuMTU1Mzg1LDkuMjQzMzI5OTggTDEzLjE1NTM4NSwxMS4zNzc3NiBMMTYuMzEwNjI5NCwxMS4zNzc3NiBMMTUuODA2NjIyMywxNC42Njc0MDYzIEwxMy4xNTUzODUsMTQuNjY3NDA2MyBMMTMuMTU1Mzg1LDIyLjYxNzkxODEgQzE4LjU5NTQ2MTUsMjEuNzY1MTA2MSAyMi43NTU1MiwxNy4wNTc4Mzk5IDIyLjc1NTUyLDExLjM3Nzc2IFoiIGlkPSJQYXRoIiBmaWxsPSIjMTk3N0YzIj48L3BhdGg+ICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE1LjgwNjYyMjMsMTUuMzI5ODA0MyBMMTYuMzEwNjI5NCwxMi4wNDAxNTgxIEwxMy4xNTUzODUsMTIuMDQwMTU4MSBMMTMuMTU1Mzg1LDkuOTA1NzI4MDUgQzEzLjE1NTM4NSw5LjAwNjUxNTQgMTMuNTk1MzkxMiw4LjEyODEwMzA1IDE1LjAwOTgxMTEsOC4xMjgxMDMwNSBMMTYuNDQ1MDMxMyw4LjEyODEwMzA1IEwxNi40NDUwMzEzLDUuMzI4MDYzNjggQzE2LjQ0NTAzMTMsNS4zMjgwNjM2OCAxNS4xNDI2MTI5LDUuMTA1NjYwNTUgMTMuODk3Nzk1NCw1LjEwNTY2MDU1IEMxMS4yOTkzNTg5LDUuMTA1NjYwNTUgOS42MDAxMzUsNi42ODAwODI2OSA5LjYwMDEzNSw5LjUzMjkyMjgxIEw5LjYwMDEzNSwxMi4wNDAxNTgxIEw2LjcxMDQ5NDM3LDEyLjA0MDE1ODEgTDYuNzEwNDk0MzcsMTUuMzI5ODA0MyBMOS42MDAxMzUsMTUuMzI5ODA0MyBMOS42MDAxMzUsMjMuMjgwMzE2MSBDMTAuMTc5MzQzMSwyMy4zNzE1MTc0IDEwLjc3Mjk1MTUsMjMuNDE3OTE4MSAxMS4zNzc3NiwyMy40MTc5MTgxIEMxMS45ODI1Njg1LDIzLjQxNzkxODEgMTIuNTc2MTc2OSwyMy4zNjk5MTc0IDEzLjE1NTM4NSwyMy4yODAzMTYxIEwxMy4xNTUzODUsMTUuMzI5ODA0MyBMMTUuODA2NjIyMywxNS4zMjk4MDQzIFoiIGlkPSJQYXRoIiBmaWxsPSIjRkVGRUZFIj48L3BhdGg+ICAgICAgICAgICAgICAgICAgICA8L2c+ICAgICAgICAgICAgICAgIDwvZz4gICAgICAgICAgICA8L2c+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4=);
                        background-position: 20px 23px;
                        background-repeat: no-repeat;
                        background-size: 20px 23px;
                    }

                    &.google {
                        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCAyMCAyMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT4zQTRGNkVGOC0yRkVCLTRENEEtODM0QS04RTg1QjQ4MEI5Mjg8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+ICAgIDxnIGlkPSJXZWIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9IlNpZ24tVXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xODcuMDAwMDAwLCAtMzkwLjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+ICAgICAgICAgICAgPGcgaWQ9IlNvY2lhbC1Mb2dpbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY1LjAwMDAwMCwgMjg1LjAwMDAwMCkiPiAgICAgICAgICAgICAgICA8ZyBpZD0iR29vZ2xlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgODAuMDAwMDAwKSI+ICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iTG9nbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIuMDAwMDAwLCAyNS4wMDAwMDApIj4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTkuNTc4NzU0NiwxMC4yMzQ0MzIyIEMxOS41Nzg3NTQ2LDkuNTU2Nzc2NTYgMTkuNTIzODA5NSw4Ljg3NTQ1Nzg4IDE5LjQwNjU5MzQsOC4yMDg3OTEyMSBMMTAuMDAzNjYzLDguMjA4NzkxMjEgTDEwLjAwMzY2MywxMi4wNDc2MTkgTDE1LjM4ODI3ODQsMTIuMDQ3NjE5IEMxNS4xNjQ4MzUyLDEzLjI4NTcxNDMgMTQuNDQ2ODg2NCwxNC4zODA5NTI0IDEzLjM5NTYwNDQsMTUuMDc2OTIzMSBMMTMuMzk1NjA0NCwxNy41Njc3NjU2IEwxNi42MDgwNTg2LDE3LjU2Nzc2NTYgQzE4LjQ5NDUwNTUsMTUuODMxNTAxOCAxOS41Nzg3NTQ2LDEzLjI2NzM5OTMgMTkuNTc4NzU0NiwxMC4yMzQ0MzIyIFoiIGlkPSJQYXRoIiBmaWxsPSIjNDI4NUY0Ij48L3BhdGg+ICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwLjAwMzY2MywxOS45NzQzNTkgQzEyLjY5MjMwNzcsMTkuOTc0MzU5IDE0Ljk1OTcwNywxOS4wOTE1NzUxIDE2LjYxMTcyMTYsMTcuNTY3NzY1NiBMMTMuMzk5MjY3NCwxNS4wNzY5MjMxIEMxMi41MDU0OTQ1LDE1LjY4NDk4MTcgMTEuMzUxNjQ4NCwxNi4wMjkzMDQgMTAuMDA3MzI2LDE2LjAyOTMwNCBDNy40MDY1OTM0MSwxNi4wMjkzMDQgNS4yMDE0NjUyLDE0LjI3NDcyNTMgNC40MTAyNTY0MSwxMS45MTU3NTA5IEwxLjA5NTIzODEsMTEuOTE1NzUwOSBMMS4wOTUyMzgxLDE0LjQ4MzUxNjUgQzIuNzg3NTQ1NzksMTcuODQ5ODE2OCA2LjIzNDQzMjIzLDE5Ljk3NDM1OSAxMC4wMDM2NjMsMTkuOTc0MzU5IFoiIGlkPSJQYXRoIiBmaWxsPSIjMzRBODUzIj48L3BhdGg+ICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQuNDA2NTkzNDEsMTEuOTE1NzUwOSBDMy45ODkwMTA5OSwxMC42Nzc2NTU3IDMuOTg5MDEwOTksOS4zMzY5OTYzNCA0LjQwNjU5MzQxLDguMDk4OTAxMSBMNC40MDY1OTM0MSw1LjUzMTEzNTUzIEwxLjA5NTIzODEsNS41MzExMzU1MyBDLTAuMzE4NjgxMzE5LDguMzQ3OTg1MzUgLTAuMzE4NjgxMzE5LDExLjY2NjY2NjcgMS4wOTUyMzgxLDE0LjQ4MzUxNjUgTDQuNDA2NTkzNDEsMTEuOTE1NzUwOSBaIiBpZD0iUGF0aCIgZmlsbD0iI0ZCQkMwNCI+PC9wYXRoPiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMC4wMDM2NjMsMy45ODE2ODQ5OCBDMTEuNDI0OTA4NCwzLjk1OTcwNjk2IDEyLjc5ODUzNDgsNC40OTQ1MDU0OSAxMy44Mjc4Mzg4LDUuNDc2MTkwNDggTDEzLjgyNzgzODgsNS40NzYxOTA0OCBMMTYuNjczOTkyNywyLjYzMDAzNjYzIEMxNC44NzE3OTQ5LDAuOTM3NzI4OTM4IDEyLjQ3OTg1MzUsMC4wMDczMjYwMDczMyAxMC4wMDM2NjMsMC4wMzY2MzAwMzY2IEM2LjIzNDQzMjIzLDAuMDM2NjMwMDM2NiAyLjc4NzU0NTc5LDIuMTYxMTcyMTYgMS4wOTUyMzgxLDUuNTMxMTM1NTMgTDQuNDA2NTkzNDEsOC4wOTg5MDExIEM1LjE5NDEzOTE5LDUuNzM2MjYzNzQgNy40MDI5MzA0LDMuOTgxNjg0OTggMTAuMDAzNjYzLDMuOTgxNjg0OTggWiIgaWQ9IlBhdGgiIGZpbGw9IiNFQTQzMzUiPjwvcGF0aD4gICAgICAgICAgICAgICAgICAgIDwvZz4gICAgICAgICAgICAgICAgPC9nPiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==);
                        background-position: 20px 23px;
                        background-repeat: no-repeat;
                        background-size: 20px 23px;
                    }

                    &:hover {
                        border: 1px solid rgba(102, 72, 205, 0.72);
                    }

                    &:last-child {
                        margin: 0;
                    }
                }
            }

            .signup-form {
                width: 100%;
                max-width: 100%;
                margin: 0 0 27px 0;

                @include media-breakpoint-up(sm) {
                    max-width: 100%;
                }

                @include media-breakpoint-up(md) {
                    max-width: 359px;
                }

                > .title {
                    color: #84889A;
                    font-family: "Maison Neue", sans-serif;
                    font-size: 14px;
                    font-weight: 500;
                    letter-spacing: 0;
                    line-height: 19px;
                    margin: 0 0 15px 0;
                    display: block;
                }

                .form {
                    margin: 0 0 20px 0;

                    .text {
                        display: block;
                        width: 100%;
                        background: #ffffff;
                        padding: 23px 0;
                        border: none;
                        border-radius: 5px;
                        margin: 0 0 10px 0;
                        text-indent: 56px;

                        &:focus {
                            outline: none;
                            box-shadow: 0 0 0 1px #6648cd;
                        }

                        &.mail {
                            background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjE1cHgiIHZpZXdCb3g9IjAgMCAyMCAxNSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5DMkIwOEE2RC0yN0Y3LTQzRkItODNFQS01RjUxQ0M5QUEzMTU8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+ICAgIDxnIGlkPSJXZWIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9IlNpZ24tVXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTAuMDAwMDAwLCAtNTI2LjAwMDAwMCkiIGZpbGw9IiM2NjQ4Q0QiIGZpbGwtcnVsZT0ibm9uemVybyI+ICAgICAgICAgICAgPGcgaWQ9IkZvcm0iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2NS4wMDAwMDAsIDQ2NS4wMDAwMDApIj4gICAgICAgICAgICAgICAgPGcgaWQ9IkVtYWlsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMzQuMDAwMDAwKSI+ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjYuMzk2ODk1OCwyNyBDMjYuMjE0MDk4LDI3IDI2LjA0MDQwOCwyNy4wNDczMjUgMjUuODgwMzIzNywyNy4xMjYyMDE5IEwzMy45ODUxMTMxLDM1LjY3MTg3NSBDMzQuMzM5Nzg0OSwzNi4wNDU5ODA4IDM0LjczNTQwOTEsMzYuMDQ1OTgwOCAzNS4wOTA5ODg5LDM1LjY3MTg3NSBMNDMuMjAzMjI4NCwyNy4xMTcyNTk2IEM0My4wNDU4OTYsMjcuMDQxNzYzNSA0Mi44NzQwMDMzLDI3IDQyLjY5Mzk0MzUsMjcgTDI2LjM5Njg5NTgsMjcgWiBNMjUuMDE0NTUxLDI4LjQ3ODM2NTQgQzI1LjAwNTQ1NjcsMjguNTU5NDk1MiAyNSwyOC42NDYyNTg3IDI1LDI4LjczMDc2OTIgTDI1LDQwLjI2OTIzMDggQzI1LDQxLjIyODEzNDYgMjUuNjIyOTY5LDQyIDI2LjM5Njg5NTgsNDIgTDQyLjY5NDAxMzMsNDIgQzQzLjQ2Nzk0MDEsNDIgNDQuMDkwOTA5MSw0MS4yMjgxMzQ2IDQ0LjA5MDkwOTEsNDAuMjY5MjMwOCBMNDQuMDkwOTA5MSwyOC43MzA3NjkyIEM0NC4wOTA5MDkxLDI4LjY0NjI1ODcgNDQuMDg1NDUyNCwyOC41NTk0OTUyIDQ0LjA3NjM1ODEsMjguNDc4MzY1NCBMMzYuMDAwNDM3OSwzNi45ODc5ODA4IEMzNS4xNjI4MzU5LDM3Ljg3MDI2OTIgMzMuOTEyMzU4MSwzNy44NzEzOTQyIDMzLjA3NTgwMzgsMzYuOTg3OTgwOCBMMjUuMDE0NTUxLDI4LjQ3ODM2NTQgWiIgaWQ9Ikljb24iPjwvcGF0aD4gICAgICAgICAgICAgICAgPC9nPiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==);
                            background-position: 24px 28px;
                            background-repeat: no-repeat;
                            background-size: 20px 15px;
                        }

                        &.lock {
                            background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxNXB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCAxNSAyMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5EQjlGRjcwRC0xRTYxLTQxRUQtODk0NC02QkVGNTM2RjI3MDU8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+ICAgIDxnIGlkPSJXZWIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9IlNpZ24tVXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTMuMDAwMDAwLCAtNjA0LjAwMDAwMCkiIGZpbGw9IiM2NjQ4Q0QiIGZpbGwtcnVsZT0ibm9uemVybyI+ICAgICAgICAgICAgPGcgaWQ9IkZvcm0iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2NS4wMDAwMDAsIDQ2NS4wMDAwMDApIj4gICAgICAgICAgICAgICAgPGcgaWQ9IlBhc3N3b3JkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMTE0LjAwMDAwMCkiPiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQwLjQ5ODU3MDksMzIuNTMxMjY0MyBMNDAuNDk4NTcwOSwzMC4zMTI1MzY1IEM0MC40OTg1NzA5LDI3LjQxMjMxNjYgMzguMTU0NDY3MywyNSAzNS4xODYwMzQ0LDI1IEMzMi4yNTY3MDE4LDI1IDI5Ljg3MzQ5NzksMjcuMzgzMjAzOSAyOS44NzM0OTc5LDMwLjMxMjUzNjUgTDI5Ljg3MzQ5NzksMzIuNTMyMTE0MyBDMjguODE2NzkxOSwzMi42ODU2ODA2IDI4LDMzLjU4ODgyMDMgMjgsMzQuNjg3OTQxNiBMMjgsNDIuODEyNzIyNSBDMjgsNDQuMDE4ODM4MyAyOC45ODExNjE3LDQ1IDMwLjE4NzI3NzUsNDUgTDQwLjE4NzM4MzgsNDUgQzQxLjM5MzQ5OTYsNDUgNDIuMzc0NjYyLDQ0LjAxODgzODMgNDIuMzc0NjYyLDQyLjgxMjcyMjUgTDQyLjM3NDY2MiwzNC42ODc5NDE2IEM0Mi4zNzU0OTE2LDMzLjU4NzI0NzggNDEuNTU3MDE5NSwzMi42ODQxMTY2IDQwLjQ5ODY3NzIsMzIuNTMxNDc2OCBMNDAuNDk4NTcwOSwzMi41MzEyNjQzIFogTTMxLjc0ODYxMDgsMzAuMzEyNTM2NSBDMzEuNzQ4NjEwOCwyOC40MTY2MTk3IDMzLjI5MDkwMzksMjYuODc1MTEyOSAzNS4xODYwMzQ0LDI2Ljg3NTExMjkgQzM3LjEwODUxMzksMjYuODc1MTEyOSAzOC42MjM0NTgsMjguNDM3MzM4NiAzOC42MjM0NTgsMzAuMzEyNTM2NSBMMzguNjI0Mjg4MSwzMi40OTk4MTQxIEwzMS43NDk0NDA4LDMyLjQ5OTgxNDEgTDMxLjc0ODYxMDgsMzAuMzEyNTM2NSBaIE0zNi4xMjQ4NjU5LDQwLjMxMjY0MjggQzM2LjEyNDg2NTksNDAuODMxNDQzOCAzNS43MDY0OTMsNDEuMjQ5ODE2NyAzNS4xODc2OTE5LDQxLjI0OTgxNjcgQzM0LjY2ODg5MDgsNDEuMjQ5ODE2NyAzNC4yNTA1MTgsNDAuODMxNDQzOCAzNC4yNTA1MTgsNDAuMzEyNjQyOCBMMzQuMjUwNTE4LDM3LjE4NzM4MzggQzM0LjI1MDUxOCwzNi42Njg1ODI3IDM0LjY2ODg5MDgsMzYuMjUwMjA5OCAzNS4xODc2OTE5LDM2LjI1MDIwOTggQzM1LjcwNjQ5MywzNi4yNTAyMDk4IDM2LjEyNDg2NTksMzYuNjY4NTgyNyAzNi4xMjQ4NjU5LDM3LjE4NzM4MzggTDM2LjEyNDg2NTksNDAuMzEyNjQyOCBaIiBpZD0iU2hhcGUiPjwvcGF0aD4gICAgICAgICAgICAgICAgPC9nPiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==);
                            background-position: 26px 25px;
                            background-repeat: no-repeat;
                            background-size: 15px 20px;
                        }

                        &::placeholder {
                            /* Most modern browsers support this now. */
                            color: #84889A;
                        }
                    }

                    .submit {
                        display: block;
                        width: 100%;
                        padding: 23px 0;
                        border: none;
                        border-radius: 5px;
                        background: #6648cd;
                        color: #fff;
                        cursor: pointer;

                        &:hover {
                            background: #4a17a5;
                        }
                    }
                }

                .login {
                    font-family: "Maison Neue", sans-serif;
                    font-size: 16px;
                    font-weight: 500;
                    letter-spacing: 0;
                    line-height: 21px;

                    .link {
                        color: #6648CD;

                        &:hover {
                            color: #3d1288;
                        }
                    }
                }
            }
        }
    }
}
</style>
