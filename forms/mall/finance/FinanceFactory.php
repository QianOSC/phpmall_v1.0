<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\forms\mall\finance;

class FinanceFactory
{
    public function create($operate)
    {
        if ($operate == 'share') {
            $class = 'app\\forms\\mall\\share\\CashApplyForm';
        } elseif (in_array($operate, ['bonus', 'stock', 'region', 'mch'])) {
            $class = "app\\plugins\\{$operate}\\forms\\mall\\CashApplyForm";
        } else {
            $plugin = "app\\plugins\\{$operate}\\Plugin";
            if (!class_exists($plugin)) {
                throw new \Exception('未安装' . $operate . '插件');
            }
            if (!method_exists($plugin, 'getCashApplyForm')) {
                throw new \Exception('插件' . $operate . '不支持该功能');
            }
            return (new $plugin())->getCashApplyForm();
        }
        if (!class_exists($class)) {
            throw new \Exception($operate . '操作失败');
        }
        $result = new $class();
        return $result;
    }
}
