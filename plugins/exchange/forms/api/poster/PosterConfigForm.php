<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\exchange\forms\api\poster;


use app\core\response\ApiCode;
use app\forms\common\poster\PosterConfigTrait;
use app\models\Model;
use app\plugins\exchange\Plugin;


class PosterConfigForm extends Model
{
    use PosterConfigTrait;

    public $goods_id;

    public function rules()
    {
        return [
            [['goods_id'], 'required'],
            [['goods_id'], 'integer'],
        ];
    }

    public function getDetail()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }

        try {
            return [
                'code' => ApiCode::CODE_SUCCESS,
                'data' => [
                    'config' => $this->getConfig(),
                    'info' => $this->getAll(),
                ]
            ];
        } catch (\Exception $e) {
            return [
                'code' => ApiCode::CODE_ERROR,
                'msg' => $e->getMessage(),
            ];
        }
    }

    public function getExtra(): array
    {
        $model = new PosterCustomize();
        $data = $model->traitMultiMapContent();
        $extra_multiMap = $this->formatType($data);
        return [
            'extra_multiMap' => $extra_multiMap,
        ];
    }


    public function getPlugin(): array
    {
        return [
            'sign' => (new Plugin())->getName(),
        ];
    }
}