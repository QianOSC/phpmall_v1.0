<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\forms\mall\export;

use app\core\CsvExport;
use app\forms\mall\statistics\DataForm;
use app\models\CoreFile;
use app\models\Order;

class DataStatisticsExport extends BaseExport
{
    public $type;

    public function fieldsList()
    {
        if ($this->type == 1) {
            return [
                [
                    'key' => 'name',
                    'value' => '商品',
                ],
                [
                    'key' => 'total_price',
                    'value' => '销售额',
                ],
                [
                    'key' => 'num',
                    'value' => '销售量',
                ],
            ];
        } else {
            return [
                [
                    'key' => 'user_id',
                    'value' => 'ID',
                ],
                [
                    'key' => 'nickname',
                    'value' => '用户',
                ],
                [
                    'key' => 'mobile',
                    'value' => '手机号',
                ],
                [
                    'key' => 'total_price',
                    'value' => '支付金额',
                ],
                [
                    'key' => 'num',
                    'value' => '购买件数',
                ],
            ];
        }
    }

    public function export($query = null)
    {
        \Yii::warning('导出开始');
        try {
            $query = $this->query;
            $list = $query->limit(100)->asArray()->all();

            if ($this->type == 1) {
                $list = Order::getGoods_name($list);
            }

            if ($this->type == 2) {
                foreach ($list as $key => $v) {
                    $list[$key]['user_id'] = $v['user']['id'];
                    $list[$key]['nickname'] = $v['user']['nickname'];
                    $list[$key]['mobile'] = $v['user']['mobile'];
                    $list[$key]['avatar'] = $v['user']['userInfo']['avatar'];
                    unset($list[$key]['user']);
                }
            }

            $this->getFields();
            // 文件夹唯一标识
            $id = \Yii::$app->mall->id . '_' . $this->mch_id;
            // 唯一文件名称
            $fileName = sprintf('%s%s%s%s', $this->getFileName(), $id, time(), '.csv');

            $coreFile = new CoreFile();
            $coreFile->mall_id = \Yii::$app->mall->id;
            $coreFile->mch_id = $this->mch_id;
            $coreFile->file_name = $fileName;

            $this->transform($list);
            $dataList = $this->getDataList();
            (new CsvExport())->newAjaxExport($dataList, $this->fieldsNameList, $fileName, $id);

            $coreFile->status = 1;
            $coreFile->percent = 1;
            $res = $coreFile->save();
            if (!$res) {
                throw new \Exception($this->getErrorMsg($coreFile));
            }

            \Yii::warning('导出结束');
        }catch(\Exception $exception) {
            \Yii::error('导出异常');
            \Yii::error($exception);

            $coreFile->status = 2;
            $coreFile->save();
        }
    }

    public function getFileName()
    {
        switch ($this->type) {
            case 1:
                $fileName = '商品购买力排行';
                break;
            case  2:
                $fileName = '用户购买力排行';
                break;
            default:
                $fileName = '购买力排行';
        }

        return $fileName;
    }

    protected function transform($list)
    {
        $newList = [];
        $arr = [];

        foreach ($list as $key => $item) {
            $item['total_price'] = floatval($item['total_price']);
            $item['num'] = intval($item['num']);

            $arr = array_merge($arr, $item);


            $newList[] = $arr;
        }
        $this->dataList = $newList;
    }

    protected function getFields()
    {
        $arr = [];
        foreach ($this->fieldsList() as $key => $item) {
            $arr[$key] = $item['key'];
        }
        $this->fieldsKeyList = $arr;
        parent::getFields(); // TODO: Change the autogenerated stub
    }
}
