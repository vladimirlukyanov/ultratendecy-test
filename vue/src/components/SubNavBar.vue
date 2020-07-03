<template>
    <div class="subheader">
        <div class="container">
            <div class="row no-gutters">
                <div class="col-8 col-md-10">
                    <div class="links">
                        <ul class="list-inline">
                            <li v-for="item in get_links" :key="item.title" class="list-inline-item">
                                <router-link :to="item.path" :class="['link', check_is_active(item)]">
                                    {{item.title}}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-4 col-md-2 text-right">
                    <router-link to="/portal/all" class="btn">Explore</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';


@Component
export default class SubNavBar extends Vue {
    get get_links(): Array<any> {
        const menu = [
            {
                title: 'Trending',
                path: '/portal'
            },
            {
                title: 'For You',
                path: '/portal/for_you'
            },
            {
                title: 'Cooking',
                path: '/portal/cooking'
            },
            {
                title: 'Nature',
                path: '/portal/nature'
            },
            {
                title: 'Science',
                path: '/portal/science'
            },
            {
                title: 'Travel',
                path: '/portal/travel'
            },
            {
                title: 'Climate',
                path: '/portal/climate'
            },
            {
                title: 'Music',
                path: '/portal/music'
            },
            {
                title: 'People',
                path: '/portal/people'
            }
        ]
        return menu;
    }

    check_is_active(item: { path: string } ): string {

        let is_active = '', trending = this.$route.params.trends;

        if (typeof trending !== 'undefined') {
            is_active = item.path === '/portal/' + trending ? 'active' : '';
        } else {
            if (item.path === '/portal') {
                is_active = 'active';
            }
        }

        return is_active;
    }

}

</script>

<style lang="scss">
@import "~bootstrap/scss/_functions.scss";
@import "~bootstrap/scss/_variables.scss";
@import "~bootstrap/scss/mixins/_breakpoints.scss";

.subheader {
    .links {
        position: relative;

        &:after {
            position: absolute;
            right: 0;
            top: 14px;
            height: 33px;
            width: 2px;
            background: #d8d8d8;
            content: '';
        }

        .list-inline {
            margin: 0;
            white-space: nowrap;
            display: block;
            flex-wrap: nowrap;
            max-width: 100%;
            overflow-x: scroll;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;

            .list-inline-item {
                margin: 0 7px 0 0;

                &:nth-child(4) {
                    margin: 0 15px 0 0;
                }

                &:nth-child(5) {
                    margin: 0 10px 0 0;
                }

                &:nth-child(6), &:nth-child(7), &:nth-child(8) {
                    margin: 0 18px 0 0;
                }

                .link {
                    padding: 20px 15px;
                    display: block;
                    color: #3C3E46;
                    font-family: "Maison Neue", sans-serif;
                    font-size: 16px;
                    font-weight: 500;
                    letter-spacing: 0;
                    line-height: 21px;
                    text-align: center;
                    text-decoration: none;
                    position: relative;

                    &.active {
                        color: #6648CD;

                        &:before {
                            content: '';
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            height: 3px;
                            background: #6648cd;
                        }
                    }

                    &:hover {
                        text-decoration: none;
                        color: #6648CD;

                        &:after {
                            content: '';
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            height: 3px;
                            background: #6648cd;
                        }
                    }
                }
            }
        }
    }

    .btn {
        transition: none;
        border: 1px solid transparent;
        color: #6648CD;
        font-family: "Maison Neue", sans-serif;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 0;
        line-height: 21px;
        text-align: center;
        background: #efecfa;
        border-radius: 5px;
        padding: 7px 18px;
        margin: 12px 0 0 0;

        &:hover {
            background: #6648cd;
            color: #fff;
        }
    }
}
</style>
