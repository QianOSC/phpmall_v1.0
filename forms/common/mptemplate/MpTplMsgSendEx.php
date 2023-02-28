<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */
namespace app\forms\common\mptemplate;

use app\forms\common\mptemplate\tplmsg\MpTemplateMsgData;
use app\jobs\MpTplMessageJob;
use app\models\Model;
use app\models\Ids;
use GuzzleHttp\Client;

class MpTplMsgSendEx extends Model
{
    public $method;
    public $model;
    public $params;

    final public function sendTemplate($user, $order)
    {
        \Yii::error('================================================================3');
        \Yii::error($user->unionid);
        
        $idu = Ids::findOne([
            'unionid'  => $user->unionid
            ]);
        \Yii::error('idu:' . json_encode($idu->official_openid));
                $this->model = new MpTemplateMsgData();
                
        // \Yii::error($order->order_no);
        // \Yii::error($order->mobile);
        // \Yii::error($order->detail[0]->goods->id);
        // \Yii::error($user->username);
        
        $client = new Client([
            'verify' => false,
        ]);
        $response = $client->post('https://wx-store-adapter-api.firesbox.com/coupons', [
            'json' => [
                "order_id"     => $order->order_no,
                "phone_number" => $order->mobile,
                "item_id"      => $order->detail[0]->goods->id,
                "open_id"      => $user->username
                ]
        ]);
        $resp = json_decode($response->getBody(), true);
        // {"coupon_id":1,"coupon_type":"VOUCHER","coupon_expired":"2021-09-10 15:46:33.255217+00","coupon_code":"ABC123XYZ0","order_id":"20210121141736987641","invitation_code":"XXXYYYZZZ","install_link":"https://xuexi-courses.firesbox.com/#/7000103456/onboarding/install?invitation_code=78P80SBN36\u0026user_id=b76e0418-2d94-4b36-a6dd-497933b79923"}
        
        
        \Yii::error('resp:' . $resp['install_link']);

        $token = \Yii::$app->security->generateRandomString(32);
        
        $result = [
            'templateId' => 'NTWE_7PxjRlpN9ZkvktrI-E0w-hAE7DJQrDkFuY_YKk',
            'miniprogram' => [
                'appid' => 'wxe29132aebd8c9984',
                'pagepath' => '/page/index/index',
            ],
            'url'  => $resp['install_link'],
            'data' => [
                'keyword1' => [
                    'value' => $order->detail[0]->goods->name,
                    'color' => '#000000',
                ],
                'keyword2' => [
                    'value' => date("Y-m-d H:i:s"),
                    'color' => '#000000',
                ],
                'keyword3' => [
                    'value' => $order->order_no,
                    'color' => '#000000',
                ],
                'keyword4' => [
                    'value' => $resp['coupon_code'],
                    'color' => '#000000',
                ],
                'remark' => [
                    'value' => $resp['remark'],
                    'color' => '#000000',
                ],
            ],
        ];
        
        $templateMsg = $result;
        $templateMsg['app_id'] = 'wxe29132aebd8c9984';
        $templateMsg['app_secret'] = '50f3e3b15883a8c76a9d3a9c1011d71d';
        $templateMsg['admin_open_list'] = [
            ['open_id' => $idu->official_openid]
        ];
   
        $templateMsg['mall'] = \Yii::$app->mall;
        $templateMsg['token'] = $token;
      

        //$a = new MpTplMessageJob($templateMsg);
        //$a->execute(1);
        $queueId = \Yii::$app->queue->delay(5)->push(new MpTplMessageJob($templateMsg));
        return [
            'queueId' => $queueId,
            'token' => $token
        ];
    }
}
