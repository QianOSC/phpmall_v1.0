<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\validators;


use yii\validators\Validator;

class PhoneNumberValidator extends Validator
{
    public $pattern = '/^1\d{10}$/';

    public function validateAttribute($model, $attribute)
    {
        $value = $model->$attribute;
        $pattern = $this->pattern;
        if ($value && !preg_match($pattern, $value)) {
            $model->addError($attribute, "{$model->getAttributeLabel($attribute)}格式不正确。");
        }
    }
}
