<template>
  <div>
    <HeaderLogo :logo="logo"/>
    <div class="outer-container">
      <div class="button-arrow">
        <!-- <button
          v-if="activeStep > 1"
          @click="activeStep--"
          ><el-icon class="el-icon--left"><ArrowLeft /></el-icon></button> -->
          <button
          v-if="activeStep > 1"
          @click="activeStep--"
          ><</button>
    </div>
      <div class="img-container">
      
      <div class="img-box" :class="isActive(1)" v-on:click="addNext(1)">
        <el-image :src="getImg(1)"  />
      </div>
      <div class="img-box" :class="isActive(2)" v-on:click="addNext(2)">
        <el-image :src="getImg(2)" />
      </div>
      
    </div>
    <div class="button-arrow">
        <!-- <button
          v-if="activeStep > 0 && activeStep < 12"
          @click="nextStep"
          ><el-icon class="el-icon--right"><ArrowRight /></el-icon></button
        > -->
        <button
          v-if="activeStep > 0 && activeStep < 12"
          @click="nextStep"
          >></button
        >
    </div>
    </div>
    <div class="next-button">
      <button
        v-if="totalSelect == 12"
        round
        @click="toSelect"
        >下一步</button
      >
    </div>
    <div class="bottom-text">
      <div>测试前必读：</div>
      <div>
        <!-- <el-text   class="mx-1" size="small" style="text-align: left"> -->
        1. 选择:
        <div>
          从2个卡牌中,选择相对更加符合自己的性格特点,一共选择12张。({{
            totalSelect
          }}/12) <br />
          选错了可以点击图片两边的&gt;或&lt;来前后切换并重新选择。
        </div>

        <!-- </el-text> -->
      </div>
      <div>
        2. 排序：
        <div>
          把最符合自己的4张放在第1排。<br />
          比较符合自己的4张放在第2排。<br />
          一般符合自己的4张放在第3排。<br />
        </div>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, reactive } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";
import {
  ArrowLeft,
  ArrowRight,
  Delete,
  Edit,
  Share,
} from '@element-plus/icons-vue'
// 1
// 正红色2分：主动帮助别人
// 反绿色2分：静待问题过去

import red_2_1 from "@/assets/images_new/red_2_1.png";
import green_2_1 from "@/assets/images_new/green_2_1.png";

// 2.
// 红色1，积极乐观
// 蓝色3，悲观多疑

import red_1_0 from "@/assets/images_new/red_1_0.png";
import blue_3_1 from "@/assets/images_new/blue_3_1.png";

// 3.
// 红色1分，主动分享
// 蓝色3分，保守谨慎
import red_1_1 from "@/assets/images_new/red_1_1.png";
import blue_3_0 from "@/assets/images_new/blue_3_0.png";

// 4.
// 红色2分，别人认可更重要
// 黄色2分，结果目标更重要

import red_2_0 from "@/assets/images_new/red_2_0.png";
import yellow_2_1 from "@/assets/images_new/yellow_2_1.png";

// 5.
// 红色3分，情绪多变
// 蓝色1分，情绪内敛

import red_3_1 from "@/assets/images_new/red_3_1.png";
import blue_1_1 from "@/assets/images_new/blue_1_1.png";

// 6.
// 红色3分，随意自由
// 蓝色1分，条理计划

import red_3_0 from "@/assets/images_new/red_3_0.png";
import blue_1_0 from "@/assets/images_new/blue_1_0.png";

// 7.
// 蓝色2分，慢慢研究问题
// 黄色2分，快速解决问题

import blue_2_1 from "@/assets/images_new/blue_2_1.png";
import yellow_2_0 from "@/assets/images_new/yellow_2_0.png";

// 8.
// 蓝色2分，坚持原则更重要
// 绿色2分，关心他人感受更重要
import blue_2_0 from "@/assets/images_new/blue_2_0.png";
import green_2_0 from "@/assets/images_new/green_2_0.png";

// 9.
// 黄色1分，目标坚定
// 绿色3分，缺乏主见
import yellow_1_1 from "@/assets/images_new/yellow_1_1.png";
import green_3_1 from "@/assets/images_new/green_3_1.png";

// 10.
// 黄色1分，进取心强
// 绿色3分，逆来顺受

import yellow_1_0 from "@/assets/images_new/yellow_1_0.png";
import green_3_0 from "@/assets/images_new/green_3_0.png";

// 11.
// 黄色3分，批判性强
// 绿色1分，宽容平和

import yellow_3_1 from "@/assets/images_new/yellow_3_1.png";
import green_1_0 from "@/assets/images_new/green_1_0.png";

// 12
// 黄色3分，掌控一切
// 绿色1分，以他人为中心

import yellow_3_0 from "@/assets/images_new/yellow_3_0.png";
import green_1_1 from "@/assets/images_new/green_1_1.png";

