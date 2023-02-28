<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\controllers\api\admin;

use app\forms\mall\postage_rules\PostageRulesListForm;

class PostageRuleController extends AdminController
{
    public function actionAllList()
    {
        $form = new PostageRulesListForm();

        return $this->asJson($form->allList());
    }
}