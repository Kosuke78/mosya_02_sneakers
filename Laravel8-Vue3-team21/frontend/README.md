1. 必要なパッケージをインストールする
npm install

2. ブラウザを自動的に更新したい場合は以下コマンドを実行した状態で作業する
npm run serve

3. ビルドする
npm run build

4. Laravelプロジェクトディレクトリでプロジェクトを起動する
php artisan serve

5. localhostに接続しVueの初期画面が表示されれば
Laravel8とVueプロジェクトの連携が完了

6. vueプロジェクトディレクトリにvue3-google-mapライブラリをインストール
npm install vue3-google-map

7. componentsフォルダにMapComponent.vueファイルを作成
<template>
  <GoogleMap
  api-key="YOUR_GOOGLE_MAPS_API_KEY"
  style="width: 100%; height: 500px"
  :center="center"
  :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 40.689247, lng: -74.044502 }

    return { center }
  },
})
</script>

8. src/main.jsを編集
import { createApp } from 'vue'
import MapComponent from './components/MapComponent.vue'

createApp(MapComponent).mount('#app')

9. ビルド後、localhostに接続しマップが表示されれば成功


