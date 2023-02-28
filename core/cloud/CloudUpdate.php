<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\core\cloud;


use Alchemy\Zippy\Zippy;
use app\forms\common\CommonOption;
use app\models\Option;

class CloudUpdate extends CloudBase
{
    public $classVersion = '4.2.10';

    public function getVersionData()
    {
        return true;
    }

    public function update()
    {
        $versionData = $this->getVersionData();
        if (!isset($versionData['next_version']) || !$versionData['next_version']) {
            throw new CloudException('已无新版本。');
        }
        $version = $versionData['next_version']['version'];
        $src = $versionData['next_version']['src_file'];
        $tempFile = \Yii::$app->runtimePath . '/update-package/' . $version . '/src.zip';
        $this->download($src, $tempFile);
        $zippy = Zippy::load();
        $archive = $zippy->open($tempFile);
        $archive->extract(\Yii::$app->basePath);
        $this->clearOpcache();
        unset($archive);

        $currentVersion = CommonOption::get(Option::NAME_VERSION);
        if (!$currentVersion) {
            $currentVersion = '0.0.0';
        }
        $lastVersion = $currentVersion;

        $versions = require \Yii::$app->basePath . '/versions.php';
        foreach ($versions as $v => $f) {
            $lastVersion = $v;
            if (version_compare($v, $currentVersion) > 0) {
                if ($f instanceof \Closure) {
                    $f();
                }
            }
        }
        CommonOption::set(Option::NAME_VERSION, $lastVersion);
        return true;
    }

    private function clearOpcache()
    {
        if (function_exists('opcache_reset')) {
            opcache_reset();
        }
    }
}
