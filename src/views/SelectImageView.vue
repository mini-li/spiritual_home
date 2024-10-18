<template>
    <div class="flex" style="margin-top: 2%;">
        <el-text tag="b" size="large" style="margin-bottom: 5px;">
            高符合的四个卡片
        </el-text>
      <VueDraggable
        v-model="list1"
        class="flex flex-col gap-2 p-4 w-300px h-300px m-auto bg-gray-500/5 rounded overflow-auto"
        group="myImage"
        @update="onUpdate"
        @add="onAdd"
        @remove="remove"
      >
      
    <div
        v-for="item in list1"
        :key="item.id"
        class="image_container cursor-move h-30 bg-gray-500/5 rounded p-3"
    >
    <el-image :src="getSrc(item.id)"   fit="contain"/>
    </div>
    <div class="place_container" v-if="list1.length!=4"></div>
      
      
      </VueDraggable>

      <el-text size="large" tag="b">
        中符合的四个卡片
    </el-text>
      <VueDraggable
        v-model="list2"
        class="flex flex-col gap-2 p-4 w-300px h-300px m-auto bg-gray-500/5 rounded overflow-auto"
        group="myImage"
        @update="onUpdate"
        @add="onAdd"
        @remove="remove"
      >
      <div
        v-for="item in list2"
        :key="item.id"
        class="image_container cursor-move h-30 bg-gray-500/5 rounded p-3"
      >
      <el-image :src="getSrc(item.id)"   fit="contain"/>
      </div>
      <div class="place_container" v-if="list2.length!=4"></div>
      </VueDraggable>

      <el-text size="large" tag="b">
        中符合的四个卡片
        </el-text>
      <VueDraggable
        v-model="list3"
        class="flex flex-col gap-2 p-4 w-300px h-300px m-auto bg-gray-500/5 rounded overflow-auto"
        group="myImage"
        @update="onUpdate"
        @add="onAdd"
        @remove="remove"
      >
      <div
        v-for="item in list3"
        :key="item.id"
        class="image_container cursor-move h-30 bg-gray-500/5 rounded p-3"
      >
      <el-image :src="getSrc(item.id)"   fit="contain"/>
      
      </div>
      <div class="place_container" v-if="list3.length!=4"></div>
      </VueDraggable>
      <el-text  tag="b" class="mx-1" size="large">从下面选好的12张卡片中,按照符合程序进程分类,将对应的卡片拖拽到对应的行</el-text>
      <VueDraggable
        v-model="list0"
        class="flex flex-col gap-2 p-4 w-300px h-300px m-auto bg-gray-500/5 rounded overflow-auto"
        group="myImage"
        @update="onUpdate"
        @add="onAdd"
        @remove="remove"
      >
      <!-- <el-row> -->
        <div
        v-for="item in list0"
        :key="item.id"
        class="image_container cursor-move h-30 bg-gray-500/5 rounded p-3"
      >
      <el-image :src="getSrc(item.id)"   fit="contain"/>
      </div>
        <!-- <div class="image_container cursor-move" :key="2"><el-image :src="radio2_src"   :fit="contain"/></div> -->
        <!-- <div class="image_container cursor-move" :key="3"><el-image :src="radio3_src"   :fit="contain"/></div>
        <div class="image_container cursor-move" :key="4"><el-image :src="radio4_src"   :fit="contain"/></div>
        <div class="image_container cursor-move" :key="5"><el-image :src="radio5_src"   :fit="contain"/></div>
        <div class="image_container cursor-move" :key="6"><el-image :src="radio6_src"   :fit="contain"/></div>

        <div class="image_container cursor-move" :key="7"><el-image :src="radio7_src"   :fit="contain"/></div>
        <div class="image_container cursor-move" :key="8"><el-image :src="radio8_src"   :fit="contain"/></div>
        <div class="image_container cursor-move" :key="9"><el-image :src="radio9_src"   :fit="contain"/></div>
        <div class="image_container cursor-move" :key="10"><el-image :src="radioa_src"   :fit="contain"/></div>
        <div class="image_container cursor-move" :key="11"><el-image :src="radiob_src"   :fit="contain"/></div>
        <div class="image_container cursor-move" :key="12"><el-image :src="radioc_src"   :fit="contain"/></div> -->
      <!-- </el-row> -->
      <!-- <el-row>
        <el-col :span="4"><div class="image_container cursor-move"><el-image :src="radio7_src"   :fit="contain" /></div></el-col>
        <el-col :span="4"><div class="image_container cursor-move"><el-image :src="radio8_src"   :fit="contain" /></div></el-col>
        <el-col :span="4"><div class="image_container cursor-move"><el-image :src="radio9_src"   :fit="contain" /></div></el-col>
        <el-col :span="4"><div class="image_container cursor-move"><el-image :src="radioa_src"   :fit="contain" /></div></el-col>
        <el-col :span="4"><div class="image_container cursor-move"><el-image :src="radiob_src"   :fit="contain" /></div></el-col>
        <el-col :span="4"><div class="image_container cursor-move"><el-image :src="radioc_src"   :fit="contain" /></div></el-col>
      </el-row> -->
      </VueDraggable>
    </div>
  </template>
  
