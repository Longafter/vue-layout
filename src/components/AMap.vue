<template>
  <div class='amap-container'>
    <div ref="amap" class="amap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import loadScripts from '@/common/map/loadScripts.js'

export default {
  name: 'AMapContainer',
  props: {
    width: {
      require: false,
      type: String,
      default: '100%'
    },
    height: {
      require: false,
      type: String,
      default: '600px'
    },
    options: {
      require: false,
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    amap: null,
    amapInfo: {
      key: 'ead0df28e760c7f0b7ab50c3e36eb340'
    }
  }),
  created() {
    this.initAMap()
  },
  beforeDestroy() {
    // 销毁地图
    if (!this.amap) {
      return
    }
    this.amap.destroy()
    this.amap = null
  },
  methods: {
    initAMap() {
      loadScripts([{
        id: 'ampa',
        url: `https://webapi.amap.com/maps?v=2.0&key=${this.amapInfo.key}&plugin=AMap.PolygonEditor`
      }]).then(() => {
        this.amap = new window.AMap.Map(this.$refs['amap'], this.options)
        this.$emit('map', this.amap, window.AMap)
      })
    }
  }
};
</script>


<style lang='scss' scoped>
.amap-container {
  width: 100%;
  height: 100%;

  .amap {
    width: 100%;
    height: 100%;
  }
}
</style>