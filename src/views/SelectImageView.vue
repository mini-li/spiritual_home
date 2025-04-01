<template>
  <div>
    <HeaderLogo :logo="logo" />
    <div class="select-header">
      <span>最符合的四个卡片</span>
    </div>
    <VueDraggable
      v-model="list1"
      class="draggable-container"
      id="drag-list1"
      group="myImage"
      @update="onUpdate1"
      @add="onAdd1"
      @remove="remove1"
    >
      <div v-for="item in list1" :key="item.id" class="image_container">
        <el-image :src="getSrc(item.id)" fit="contain" class="disable-img"/>
        <!-- <div class="imgMask"></div> -->
      </div>

      <div v-if="list1.length < 4" class="place_container">
        <span>最符合</span>
      </div>
      <div v-if="list1.length < 3" class="place_container">
        <span>最符合</span>
      </div>
      <div v-if="list1.length < 2" class="place_container">
        <span>最符合</span>
      </div>
      <div v-if="list1.length < 1" class="place_container">
        <span>最符合</span>
      </div>
    </VueDraggable>

    <div class="select-header">
      <span>比较符合的四个卡片</span>
    </div>

    <VueDraggable
      v-model="list2"
      class="draggable-container"
      id="drag-list2"
      group="myImage"
      @update="onUpdate2"
      @add="onAdd2"
      @remove="remove2"
    >
      <div
        v-for="item in list2"
        :key="item.id"
        class="image_container cursor-move h-30 bg-gray-500/5 rounded p-3"
      >
        <el-image :src="getSrc(item.id)" fit="contain" class="disable-img"/>
      </div>
      <div v-if="list2.length < 4" class="place_container">
        <span>比较符合</span>
      </div>
      <div v-if="list2.length < 3" class="place_container">
        <span>比较符合</span>
      </div>
      <div v-if="list2.length < 2" class="place_container">
        <span>比较符合</span>
      </div>
      <div v-if="list2.length < 1" class="place_container">
        <span>比较符合</span>
      </div>
    </VueDraggable>

    <div class="select-header">
      <span>一般符合的四个卡片</span>
    </div>
    <VueDraggable
      v-model="list3"
      class="draggable-container"
      id="drag-list3"
      group="myImage"
      @update="onUpdate"
      @add="onAdd3"
      @remove="remove3"
    >
      <div
        v-for="item in list3"
        :key="item.id"
        class="image_container cursor-move h-30 bg-gray-500/5 rounded p-3"
      >
        <el-image :src="getSrc(item.id)" fit="contain" class="disable-img"/>
      </div>
      <div v-if="list3.length < 4" class="place_container">
        <span>一般符合</span>
      </div>
      <div v-if="list3.length < 3" class="place_container">
        <span>一般符合</span>
      </div>
      <div v-if="list3.length < 2" class="place_container">
        <span>一般符合</span>
      </div>
      <div v-if="list3.length < 1" class="place_container">
        <span>一般符合</span>
      </div>
    </VueDraggable>
    <div
      v-if="list1.length == 4 && list2.length == 4 && list3.length == 4"
      style="margin: 12px 0;"
    >
      <!-- <div> -->
      <el-row>
        <el-text
          size="large"
          tag="b"
          class="mx-1"
          style="
            background-color: #d7502f;
            border-radius: 5px;
            color: white;
            width: 24%;
            text-align: center;
          "
          >活泼型: {{ redScore }}分</el-text
        >
        <el-text
          size="large"
          tag="b"
          class="mx-1"
          style="
            background-color: #4693be;
            border-radius: 5px;
            color: white;
            width: 24%;
            text-align: center;
            margin-left: 3px;
          "
          >完美型: {{ blueScore }}分</el-text
        >
        <el-text
          size="large"
          tag="b"
          class="mx-1"
          style="
            background-color: #f7d522;
            border-radius: 5px;
            color: white;
            width: 24%;
            text-align: center;
            margin-left: 3px;
          "
          >力量型: {{ yellowScore }}分</el-text
        >
        <el-text
          size="large"
          tag="b"
          class="mx-1"
          style="
            background-color: #4aac4f;
            border-radius: 5px;
            color: white;
            width: 24%;
            text-align: center;
            margin-left: 3px;
          "
          >和平型: {{ greenScore }}分</el-text
        >
        <el-col>
          <h3>将当前页面截图发给心疗师解读</h3>
        </el-col>
      </el-row>
    </div>
    <div v-else :style="{ margin: '6px 0' }">
      <!-- <el-text  tag="b" class="mx-1" size="large" type="danger">测试前必读：</el-text> -->
      <el-text class="mx-1" size="large" type="danger">
        剩下需要排序的卡牌: {{ list0.length }} 张
      </el-text>
    </div>

    <VueDraggable
      v-model="list0"
      class="flex flex-col gap-2 p-4 w-300px h-300px m-auto bg-gray-500/5 rounded overflow-auto"
      id="drag-list0"
      group="myImage"
      data-step="1"
      data-title="测试引导"
      data-intro="按照最符合,比较符合,一般符合的优先顺序来排序,将下面12张卡牌移动到上面对应的灰色方框中"
      @update="onUpdate"
      @add="onAdd"
      @remove="remove0"
    >
      <!-- <el-row> -->
      <div
        v-for="item in list0"
        :key="item.id"
        class="image_container_first cursor-move h-30 bg-gray-500/5 rounded p-3"
      >
        <el-image :src="getSrc(item.id)" fit="contain"  οncοntextmenu="return false;" class="disable-img">
          <template #error>
            <div class="image-slot">
              <el-icon><icon-picture /></el-icon>
            </div>
          </template>
        </el-image>
      </div>
    </VueDraggable>
  </div>
  <!-- </el-main>
  </el-container> -->
