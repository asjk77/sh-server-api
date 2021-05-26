/*******************************************************************************
* File Name      : auth.js                                                     *
* Created Date   : Thursday, May 20th 2021, 7:34:52 pm                         *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : auth_api 를 제공합니다.

import axios from "axios";
import { ENDPOINT } from "./config";

/**
 * 회원가입 합니다.
 * @param {String} email 
 * @param {String} passwd 
 * @param {String} firstname 
 * @param {String} lastname 
 * @param {String} address 
 * 
 * @returns axios.Promise 
 */
export function register(
    email,
    passwd,
    firstname,
    lastname,
    address
) {
        return axios.post(
        ENDPOINT + '/auth/register',
        { email, passwd, firstname, lastname, address }
        );
}

/**
 * 로그인합니다.
 * @param {String} email 
 * @param {String} passwd 
 * @returns axios.Promise 
 */

export function login( 
    email,
    passwd
) {
        return axios({method: 'post', url: ENDPOINT + '/auth/login', data: { "email" : email, "passwd": passwd } });

}

/**
 * 로그아웃 합니다.
 * @returns axios.Promise 
 */

export async function logout() {
    return axios.get( ENDPOINT + '/auth/logout' );
}
