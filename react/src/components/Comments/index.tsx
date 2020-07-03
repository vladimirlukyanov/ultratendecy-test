import * as React from "react";
import {FunctionComponent, useState} from "react";

import './_comments.scss';
import profile2_img from '../../assets/images/profile2.png';
import profile3_img from '../../assets/images/profile3.png';
import profile4_img from '../../assets/images/profile4.png';

import Comment from "../Comment";
import CommentForm from "../CommentForm";

const Comments: FunctionComponent = () => {

    const total_comments = '23 comments';

    const [sort, setSort] = useState(0);

    const sorting_option = [
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

    let comments_data = [
        {
            title: 'Tsutsui Ichiha',
            desc: 'Such a massive change in such a short time is extremely unusual.',
            likes: 12,
            liked: true,
            timestamp: -20,
            date_text: '20 days ago',
            img: profile2_img
        },
        {
            title: 'Sophie Anderson',
            desc: 'Loss of Arctic sea ice is just one of the many changes that are accelerating it.',
            likes: 4,
            liked: false,
            timestamp: -4,
            date_text: '4 days ago',
            img: profile3_img
        },
        {
            title: 'Charlie Harris',
            desc: 'Perhaps they had the same thing in the early 20th century',
            likes: 3,
            liked: true,
            timestamp: -1,
            date_text: 'Yesterday',
            img: profile4_img
        }
    ]

    const sorting_option_items = sorting_option.map((link, index) =>
        <li key={'c' + index} className="list-inline-item">
            <div className={sort === link.time_sort ? 'link active' : 'link'} onClick={(e) => {
                e.preventDefault();
                setSort(link.time_sort);
                switch (link.time_sort) {
                    case 1:
                        setComments(comments_data.sort((x, y) => x.timestamp - y.timestamp));
                        break;
                    case -1:
                        setComments(comments_data.sort((x, y) => y.timestamp - x.timestamp));
                        break;
                    default:
                        setComments(comments_data);
                }
            }}>{link.title}</div>
        </li>
    );

    const [comments, setComments] = useState(comments_data);

    return (
        <div className="comments">

            <div className="top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8">
                            <span className="total">{total_comments}</span>
                        </div>

                        <div className="col-lg-4">
                            <div className="sorting-options">
                                <ul className="list-inline">
                                    {sorting_option_items}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom">
                {
                    comments.map((comment, index) =>
                        <Comment key={'co' + index} {...comment} />
                    )
                }
            </div>

            <CommentForm />

        </div>
    )
}

export default Comments;