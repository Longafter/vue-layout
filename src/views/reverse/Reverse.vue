<template>
  <div class="Reverse">
    <div class="Demo">
      <div class="Before" :class="isTop ? 'contain-Before' : ''">
        这个是正面内容
        <div class="content" @click="handleBefore">点我翻转</div>
      </div>
      <div class="After" :class="isTop ? 'contain-After' : ''">
        这个是背面内容
        <button @click="handleAfter">返回</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reverse',
  data() {
    return {
      isTop: false
    };
  },
  methods: {
    handleBefore() {
      if (!this.isTop) {
        this.isTop = true;
      }
    },
    handleAfter() {
      if (this.isTop) {
        this.isTop = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.Demo {
  width: 375px;
  height: 300px;
  margin-top: 50px;
  margin-left: 500px;
  position: relative;
  perspective: 800px;
  box-sizing: border-box;

  .Before {
    width: 300px;
    height: 200px;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    transition: 1.5s;
    border: 1px solid green;

    .content {
      width: 50px;
      height: 80px;
      border: 1px solid black;
      position: absolute;
      bottom: 10px;
      right: 10px;
      cursor: pointer;
    }
  }

  .After {
    width: 300px;
    height: 200px;
    position: absolute;
    top: 0;
    left: 0;
    text-indent: 2em;
    transform: rotateY(-180deg);
    backface-visibility: hidden;
    transition: 1.5s;
    border: 1px solid blue;

    button {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
  }

  .contain-Before {
    transform: rotateY(180deg);
  }

  .contain-After {
    transform: rotateY(0deg);
  }
}
</style>