<script lang="ts" setup>
    // 1
// 正红色2分：主动帮助别人
// 反绿色2分：静待问题过去

import red_2_1 from '@/assets/images/red_2_1.png'
import green_2_1 from '@/assets/images/green_2_1.png'

// 2.
// 红色1，积极乐观
// 蓝色3，悲观多疑

import red_1_0 from '@/assets/images/red_1_0.png'
import blue_3_1 from '@/assets/images/blue_3_1.png'


// 3.
// 红色1分，主动分享
// 蓝色3分，保守谨慎
import red_1_1 from '@/assets/images/red_1_1.png'
import blue_3_0 from '@/assets/images/blue_3_0.png'

// 4.
// 红色2分，别人认可更重要
// 黄色2分，结果目标更重要

import red_2_0 from '@/assets/images/red_2_0.png'
import yellow_2_1 from '@/assets/images/yellow_2_1.png'

// 5.
// 红色3分，情绪多变
// 蓝色1分，情绪内敛

import red_3_1 from '@/assets/images/red_3_1.png'
import blue_1_1 from '@/assets/images/blue_1_1.png'

// 6.
// 红色3分，随意自由
// 蓝色1分，条理计划

import red_3_0 from '@/assets/images/red_3_0.png'
import blue_1_0 from '@/assets/images/blue_1_0.png'

// 7.
// 蓝色2分，慢慢研究问题
// 黄色2分，快速解决问题

import blue_2_1 from '@/assets/images/blue_2_1.png'
import yellow_2_0 from '@/assets/images/yellow_2_0.png'

// 8.
// 蓝色2分，坚持原则更重要
// 绿色2分，关心他人感受更重要
import blue_2_0 from '@/assets/images/blue_2_0.png'
import green_2_0 from '@/assets/images/green_2_0.png'

// 9.
// 黄色1分，目标坚定
// 绿色3分，缺乏主见
import yellow_1_1 from '@/assets/images/yellow_1_1.png'
import green_3_1 from '@/assets/images/green_3_1.png'

// 10.
// 黄色1分，进取心强
// 绿色3分，逆来顺受

import yellow_1_0 from '@/assets/images/yellow_1_0.png'
import green_3_0 from '@/assets/images/green_3_0.png'

// 11.
// 黄色3分，批判性强
// 绿色1分，宽容平和

import yellow_3_1 from '@/assets/images/yellow_3_1.png'
import green_1_0 from '@/assets/images/green_1_0.png'


// 12
// 黄色3分，掌控一切
// 绿色1分，以他人为中心