</template>

<script lang="ts" setup>
import HeaderLogo from "@/components/HeaderLogo.vue";

import logo from "@/assets/images_new/icon.png";

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

const imageMap = new Map();
imageMap.set("11", red_2_1);
imageMap.set("12", green_2_1);

imageMap.set("21", red_1_0);
imageMap.set("22", blue_3_1);

imageMap.set("31", red_1_1);
imageMap.set("32", blue_3_0);

imageMap.set("41", red_2_0);
imageMap.set("42", yellow_2_1);

imageMap.set("51", red_3_1);
imageMap.set("52", blue_1_1);

imageMap.set("61", red_3_0);
imageMap.set("62", blue_1_0);

imageMap.set("71", blue_2_1);
imageMap.set("72", yellow_2_0);

imageMap.set("81", blue_2_0);
imageMap.set("82", green_2_0);

imageMap.set("91", yellow_1_1);
imageMap.set("92", green_3_1);

imageMap.set("a1", yellow_1_0);
imageMap.set("a2", green_3_0);

imageMap.set("b1", yellow_3_1);
imageMap.set("b2", green_1_0);

imageMap.set("c1", yellow_3_0);
imageMap.set("c2", green_1_1);

function getScore(num: string) {
  if (num == "11") {
    return { color: "red", score: 2 };
  }
  if (num == "12") {
    return { color: "green", score: 2 };
  }
  if (num == "21") {
    return { color: "red", score: 1 };
  }
  if (num == "22") {
    return { color: "blue", score: 3 };
  }
  if (num == "31") {
    return { color: "red", score: 1 };
  }
  if (num == "32") {
    return { color: "blue", score: 3 };
  }
  if (num == "41") {
    return { color: "red", score: 2 };
  }
  if (num == "42") {
    return { color: "yellow", score: 2 };
  }
  if (num == "51") {
    return { color: "red", score: 3 };
  }
  if (num == "52") {
    return { color: "blue", score: 1 };
  }
  if (num == "61") {
    return { color: "red", score: 3 };
  }
  if (num == "62") {
    return { color: "blue", score: 1 };
  }
  if (num == "71") {
    return { color: "blue", score: 2 };
  }
  if (num == "72") {
    return { color: "yellow", score: 2 };
  }
  if (num == "81") {
    return { color: "blue", score: 2 };
  }
  if (num == "82") {
    return { color: "green", score: 2 };
  }
  if (num == "91") {
    return { color: "yellow", score: 1 };
  }
  if (num == "92") {
    return { color: "green", score: 3 };
  }
  if (num == "a1") {
    return { color: "yellow", score: 1 };
  }
  if (num == "a2") {
    return { color: "green", score: 3 };
  }
  if (num == "b1") {
    return { color: "yellow", score: 3 };
  }
  if (num == "b2") {
    return { color: "green", score: 1 };
  }
  if (num == "c1") {
    return { color: "yellow", score: 3 };
  }
  if (num == "c2") {
    return { color: "green", score: 1 };
  }
}

