<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 * @author Qian
 */

namespace app\controllers\api;

use app\forms\api\full_reduce\ActivityForm;

class FullReduceController extends ApiController
{
    public function actionIndex()
    {
        $form = new ActivityForm();
        return $this->asJson($form->getActivity());
    }
}
