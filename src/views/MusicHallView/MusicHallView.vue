// @ts-nocheck -- 暂时不忽略
<script lang='ts'>
// 音乐馆 -- 页面
import { onBeforeMount, reactive, ref } from "vue";
// 引入接口
import { getTopListApi } from "../../api/recommend";
// 引入测试
import { service } from "../../test/request";
export default {
  name: "MusicHallView",
  setup() {
    onBeforeMount(() => {
      // createInit();
      initGetData()
    });


    async function createInit() {
      const res = await service.get("/equipment");
      showField.value = res.data;
    }
    const showField = ref([]);

    function initGetData(){
      getTopListApi(()=>{

      })
    }


    return { navigator, showField };
  },
};
</script>

<template>
  <div class="MusicHallView">
    <!--  -->
    <div class="musicHallBox">
      <!-- <div v-for="(item, index) in showField" :key="index">
        {{ item }} __________ <br />
        {{ navigator[item] }}
        <hr />
      </div> -->
    </div>
  </div>
</template>

<style scoped lang="less">
.MusicHallView {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .musicHallBox {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
}
</style>