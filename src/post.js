/*******************************************************************************
* File Name      : post.js                                                     *
* Created Date   : Thursday, May 20th 2021, 7:39:29 pm                         *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : post 관련 api 를 제공합니다.

import axios from "axios";
import { ENDPOINT } from "./config";

/**
 * 글을 작성합니다.
 * @param {String} email 
 * @param {String} passwd 
 * @returns 만약 오류가 발생하였을 경우 false 아닐경우 response 을 반환합니다.
 * 
 */
export async function writePost(
    title,
    content,
) {

    await axios.post(
        ENDPOINT + '/post/new',
        { 'title': title, 'content': content }
        );
}

/**
 * 글을 얻습니다. 10개
 * @param {String} email 
 * @param {String} passwd 
 * @returns axios.Promise 
 */

export function showPosts( 
) {
    return axios.get(
        ENDPOINT + '/post/show',
        );
}
