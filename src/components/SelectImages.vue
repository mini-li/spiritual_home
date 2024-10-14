<template>
  <el-header>
   <el-row>
    <el-col :span="6" />
    <el-col :span="18">
        <el-text  tag="b" class="mx-1" size="large" style="margin-bottom: 20px;">
            下面12行卡片的每一行中选择一张更符合你的性格特点的卡片({{ totalSelect }}/12)
            </el-text>
          
            <el-button v-if="totalSelect==12" type="success" round style="margin-left: 20px;">下一步</el-button>
            
        
    </el-col>
    </el-row>
  </el-header>
  <el-main>

  
 <div ref="containerRef" style="overflow-y: auto">
    <el-row style="margin-bottom: 20px;">
      <el-col :span="6" />
      <el-col :span="12" >
        <el-radio-group v-model="radio1">
          <el-col :span="11" > <el-radio-button value="red_2_1"  ><el-image :src="red_2_1"  /> </el-radio-button></el-col>
          <el-col :span="2" ></el-col>
          <el-col :span="11" > <el-radio-button value="green_2_1" ><el-image :src="green_2_1" /> </el-radio-button></el-col>
        </el-radio-group>
      </el-col>
      <el-col :span="6" />
    </el-row>

    <el-row style="margin-bottom: 20px;">
      <el-col :span="6" />
      <el-col :span="12" >
        <el-radio-group v-model="radio2">
          <el-col :span="11" > <el-radio-button value="red_1_0"  ><el-image :src="red_1_0"  /> </el-radio-button></el-col>
          <el-col :span="2" ></el-col>
          <el-col :span="11" > <el-radio-button value="blue_3_1" ><el-image :src="blue_3_1" /> </el-radio-button></el-col>
        </el-radio-group>
      </el-col>
      <el-col :span="6" />
    </el-row>

    <el-row style="margin-bottom: 20px;">
      <el-col :span="6" />
      <el-col :span="12" >
        <el-radio-group v-model="radio3">
          <el-col :span="11" > <el-radio-button value="red_1_1"  ><el-image :src="red_1_1"  /> </el-radio-button></el-col>
          <el-col :span="2" ></el-col>
          <el-col :span="11" > <el-radio-button value="blue_3_0" ><el-image :src="blue_3_0" /> </el-radio-button></el-col>
        </el-radio-group>
      </el-col>
      <el-col :span="6" />
    </el-row>
        
    <el-row style="margin-bottom: 20px;">
      <el-col :span="6" />
      <el-col :span="12" >
        <el-radio-group v-model="radio4">
          <el-col :span="11" > <el-radio-button value="red_2_0"  ><el-image :src="red_2_0"  /> </el-radio-button></el-col>
          <el-col :span="2" ></el-col>
          <el-col :span="11" > <el-radio-button value="yellow_2_1" ><el-image :src="yellow_2_1" /> </el-radio-button></el-col>
        </el-radio-group>
      </el-col>
      <el-col :span="6" />
    </el-row>

    <el-row style="margin-bottom: 20px;">
      <el-col :span="6" />
      <el-col :span="12" >
        <el-radio-group v-model="radio5">
          <el-col :span="11" > <el-radio-button value="red_3_1"  ><el-image :src="red_3_1"  /> </el-radio-button></el-col>
          <el-col :span="2" ></el-col>
          <el-col :span="11" > <el-radio-button value="blue_1_1" ><el-image :src="blue_1_1" /> </el-radio-button></el-col>
        </el-radio-group>
      </el-col>
      <el-col :span="6" />
    </el-row>

    <el-row style="margin-bottom: 20px;">
      <el-col :span="6" />
      <el-col :span="12" >
        <el-radio-group v-model="radio6">
          <el-col :span="11" > <el-radio-button value="red_3_0"  ><el-image :src="red_3_0"  /> </el-radio-button></el-col>
          <el-col :span="2" ></el-col>
          <el-col :span="11" > <el-radio-button value="blue_1_0" ><el-image :src="blue_1_0" /> </el-radio-button></el-col>
        </el-radio-group>
      </el-col>
      <el-col :span="6" />
    </el-row>

    <el-row style="margin-bottom: 20px;">
      <el-col :span="6" />
      <el-col :span="12" >
        <el-radio-group v-model="radio7">
          <el-col :span="11" > <el-radio-button value="blue_2_1"  ><el-image :src="blue_2_1"  /> </el-radio-button></el-col>
          <el-col :span="2" ></el-col>
          <el-col :span="11" > <el-radio-button value="yellow_2_0" ><el-image :src="yellow_2_0" /> </el-radio-button></el-col>
        </el-radio-group>
      </el-col>
      <el-col :span="6" />
    </el-row>

    <el-row style="margin-bottom: 20px;">
      <el-col :span="6" />
      <el-col :span="12" >
        <el-radio-group v-model="radio8">
          <el-col :span="11" > <el-radio-button value="blue_2_0"  ><el-image :src="blue_2_0"  /> </el-radio-button></el-col>
          <el-col :span="2" ></el-col>
          <el-col :span="11" > <el-radio-button value="green_2_0" ><el-image :src="green_2_0" /> </el-radio-button></el-col>
        </el-radio-group>
      </el-col>
      <el-col :span="6" />
    </el-row>


    <el-row style="margin-bottom: 20px;">
      <el-col :span="6" />
      <el-col :span="12" >
        <el-radio-group v-model="radio9">
          <el-col :span="11" > <el-radio-button value="yellow_1_1"  ><el-image :src="yellow_1_1"  /> </el-radio-button></el-col>
          <el-col :span="2" ></el-col>
          <el-col :span="11" > <el-radio-button value="green_3_1" ><el-image :src="green_3_1" /> </el-radio-button></el-col>
        </el-radio-group>
      </el-col>
      <el-col :span="6" />
    </el-row>

    <el-row style="margin-bottom: 20px;">
      <el-col :span="6" />
      <el-col :span="12" >
        <el-radio-group v-model="radio10">
          <el-col :span="11" > <el-radio-button value="yellow_1_0"  ><el-image :src="yellow_1_0"  /> </el-radio-button></el-col>
          <el-col :span="2" ></el-col>
          <el-col :span="11" > <el-radio-button value="green_3_0" ><el-image :src="green_3_0" /> </el-radio-button></el-col>
        </el-radio-group>
      </el-col>
      <el-col :span="6" />
    </el-row>


    <el-row style="margin-bottom: 20px;">
      <el-col :span="6" />
      <el-col :span="12" >
        <el-radio-group v-model="radio11">
          <el-col :span="11" > <el-radio-button value="yellow_3_1"  ><el-image :src="yellow_3_1"  /> </el-radio-button></el-col>
          <el-col :span="2" ></el-col>
          <el-col :span="11" > <el-radio-button value="green_1_0" ><el-image :src="green_1_0" /> </el-radio-button></el-col>
        </el-radio-group>
      </el-col>
      <el-col :span="6" />
    </el-row>

    <el-row style="margin-bottom: 20px;">
      <el-col :span="6" />
      <el-col :span="12" >
        <el-radio-group v-model="radio12">
          <el-col :span="11" > <el-radio-button value="yellow_3_0"  ><el-image :src="yellow_3_0"  /> </el-radio-button></el-col>
          <el-col :span="2" ></el-col>
          <el-col :span="11" > <el-radio-button value="green_1_1" ><el-image :src="green_1_1" /> </el-radio-button></el-col>
        </el-radio-group>
      </el-col>
      <el-col :span="6" />
    </el-row>
  </div>