import { useSelectValueStore } from "@/stores/selected";
import { ref, reactive, watch, computed, toRef,toRefs } from "vue";

import { RouterLink, RouterView, useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { VueDraggable, type DraggableEvent } from "vue-draggable-plus";
import introJs from "intro.js";
import "intro.js/introjs.css";
import { onMounted } from "vue";
import { sr } from "element-plus/es/locale/index.mjs";

const selectedValue = useSelectValueStore();

const lengthTip = () => {
  ElMessage({
    message: "一行最多放4张卡牌.",
    type: "warning",
  });
};

function onUpdate() {
  console.log("update");
}
function onUpdate1() {
  console.log("update1");
  console.log(list1.value);
}
function onUpdate2() {
  console.log("update2");
  console.log(list2.value);
}


function onAdd1(event: any) {
  console.log(event);
  const { oldIndex=0,newIndex=0 }= event;
  const  srcId = event.from.id;
  // console.log(srcId);
  // console.log(newIndex);
  // console.log(oldIndex);
  // console.log(clonedData);
  // console.log("---------------");
  // list1.value.forEach((item) => {
  //   console.log(item);
  // });
  if (list1.value.length > 4) {
    const destIndex = newIndex < 4 ? newIndex+1  : 3;
    // console.log("destIndex");
    // console.log(destIndex);
    //将多出来的图片找出来
    const oldItem = list1.value.splice(destIndex, 1);
    // console.log("oldItem");
    // console.log(oldItem[0]);
    if (srcId == "drag-list0" && oldItem.length > 0 ) {
      console.log("从第0个来");
      list0.value.splice(oldIndex+1, 0, oldItem[0]);
    } 
    if (srcId == "drag-list2"  && oldItem.length > 0) {
      console.log("从第二个来");
      list2.value.splice(oldIndex+1, 0, oldItem[0]);
    } 
    if (srcId == "drag-list3" && oldItem.length > 0 ) {
      console.log("从第三个来");
      list3.value.splice(oldIndex+1, 0, oldItem[0]);
    } 
  } 
}
function onAdd2(event: any) {
  console.log("add2");

  const { oldIndex=0,newIndex=0 }= event;
  const  srcId = event.from.id;
  if (list2.value.length > 4) {
    const destIndex = newIndex < 4 ? newIndex+1  : 3;
    //将多出来的图片找出来
    const oldItem = list2.value.splice(destIndex, 1);
    if (srcId == "drag-list0" && oldItem.length > 0 ) {
      console.log("从第0个来");
      list0.value.splice(oldIndex+1, 0, oldItem[0]);
    } 
    if (srcId == "drag-list1"  && oldItem.length > 0 ) {
      console.log("从第一个来");
      list1.value.splice(oldIndex+1, 0, oldItem[0]);
    } 
    if (srcId == "drag-list3" && oldItem.length > 0 ) {
      console.log("从第三个来");
      list3.value.splice(oldIndex+1, 0, oldItem[0]);
    } 
  } 
}

function onAdd3(event: any) {
  console.log("add3");
  const { oldIndex=0,newIndex=0 }= event;
  const  srcId = event.from.id;
  // console.log(event)
  if (list3.value.length > 4) {
    const destIndex = newIndex < 4 ? newIndex+1  : 3;
    console.log("destIndex");
    console.log(destIndex);
    //将多出来的图片找出来
    const oldItem = list3.value.splice(destIndex, 1);
    console.log("oldItem");
    console.log(oldItem[0]);
    if (srcId == "drag-list0" && oldItem.length > 0 ) {
      console.log("从第0个来");
      list0.value.splice(oldIndex+1, 0, oldItem[0]);
    } 
    if (srcId == "drag-list1"  && oldItem.length > 0 ) {
      console.log("从第一个来");
      list1.value.splice(oldIndex+1, 0, oldItem[0]);
    } 
    if (srcId == "drag-list2" && oldItem.length > 0 ) {
      console.log("从第二个来");
      list2.value.splice(oldIndex+1, 0, oldItem[0]);
    } 
  } 
}

function onAdd() {
  console.log("add");
}
function remove0() {
  console.log("remove0");
}
function remove1() {
  console.log("remove1");
  // console.log(list1.value);
}
function remove2() {
  console.log("remove2");
  // console.log(list2.value);
}
function remove3() {
  console.log("remove3");
}
function getSrc(index_key: string) {
  return imageMap.get(index_key);
}

let list1: any[any] = ref<[]>([]);
let list2: any[any] = ref<[]>([]);
let list3: any[any] = ref<[]>([]);
const list0 = ref([
  { id: selectedValue.radio1 },
  { id: selectedValue.radio2 },
  { id: selectedValue.radio3 },
  { id: selectedValue.radio4 },
  { id: selectedValue.radio5 },
  { id: selectedValue.radio6 },
  { id: selectedValue.radio7 },
  { id: selectedValue.radio8 },
  { id: selectedValue.radio9 },
  { id: selectedValue.radio10 },
  { id: selectedValue.radio11 },
  { id: selectedValue.radio12 },
]);
const router = useRouter();
function toHome() {
  router.push({ path: "/" });
}

// watch(list1, (newList1) => {
//   if (newList1.length > 4) {
//     // console.log("list1 old");
//     // console.log(list1.value);
//     // console.log("list1 多余4个了。");
//     // console.log(newList1);
//     // console.log(newList1.value);
//     list0.value.push(newList1.pop());
//   }
// });

// watch(list2, (newList2) => {
//   if (newList2.length > 4) {
//     console.log("list2 多余4个了。");
//     console.log(newList2);
//     console.log(newList2.value);
//     list0.value.push(newList2.pop());
//   }
// });
// watch(list3, (newList3) => {
//   if (newList3.length > 4) {
//     console.log("list3 多余4个了。");
//     console.log(newList3);
//     console.log(newList3.value);
//     list0.value.push(newList3.pop());
//   }
// });

const redScore = computed(() => {
  let redS = 0;
  list1.value.forEach((item) => {
    console.log("-----");
    console.log(item);
    let obj = getScore(<string>item.id);
    if (obj?.color == "red") {
      redS += obj?.score + 2;
    }
  });
  list2.value.forEach((item) => {
    let obj = getScore(<string>item.id);
    if (obj?.color == "red") {
      redS += obj?.score + 1;
    }
  });
  list3.value.forEach((item) => {
    let obj = getScore(<string>item.id);
    if (obj?.color == "red") {
      redS += obj?.score;
    }
  });
  return redS;
});
const blueScore = computed(() => {
  let redB = 0;
  list1.value.forEach((item) => {
    let obj = getScore(<string>item.id);
    if (obj?.color == "blue") {
      redB += obj?.score + 2;
    }
  });
  list2.value.forEach((item) => {
    let obj = getScore(<string>item.id);
    if (obj?.color == "blue") {
      redB += obj?.score + 1;
    }
  });
  list3.value.forEach((item) => {
    let obj = getScore(<string>item.id);
    if (obj?.color == "blue") {
      redB += obj?.score;
    }
  });
  return redB;
});
const yellowScore = computed(() => {
  let redY = 0;
  list1.value.forEach((item) => {
    let obj = getScore(<string>item.id);
    if (obj?.color == "yellow") {
      redY += obj?.score + 2;
    }
  });
  list2.value.forEach((item) => {
    let obj = getScore(<string>item.id);
    if (obj?.color == "yellow") {
      redY += obj?.score + 1;
    }
  });
  list3.value.forEach((item) => {
    let obj = getScore(<string>item.id);
    if (obj?.color == "yellow") {
      redY += obj?.score;
    }
  });
  return redY;
});
const greenScore = computed(() => {
  let redG = 0;
  list1.value.forEach((item) => {
    let obj = getScore(<string>item.id);
    if (obj?.color == "green") {
      redG += obj?.score + 2;
    }
  });
  list2.value.forEach((item) => {
    let obj = getScore(<string>item.id);
    if (obj?.color == "green") {
      redG += obj?.score + 1;
    }
  });
  list3.value.forEach((item) => {
    let obj = getScore(<string>item.id);
    if (obj?.color == "green") {
      redG += obj?.score;
    }
  });
  return redG;
});
function guide() {
  introJs()
    .setOptions({
      nextLabel: "下一步", // 下一个按钮文字
      prevLabel: "上一步", // 上一个按钮文字
      // skipLabel: '跳过',    // 跳过按钮文字
      doneLabel: "完成", // 完成按钮文字
      hidePrev: true, // 在第一步中是否隐藏上一个按钮
      hideNext: false, // 在最后一步中是否隐藏下一个按钮
      exitOnOverlayClick: false, // 点击叠加层时是否退出介绍
      showStepNumbers: false, // 是否显示红色圆圈的步骤编号
      disableInteraction: true, // 是否禁用与突出显示的框内的元素的交互，就是禁止点击
      // showBullets: false,          // 是否显示面板指示点
      tooltipPosition: `bottom` /* 引导说明框相对高亮说明区域的位置 */,
      positionPrecedence: ["top-middle-aligned", "top", "right", "left"],
      tooltipClass: `` /* 引导说明文本框的样式 */,
      highlightClass: `` /* 说明高亮区域的样式 */,
      keyboardNavigation: false /* 是否允许键盘来操作 */,
      showButtons: true /* 是否按键来操作 */,
      showBullets: false /* 是否使用点点点显示进度 */,
      showProgress: false /* 是否显示进度条 */,
      scrollToElement: true /* 是否滑动到高亮的区域 */,
      overlayOpacity: 0.8 /* 遮罩层的透明度 */,
      // hintPosition: 'top-middle',
      // hintPosition: 'top-left',
      hintPosition: "bottom-middle",
      hintButtonLabel: "Got it",
      buttonClass: "introjs-button",
      helperElementPadding: 1,
      exitOnEsc: true,
    })
    .start();
}
onMounted(() => {
  guide();
  console.log(`the component is now mounted.`);

  const byClass = Array.from(
    document.getElementsByClassName(
      "introjs-tooltip"
    ) as HTMLCollectionOf<HTMLElement>
  );
  byClass.forEach((box) => {
    // box.style.backgroundColor = 'lime';
    // box.style.color = 'white';
    box.style.opacity = "0.8";
    // box.style.maxWidth = '90%';
  });
});
</script>

<style scoped>

.select-header {
  margin-top: 2%;
  margin-bottom: 1%;
  /* 上边 | 右边 | 下边 | 左边 */
  padding: 0px 5px 0px 5px;
  font-size: 18px;
  font-weight: bold;
  color: #505050;
  /* margin: 2% 0; */
}


.place_container {
  display: flex;
  background-color: rgb(214, 220, 228);
  width: calc(100vw/4);
  height: calc(100vw/4/1016*638);
  /* height: 100px; */
  margin: 5px 1px 0px 1px;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
}
.place_container>span {
  font-size: 16px;
  color: #505050;
}

.draggable-container {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  justify-items: stretch;
  align-items: center;
}
.image_container {
  width: 25%;
  font-size: 0;
  margin: 5px 1px 0px 1px;
}

.image_container_first {
  display: inline-block;
  width: 32%;
  height: 10vh;
  margin-left: 1%;
  margin-top: 3px;
}

.text_font_size {
  font-size: 13px;
}
.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--el-fill-color-light);
  color: var(--el-text-color-secondary);
  font-size: 100px;
}

.disable-img{
    pointer-events:none;
    -webkit-user-select:none;
    -moz-user-select:none;
    user-select:none;
}
.imgMask{ 
position: absolute; 
z-index: 100; 
left: 0; 
right: 0; 
top: 0; 
bottom: 0; 
opacity: 0; 
}
</style>
