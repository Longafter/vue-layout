<template>
  <AMap width="100%" height="100%" :options="amapOptions" @map="getAMapData" />
</template>

<script>
import AMap from '@/components/AMap'

export default {
  name: 'AMapDemo',
  components: {
    AMap
  },
  data: () => ({
    amapOptions: {
      zoom: 14,
      resizeEnable: true,
      viewMode: '3D',
      mapStyle: 'amap://styles/normal'
    },
    AMap: null, // 地图对象
    amap: null // 当前地图实例
  }),
  methods: {
    /**
     * 地图加载完毕回调
     * @param amap
     * @param AMap
     */
    getAMapData(amap, AMap) {
      // 从组件获取地图 amap 对象
      this.amap = amap
      // 从组件获取地图 AMap 静态对象
      this.AMap = AMap
    }
  }
};
</script>


<style lang='scss' scoped>

</style>