<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\core\cloud;


class CloudTemplate extends CloudBase
{
    /**
     * @param array $args 查询参数
     * @return array ['list'=>[],'pagination'=>[]]
     * @throws CloudException
     */
    public function getList($args = [])
    {
        return $this->httpGet('/mall/template/index', $args);
    }

    /**
     * @param $args
     * @return mixed
     * @throws CloudException
     */
    public function getDetail($args)
    {
        return $this->httpGet('/mall/template/detail', $args);
    }

    /**
     * @param $args
     * @return mixed
     * @throws CloudException
     */
    public function createOrder($args)
    {
        return $this->httpPost('/mall/template/create-order', [], $args);
    }

    /**
     * @param $id
     * @return mixed
     * @throws CloudException
     */
    public function orderDetail($id)
    {
        return $this->httpGet('/mall/template/order-detail', [
            'id' => $id
        ]);
    }

    /**
     * @param $id
     * @return mixed
     * @throws CloudException
     */
    public function install($id)
    {
        return $this->httpGet('/mall/template/package', [
            'id' => $id
        ]);
    }

    public function allId($params)
    {
        return $this->httpGet('/mall/template/all-id', $params);
    }
}