</el-main>
</template>

<script lang="ts" setup>

import { ref,computed  } from 'vue'

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


const radio1 = ref('')
const radio2 = ref('')
const radio3 = ref('')
const radio4 = ref('')
const radio5 = ref('')
const radio6 = ref('')
const radio7 = ref('')
const radio8 = ref('')
const radio9 = ref('')
const radio10 = ref('')
const radio11 = ref('')
const radio12 = ref('')


const totalSelect = computed(() => {
    const count = ref(0)
    if (radio1.value !== ''){
      count.value+=1
    }
    if (radio2.value !== ''){
      count.value+=1
    }
    if (radio3.value !== ''){
      count.value+=1
    }
    if (radio4.value !== ''){
      count.value+=1
    }
    if (radio5.value !== ''){
      count.value+=1
    }
    if (radio6.value !== ''){
      count.value+=1
    }
    if (radio7.value !== ''){
      count.value+=1
    }
    if (radio8.value !== ''){
      count.value+=1
    }
    if (radio9.value !== ''){
      count.value+=1
    }
    if (radio10.value !== ''){
      count.value+=1
    }
    if (radio11.value !== ''){
      count.value+=1
    }
    if (radio12.value !== ''){
      count.value+=1
    }
    return count.value
	})

</script>
<style>
.el-header {
        position: relative;
        width: 100%;
        height: 60px;    
        margin-top: 20px;  
    }
.el-main {
  position: absolute;
  right: 0;
  top: 60px;
  bottom: 0;
  overflow-y: scroll;
  }
</style>