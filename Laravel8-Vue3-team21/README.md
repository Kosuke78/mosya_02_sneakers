 1. composerをインストールする
 composerインストーラを公式サイトよりダウンロードしインストール

 2. Laravelをインストールする
 composer global require laravel/installer

 3. vue-cliをインストールする
 npm install vue@next
 
 4. Laravel8プロジェクトを作成する
 composer create-project "laravel/laravel=8.*" プロジェクト名

 5. Laravel8の不要なファイルを削除する
 cd プロジェクト名
 rm -rf package.json webpack.mix.js yarn.lock resources/assets

 6. Laravel8プロジェクトディレクトリでvueプロジェクトを作成する
 vue create プロジェクト名

 7. vueプロジェクトでvue.config.jsファイルを作成する

 module.exports = {
  // proxy API requests to Valet during development
  devServer: {
    proxy: 'http://laracon.test'
  },

  // output built static files to Laravel's public dir.
  // note the "build" script in package.json needs to be modified as well.
  outputDir: '../public',

  // modify the location of the generated HTML file.
  // make sure to do this only in production.
  indexPath: process.env.NODE_ENV === 'production'
    ? '../resources/views/index.blade.php'
    : 'index.html'
}

8. vueプロジェクトでpackage.jsonファイルを編集する
"scripts": {
  "serve": "vue-cli-service serve",
- "build": "vue-cli-service build",
+ "build": "rm -rf ../public/{js,css,img} && vue-cli-service build --no-clean",
  "lint": "vue-cli-service lint"
},

9. laravel8プロジェクトでroutes/web.phpファイルを編集する
<?php
// エラーが出る場合は "SpaController"　→　"app/Http/Controllers/SpaController" にする
Route::get('/{any}', 'SpaController@index')->where('any', '.*');

Laravel8プロジェクトでapp/Http/Controllers/SpaController.phpを作成する

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SpaController extends Controller
{
    public function index()
    {
        return view('index');
    }




  
