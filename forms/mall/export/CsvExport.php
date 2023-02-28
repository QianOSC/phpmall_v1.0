<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\forms\mall\export;


use PHPUnit\Framework\Error\Error;

class CsvExport extends \app\core\CsvExport
{
    public function handleRowData($data)
    {
        try {
            $row = $data;
            foreach ($row as $key => $value) {
                if (is_array($value)) {
                    $newValText = '';
                    foreach ($value as $item) {
                        if (isset($item['value']) && is_string($item['value'])) {
                            $valText = (isset($item['label']) ? $item['label'] : '') . '：' . $item['value'];
                        } else {
                            $valText = (isset($item['label']) ? $item['label'] : '') . '：';
                        }
                        if ($item['key'] == 'radio') {
                            if (isset($item['value']) && $item['value']) {
                                $valText = (isset($item['label']) ? $item['label'] : '') . "：" . $item['value'];
                            } else {
                                $valText = (isset($item['label']) ? $item['label'] : '') . "：";
                            }
                        }
                        if ($item['key'] == 'checkbox') {
                            $valText = '';
                            if (isset($item['value'])) {
                                if (is_array($item['value'])) {
                                    foreach ($item['value'] as $valItem) {
                                        $valText .= $valItem . '|';
                                    }
                                    $valText = substr($valText, 0, strlen($valText) - 1);
                                } else {
                                    $valText = $item['value'];
                                }
                                $valText = (isset($item['label']) ? $item['label'] : '') . '：' . $valText;
                            } else {
                                $valText = (isset($item['label']) ? $item['label'] : '') . '：';
                            }
                        }
                        if (isset($item['key']) && $item['key'] == 'img_upload') {
                            $valText = '';
                            if (isset($item['value'])) {
                                if (is_array($item['value'])) {
                                    foreach ($item['value'] as $valItem) {
                                        $valText .= $valItem . '|';
                                    }
                                    $valText = substr($valText, 0, strlen($valText) - 1);
                                } else {
                                    $valText = $item['value'];
                                }
                                $valText = (isset($item['label']) ? $item['label'] : '') . '：' . $valText;
                            } else {
                                $valText = (isset($item['label']) ? $item['label'] : '') . '：';
                            }
                        }

                        if ($valText) {
                            $newValText = $newValText . ',' . $valText;
                        }
                        if ($newValText) {
                            $newValText = ltrim($newValText, ',');
                        }
                    }


                    $newValText = $this->check($newValText);
                    $row[$key] = mb_convert_encoding($newValText, 'GBK', 'UTF-8');
                } else {
                    $newValue = $this->check($value);
                    $row[$key] = mb_convert_encoding($newValue, 'GBK', 'UTF-8');
                }
            }

            $data = array_values($row);
            return $data;
        } catch (\Exception $e) {
            throw new \Exception($e);
        }
    }
}