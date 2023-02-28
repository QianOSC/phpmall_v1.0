<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\bonus\forms\common;


use app\core\response\ApiCode;
use app\forms\common\review\BaseReview;
use app\plugins\bonus\forms\mall\CaptainForm;

class BonusReview extends BaseReview
{

    /**
     * @return array
     * @throws \Exception
     * 获取审核消息列表
     * TODO 先这么着吧
     */
    public function getList()
    {
        $form = new CaptainForm();
        $form->attributes = \Yii::$app->request->get();
        $form->status = 0;
        $res = $form->getList();
        if ($res['code'] != 0) {
            return $res;
        }
        $newList = [];
        foreach ($res['data']['list'] as $datum) {
            $newList[] = [
                'id' => $datum['id'],
                'user_id' => $datum['user_id'],
                'nickname' => $datum['name'],
                'avatar' => $datum['avatar'],
                'tip' => ''
            ];
        }
        return [
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => $res['msg'],
            'data' => [
                'list' => $newList
            ]
        ];
    }

    /**
     * @return array
     * @throws \Exception
     * 获取审核详情
     */
    public function getDetail()
    {
        return [];
    }

    /**
     * @return array
     * @throws \Exception
     * 处理审核消息
     */
    public function become()
    {
        $form = new CommonCaptain();
        $form->attributes = \Yii::$app->request->post();
        return $form->become();
    }

    public function getCount()
    {
        $form = new CaptainForm();
        return $form->getCount();
    }
}
