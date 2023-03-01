<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */
$components = [
    'app-attachment',
    'app-gallery',
    'app-picker',
    'app-pick-link',
    'app-banner',
    'app-image',
    'app-ellipsis',
    'app-map',
    'app-district',
    'app-upload',
    'app-export-dialog',
    'app-template',
    'app-image-upload',
    'app-form',
    'app-test',
    'input/app-input-number',
    'app-new-export-dialog-2',
];
$html = "";
foreach ($components as $component) {
    $html .= $this->renderFile(__DIR__ . "/{$component}.php") . "\n";
}
echo $html;
