<template>
    <div class="comments">

        <div class="top">
            <div class="container">
                <div class="row">

                    <div class="col-lg-8">
                        <span class="total">{{total_comments}}</span>
                    </div>

                    <div class="col-lg-4">
                        <div class="sorting-options">
                            <ul class="list-inline">
                                <li class="list-inline-item" v-for="sort in get_sorting_options" :key="sort.time_sort">
                                    <div :class="['link' , sort.time_sort === sorting_option ? 'active' : '']"
                                         @click="change_sorting_options(sort.time_sort)">
                                        {{sort.title}}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom">
            <Comment v-for="comment in get_comments"
                     :key="comment.title"
                     :title="comment.title"
                     :desc="comment.desc"
                     :likes="comment.likes"
                     :liked="comment.liked"
                     :date_text="comment.date_text"
                     :img="comment.img"/>
        </div>


        <CommentForm/>

    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Comment from "@/components/Comment.vue";
import CommentForm from "@/components/CommentForm.vue";

type commentsDataType = {
    title: string,
    desc: string,
    likes: number,
    liked: boolean,
    timestamp: number,
    date_text: string,
    img: string
}

const comments_data_original: Array<commentsDataType> = [
    {
        title: 'Tsutsui Ichiha',
        desc: 'Such a massive change in such a short time is extremely unusual.',
        likes: 12,
        liked: true,
        timestamp: -20,
        date_text: '20 days ago',
        img: 'profile2.png'
    },
    {
        title: 'Sophie Anderson',
        desc: 'Loss of Arctic sea ice is just one of the many changes that are accelerating it.',
        likes: 4,
        liked: false,
        timestamp: -4,
        date_text: '4 days ago',
        img: 'profile3.png'
    },
    {
        title: 'Charlie Harris',
        desc: 'Perhaps they had the same thing in the early 20th century',
        likes: 3,
        liked: true,
        timestamp: -1,
        date_text: 'Yesterday',
        img: 'profile4.png'
    }
]

@Component({
    components: {Comment, CommentForm}
})

export default class Comments extends Vue {

    total_comments = '23 comments';
    sorting_option = 0;

    comments_data : Array<commentsDataType> = []

    sorting_options = [
        {
            title: 'Best',
            time_sort: 0
        },
        {
            title: 'Newest',
            time_sort: 1
        },
        {
            title: 'Oldest',
            time_sort: -1
        }
    ]

    mounted(): void {
        this.comments_data = comments_data_original;
    }

    change_sorting_options(option: number): void {
        this.sorting_option = option;

        switch (option) {
            case 1:
                this.comments_data = comments_data_original.sort((x, y) => x.timestamp - y.timestamp);
                break;
            case -1:
                this.comments_data = comments_data_original.sort((x, y) => y.timestamp - x.timestamp);
                break;
            default:
                this.comments_data = comments_data_original;
        }

    }

    get get_comments(): Array<commentsDataType> {
        return this.comments_data;
    }

    get get_sorting_options(): Array<any> {
        return this.sorting_options;
    }


}

</script>

<style lang="scss">
@import "~bootstrap/scss/_functions.scss";
@import "~bootstrap/scss/_variables.scss";
@import "~bootstrap/scss/mixins/_breakpoints.scss";


.comments {
    .top {
        background: #6648cd;
        padding: 45px 0 35px 0;

        .total {
            color: #FFFFFF;
            font-family: "Eina 03", sans-serif;
            font-size: 24px;
            font-weight: bold;
            letter-spacing: 0;
            line-height: 33px;
            margin: 0 0 30px 0;
            display: block;
            text-transform: uppercase;
            text-align: center;

            @include media-breakpoint-up(md) {
                margin: 0;
                text-align: left;
            }
        }

        .sorting-options {
            text-align: center;

            @include media-breakpoint-up(md) {
                text-align: left;
            }

            .list-inline .list-inline-item .link {
                color: #FFFFFF;
                font-family: "Eina 03", sans-serif;
                font-size: 14px;
                font-weight: bold;
                letter-spacing: 0;
                line-height: 20px;
                text-align: center;
                text-transform: uppercase;
                padding: 20px 17px;
                opacity: .5;

                cursor: pointer;

                &.active {
                    opacity: 1;
                }

                &:hover {
                    text-decoration: none;
                }
            }
        }
    }

    .bottom {
        padding: 60px 0 40px 0;
        background: #eeeef2;

    }
}
</style>
