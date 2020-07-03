<template>
    <div class="comment-form">
        <form action="/portal" class="form">
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col-md-10">
                        <div class="row">
                            <div class="col-2 col-md-2 left">
                                <div class="profile">
                                    <router-link to="/portal">
                                        <img src="../assets/images/profile1.png" class="img" alt="" />
                                    </router-link>
                                </div>
                            </div>
                            <div class="col">
                                <input type="text" class="text" placeholder="Write something…"/>
                            </div>
                            <div class="col-12 col-md-3">
                                <button class="big-button" type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';


@Component
export default class CommentForm extends Vue {
    
}

</script>

<style lang="scss">
@import "~bootstrap/scss/_functions.scss";
@import "~bootstrap/scss/_variables.scss";
@import "~bootstrap/scss/mixins/_breakpoints.scss";


.comment-form {
    background: #eeeef2;
    padding: 0 0 58px 0;

    .form {
        .left {
            text-align: left;

            @include media-breakpoint-up(md) {
                text-align: center;
            }
        }

        .profile .img {
            max-width: 60px;
            border-radius: 50%;
            display: inline-block;
        }

        .text {
            width: 100%;
            background: #fff;
            border-radius: 30px;
            color: #3C3E46;
            font-family: "Maison Neue", sans-serif;
            font-size: 18px;
            font-weight: 300;
            letter-spacing: 0;
            line-height: 24px;
            opacity: 1;
            margin: 0;
            border: none;
            padding: 19px 0;
            text-indent: 30px;

            @include media-breakpoint-up(md) {
                width: 100%;
            }

            @include media-breakpoint-up(lg) {
                width: 110%;
                margin: 0 0 0 -35px;
            }

            &::placeholder {
                opacity: 0.6;
            }

            &:focus {
                outline: none;
                box-shadow: 0 0 0 3px #6648cd;
            }
        }

        .big-button {
            width: 100%;
            display: block;
            border: none;
            color: #FFFFFF;
            font-family: "Maison Neue", sans-serif;
            font-size: 18px;
            font-weight: 500;
            letter-spacing: 0;
            line-height: 24px;
            background: #6648cd;
            padding: 19px 0;
            border-radius: 30px;
            max-width: 100%;
            margin: 20px 0 0 0;

            @include media-breakpoint-up(sm) {
                margin: 0 0 0 13px;
            }

            @include media-breakpoint-up(lg) {
                max-width: 161px;
                margin: 0 0 0 13px;
            }

            &:focus {
                outline: none;
            }
        }
    }
}
</style>