const images = [
  [
    { src: red_2_1, score: 2, value: "11" },
    { src: green_2_1, score: 2, value: "12" },
  ],
  [
    { src: red_1_0, score: 1, value: "21" },
    { src: blue_3_1, score: 3, value: "22" },
  ],
  [
    { src: red_1_1, score: 1, value: "31" },
    { src: blue_3_0, score: 3, value: "32" },
  ],
  [
    { src: red_2_0, score: 2, value: "41" },
    { src: yellow_2_1, score: 2, value: "42" },
  ],
  [
    { src: red_3_1, score: 3, value: "51" },
    { src: blue_1_1, score: 1, value: "52" },
  ],
  [
    { src: red_3_0, score: 3, value: "61" },
    { src: blue_1_0, score: 1, value: "62" },
  ],
  [
    { src: blue_2_1, score: 2, value: "71" },
    { src: yellow_2_0, score: 2, value: "72" },
  ],
  [
    { src: blue_2_0, score: 2, value: "81" },
    { src: green_2_0, score: 2, value: "82" },
  ],
  [
    { src: yellow_1_1, score: 1, value: "91" },
    { src: green_3_1, score: 3, value: "92" },
  ],
  [
    { src: yellow_1_0, score: 1, value: "a1" },
    { src: green_3_0, score: 3, value: "a2" },
  ],
  [
    { src: yellow_3_1, score: 3, value: "b1" },
    { src: green_1_0, score: 1, value: "b2" },
  ],
  [
    { src: yellow_3_0, score: 3, value: "c1" },
    { src: green_1_1, score: 1, value: "c2" },
  ],
];
import HeaderLogo from "@/components/HeaderLogo.vue";
// logo
import logo from "@/assets/images_new/icon.png";

import { useSelectValueStore } from "@/stores/selected";
import { watch } from "vue";

import { ElMessage } from "element-plus";

const selectedValue = useSelectValueStore();

const totalSelect = computed(() => {
  return selectedValue.getTotalSelected();
});

const router = useRouter();
function getImg(index: any) {
  return images[activeStep.value - 1][index - 1].src;
}
function isActive(index: Number) {
  // console.log(index); 这里代表足左右，再加上step就可以确定当前的图片是否被选择
  if (index == 1) {
    return selectedValue.getRadio(activeStep.value).slice(-1) === "1"
      ? "active"
      : "";
  }
  if (index == 2) {
    return selectedValue.getRadio(activeStep.value).slice(-1) === "2"
      ? "active"
      : "";
  }
  return "";
}
function toSelect() {
  router.push({ path: "/select" });
}
function toHome() {
  router.push({ path: "/" });
}
const activeStep = ref(1);

const mesasgeTip = () => {
  ElMessage({
    message: "请点击选择的卡片.",
    type: "warning",
  });
};

function nextStep() {
  if (selectedValue.getRadio(activeStep.value) === "") {
    mesasgeTip();
  } else {
    if (activeStep.value < 12) {
      activeStep.value++;
    }

    
  }
}
function addNext(index: any) {
  console.log(index);
  setTimeout(() => {
    selectedValue.setRadio(
      activeStep.value,
      images[activeStep.value - 1][index - 1].value
    );
    if (selectedValue.getRadio(activeStep.value + 1) === "") {
      nextStep();
    }
  }, 400);
}
// document.addEventListener('touchstart', function(e) {
//   e.preventDefault();
// }, { passive: false });
</script>

<style scoped>
.outer-container{
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-items: center;
  justify-content: stretch;
}
.button-arrow {
  width: 20%;
  display: flex;
  align-items: center; /*垂直居中*/
  justify-content: center;
  flex: 0 0 48px; 
}
/* .button-arrow:first {  
  justify-content: ce;  
}
.button-arrow:last-of-type {
  justify-content: end; 
} */
.button-arrow > button {
  width: 100%;
  height: 80%;
  background-color: white;
  border: 0;
  font-weight: bold;
  font-size: 36px;
  color: #666;
  text-shadow: gold 1px 0 3px;
  
}
.img-container {
  /* margin-top: 2%; */
  /* width: 90%; */
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
}
.img-box {
  padding: 5px;

  /* img 是行内元素默认会换行这里需要掉 */
  font-size: 0;
}
.active {
  /* background: var(--el-menu-active-color); */
  background-color:#04f9ea;
}

@media (max-width: 600px) {
  .bottom-text {
    /* margin-top: 1%; */
    margin-left: 2%;
  }
  .bottom-text > div:first-child {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #ff5733;
  }
  .bottom-text > div:not(:first-child) {
    font-size: 16px;
    color: #666;
    font-weight: bold;
    margin-bottom: 10px;
    line-height: 1.6;
  }
}
.next-button{
  margin-top: 5%;
  text-align: center;
  font-weight:900;
  font-size: 26px;

}
.next-button>button{
  background-color: gold;
  border: 0;
  border-radius: 28px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
</style>
