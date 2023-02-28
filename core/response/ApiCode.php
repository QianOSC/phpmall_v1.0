<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\core\response;


class ApiCode
{
    /**
     *  状态码：成功
     */
    const CODE_SUCCESS = 0;

    /**
     * 状态码：失败
     */
    const CODE_ERROR = 1;

    /**
     * 状态码：未登录
     */
    const CODE_NOT_LOGIN = -1;

    /**
     * 状态码：商城禁用
     */
    const CODE_STORE_DISABLED = -2;
    /**
     * 状态码：多商户未登录
     */
    const CODE_MCH_NOT_LOGIN = -3;
    /**
     * 状态码：未关注公众号
     */
    const CODE_WECHAT_SUBSCRIBE = 2;
    const CODE_H5_USER_NOTEXIST = -1000;
    const CODE_H5_PWD_ERROR = -1001;
}