import yellow_3_0 from '@/assets/images/yellow_3_0.png'
import green_1_1 from '@/assets/images/green_1_1.png'

const imageMap = new Map();;
imageMap.set("11",red_2_1)
imageMap.set("12",green_2_1)

imageMap.set("21",red_1_0)
imageMap.set("22",blue_3_1)

imageMap.set("31",red_1_1)
imageMap.set("32",blue_3_0)

imageMap.set("41",red_2_0)
imageMap.set("42",yellow_2_1)

imageMap.set("51",red_3_1)
imageMap.set("52",blue_1_1)

imageMap.set("61",red_3_0)
imageMap.set("62",blue_1_0)

imageMap.set("71",blue_2_1)
imageMap.set("72",yellow_2_0)

imageMap.set("81",blue_2_0)
imageMap.set("82",green_2_0)

imageMap.set("91",yellow_1_1)
imageMap.set("92",green_3_1)

imageMap.set("a1",yellow_1_0)
imageMap.set("a2",green_3_0)

imageMap.set("b1",yellow_3_1)
imageMap.set("b2",green_1_0)

imageMap.set("c1",yellow_3_0)
imageMap.set("c2",green_1_1)


import { VueDraggable } from 'vue-draggable-plus'

import { useSelectValueStore } from '@/stores/selected'
import { ref,reactive, watch, computed } from 'vue'

const selectedValue = useSelectValueStore()

function onUpdate() {
console.log('update')
}
function onAdd() {
console.log('add')
}
function remove() {
console.log('remove')
}
function getSrc(index_key:string){
    return imageMap.get(index_key)
}
// const radio1_src = computed(
//     ()=>{return imageMap.get(selectedValue.radio1)}
// )
// const radio2_src = computed(
//     ()=>{return imageMap.get(selectedValue.radio2)}
// )
// const radio3_src = computed(
//     ()=>{return imageMap.get(selectedValue.radio3)}
// )
// const radio4_src = computed(
//     ()=>{return imageMap.get(selectedValue.radio4)}
// )
// const radio5_src = computed(
//     ()=>{return imageMap.get(selectedValue.radio5)}
// )
// const radio6_src = computed(
//     ()=>{return imageMap.get(selectedValue.radio6)}
// )
// const radio7_src = computed(
//     ()=>{return imageMap.get(selectedValue.radio7)}
// )
// const radio8_src = computed(
//     ()=>{return imageMap.get(selectedValue.radio8)}
// )
// const radio9_src = computed(
//     ()=>{return imageMap.get(selectedValue.radio9)}
// )
// const radioa_src = computed(
//     ()=>{return imageMap.get(selectedValue.radio10)}
// )
// const radiob_src = computed(
//     ()=>{return imageMap.get(selectedValue.radio11)}
// )
// const radioc_src = computed(
//     ()=>{return imageMap.get(selectedValue.radio12)}
// )

const list1:any[any] =  ref([])
const list2:any[any] =  ref([])
const list3:any[any] = ref([])
const list0 = ref([
    {"id": selectedValue.radio1},
    {"id": selectedValue.radio2},
    {"id": selectedValue.radio3},
    {"id": selectedValue.radio4},
    {"id": selectedValue.radio5},
    {"id": selectedValue.radio6},
    {"id": selectedValue.radio7},
    {"id": selectedValue.radio8},
    {"id": selectedValue.radio9},
    {"id": selectedValue.radio10},
    {"id": selectedValue.radio11},
    {"id": selectedValue.radio12}
  ])
</script>

<style scoped>
.place_container {  
    display: inline-block;
    width:  16%;
    height:  16vh;
    background-color: rgb(214, 220, 228);
    border: 1px;
}
.image_container {
    display: inline-block;
    width:16%;
}
.move-target {
    border-radius: 4px;
    min-height: 36px;
    width: 20%;
    height: 50%;
    background-color: red;  
    position: relative;  
}
.container {
  display: grid;
  gap: 10px;
}
</style>