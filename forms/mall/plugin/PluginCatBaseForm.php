<?php


namespace app\forms\mall\plugin;


use app\models\BaseQuery\BaseActiveQuery;
use app\models\CorePlugin;
use app\models\Model;
use app\models\PluginCat;

class PluginCatBaseForm extends Model
{
    protected $cats;
    protected $otherPlugins;
    protected $catCondition;
    protected $searchOtherPlugins = true;

    protected function baseSearch()
    {
        $query = PluginCat::find()->where([
            'is_delete' => 0,
        ])->with(['plugins' => function ($query) {
            /** @var BaseActiveQuery $query */
            $query->orderBy('sort');

        }]);
        if ($this->catCondition) {
            $query->andWhere($this->catCondition);
        }
        $this->cats = $query->asArray()->all();
        if ($this->searchOtherPlugins) {
            $pluginIds = [];
            foreach ($this->cats as $cat) {
                foreach ($cat['plugins'] as $plugin) {
                    $pluginIds[] = $plugin['id'];
                }
            }
            $this->otherPlugins = CorePlugin::find()->where(['AND', [
                'NOT IN', 'id', $pluginIds
            ], 'online=0'])->orderBy('sort')->asArray()->all();
        }
    }
}