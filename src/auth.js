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
 * @returns 만약 오류가 발생하였을경우 false 아닐 경우 response 을 반환합니다.
 */
export async function register(
    email,
    passwd,
    firstname,
    lastname,
    address
) {
    var result = {}
    try {
        const response = await axios.post(
        ENDPOINT + '/auth/login',
        { email, passwd, firstname, lastname, address }
        );
        return response;
    } catch ( error ) {
        console.log( error );
    }
    return false;
}

/**
 * 로그인합니다.
 * @param {String} email 
 * @param {String} passwd 
 * @returns 만약 오류가 발생하였을 경우 false 아닐경우 response 을 반환합니다.
 */

export async function login( 
    email,
    passwd
) {
    try {
        const response = await axios.post(
        ENDPOINT + '/auth/login',
        { email, passwd }
        );
        return response;
    } catch ( error ) {
        console.log( error );
    }
    return false;
}

/**
 * 로그아웃 합니다.
 * @returns 만약 오류가 발생하였을 경우 false 아닐경우 response 을 반환합니다.
 */

export async function logout() {
    try {
        const response = await axios.get( ENDPOINT + '/auth/logout' );
        return response;
    } catch( error )
    {
        console.log( error );
    }
    return false;
}
