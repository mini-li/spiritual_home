<template>
   <div class="common-layout">
    <el-container>
      <el-header>
        <el-container>
          <div class="logo-container"><el-image :src="logo" alt="logo-images" fit="contain"/></div>

          <div>
            <h1>心灵家园-性格色彩卡片测试</h1>
            <h5>
              <el-text  tag="b" class="mx-1" size="large" style="text-align: center;">
                    从下面24行卡片中选出12张,每一行的两张中选一张({{ totalSelect }}/12)
                    <el-button v-if="totalSelect==12" type="success" round style="margin-left: 20px;" @click="toSelect">下一步</el-button>
                </el-text>
            </h5>
          </div>
        </el-container>
        
       
      </el-header> 
      <el-main>
        <el-row v-if="activeStep==1">
            <!-- <el-col :span="6" /> -->
            <el-col :span="24" >
              <el-radio-group v-model="selectedValue.radio1" @change="activeStep++">
                <el-col :span="11" :style="{boxShadow: `var(${'--el-box-shadow'})`}"> <el-radio-button value="11"><el-image :src="red_2_1"  /> </el-radio-button></el-col>
                <el-col :span="2" ></el-col>
                <el-col :span="11" :style="{boxShadow: `var(${'--el-box-shadow'})`}"> <el-radio-button value="12"><el-image :src="green_2_1" /> </el-radio-button></el-col>
              </el-radio-group>
            </el-col>
          </el-row>

        <el-row  v-if="activeStep==2">
          <el-col :span="24" >
            <el-radio-group v-model="selectedValue.radio2"  @change="activeStep++">
              <el-col :span="11" :style="{boxShadow: `var(${'--el-box-shadow'})`}"> <el-radio-button value="21" ><el-image :src="red_1_0"  /> </el-radio-button></el-col>
              <el-col :span="2" ></el-col>
              <el-col :span="11" :style="{boxShadow: `var(${'--el-box-shadow'})`}"> <el-radio-button value="22" ><el-image :src="blue_3_1" /> </el-radio-button></el-col>
            </el-radio-group>
          </el-col>
        </el-row>

        <el-row  v-if="activeStep==3">
          <el-col :span="24" >
            <el-radio-group v-model="selectedValue.radio3" @change="activeStep++">
              <el-col :span="11" :style="{boxShadow: `var(${'--el-box-shadow'})`}"> <el-radio-button value="31" ><el-image :src="red_1_1"  /> </el-radio-button></el-col>
              <el-col :span="2" ></el-col>
              <el-col :span="11" :style="{boxShadow: `var(${'--el-box-shadow'})`}"> <el-radio-button value="22" ><el-image :src="blue_3_0" /> </el-radio-button></el-col>
            </el-radio-group>
          </el-col>
        </el-row>
        
        <el-row  v-if="activeStep==4">
          <el-col :span="24" >
            <el-radio-group v-model="selectedValue.radio4"  @change="activeStep++">
              <el-col :span="11" :style="{boxShadow: `var(${'--el-box-shadow'})`}"> <el-radio-button value="41" ><el-image :src="red_2_0"  /> </el-radio-button></el-col>
              <el-col :span="2" ></el-col>
              <el-col :span="11" :style="{boxShadow: `var(${'--el-box-shadow'})`}"> <el-radio-button value="42" ><el-image :src="yellow_2_1" /> </el-radio-button></el-col>
            </el-radio-group>
          </el-col>
        </el-row>

        <el-row  v-if="activeStep==5">
          <el-col :span="24" >
            <el-radio-group v-model="selectedValue.radio5" @change="activeStep++">
              <el-col :span="11" :style="{boxShadow: `var(${'--el-box-shadow'})`}"> <el-radio-button value="51" ><el-image :src="red_3_1"  /> </el-radio-button></el-col>
              <el-col :span="2" ></el-col>
              <el-col :span="11" :style="{boxShadow: `var(${'--el-box-shadow'})`}"> <el-radio-button value="52" ><el-image :src="blue_1_1" /> </el-radio-button></el-col>
            </el-radio-group>
          </el-col>
        </el-row>

        <el-row  v-if="activeStep==6">
          <el-col :span="24" >
            <el-radio-group v-model="selectedValue.radio6" @change="activeStep++">
              <el-col :span="11" :style="{boxShadow: `var(${'--el-box-shadow'})`}"> <el-radio-button value="61" ><el-image :src="red_3_0"  /> </el-radio-button></el-col>
              <el-col :span="2" ></el-col>
              <el-col :span="11" :style="{boxShadow: `var(${'--el-box-shadow'})`}"> <el-radio-button value="62" ><el-image :src="blue_1_0" /> </el-radio-button></el-col>
            </el-radio-group>
          </el-col>
        </el-row>

        <el-row  v-if="activeStep==7">
          <el-col :span="24" >
            <el-radio-group v-model="selectedValue.radio7"  @change="activeStep++">
              <el-col :span="11" :style="{boxShadow: `var(${'--el-box-shadow'})`}"> <el-radio-button value="71"  ><el-image :src="blue_2_1"  /> </el-radio-button></el-col>
              <el-col :span="2" ></el-col>
              <el-col :span="11" :style="{boxShadow: `var(${'--el-box-shadow'})`}"> <el-radio-button value="72"  ><el-image :src="yellow_2_0" /> </el-radio-button></el-col>
            </el-radio-group>
          </el-col>
        </el-row>

        <el-row  v-if="activeStep==8">
          <el-col :span="24" >
            <el-radio-group v-model="selectedValue.radio8" @change="activeStep++">
              <el-col :span="11" :style="{boxShadow: `var(${'--el-box-shadow'})`}"> <el-radio-button value="81"  ><el-image :src="blue_2_0"  /> </el-radio-button></el-col>
              <el-col :span="2" ></el-col>
              <el-col :span="11" :style="{boxShadow: `var(${'--el-box-shadow'})`}"> <el-radio-button value="82"  ><el-image :src="green_2_0" /> </el-radio-button></el-col>
            </el-radio-group>
          </el-col>
        </el-row>


        <el-row  v-if="activeStep==9">
          <el-col :span="24" >
            <el-radio-group v-model="selectedValue.radio9" @change="activeStep++">
              <el-col :span="11" :style="{boxShadow: `var(${'--el-box-shadow'})`}"> <el-radio-button value="91"  ><el-image :src="yellow_1_1"  /> </el-radio-button></el-col>
              <el-col :span="2" ></el-col>
              <el-col :span="11" :style="{boxShadow: `var(${'--el-box-shadow'})`}"> <el-radio-button value="92"  ><el-image :src="green_3_1" /> </el-radio-button></el-col>
            </el-radio-group>
          </el-col>
        </el-row>

        <el-row  v-if="activeStep==10">
          <el-col :span="24" >
            <el-radio-group v-model="selectedValue.radio10" @change="activeStep++">
              <el-col :span="11" :style="{boxShadow: `var(${'--el-box-shadow'})`}"> <el-radio-button value="a1"  ><el-image :src="yellow_1_0"  /> </el-radio-button></el-col>
              <el-col :span="2" ></el-col>
              <el-col :span="11" :style="{boxShadow: `var(${'--el-box-shadow'})`}"> <el-radio-button value="a2"  ><el-image :src="green_3_0" /> </el-radio-button></el-col>
            </el-radio-group>
          </el-col>
        </el-row>


        <el-row  v-if="activeStep==11">
          <el-col :span="24" >
            <el-radio-group v-model="selectedValue.radio11" @change="activeStep++">
              <el-col :span="11" :style="{boxShadow: `var(${'--el-box-shadow'})`}"> <el-radio-button value="b1"  ><el-image :src="yellow_3_1"  /> </el-radio-button></el-col>
              <el-col :span="2" ></el-col>
              <el-col :span="11" :style="{boxShadow: `var(${'--el-box-shadow'})`}"> <el-radio-button value="b2"  ><el-image :src="green_1_0" /> </el-radio-button></el-col>
            </el-radio-group>
          </el-col>
        </el-row>

        <el-row  v-if="activeStep==12">
          <el-col :span="24" >
            <el-radio-group v-model="selectedValue.radio12" @change="activeStep++">
              <el-col :span="11" :style="{boxShadow: `var(${'--el-box-shadow'})`}"> <el-radio-button value="c1"  ><el-image :src="yellow_3_0"  /> </el-radio-button></el-col>
              <el-col :span="2" ></el-col>
              <el-col :span="11" :style="{boxShadow: `var(${'--el-box-shadow'})`}"> <el-radio-button value="c2"  ><el-image :src="green_1_1" /> </el-radio-button></el-col>
            </el-radio-group>
          </el-col>
        </el-row>
        <div style="margin-top: 5%;">
        <el-row>
          <el-col :span="11"></el-col>
          <el-col :span="13">
            <div style="display: inline-block;">
              <el-button v-if="activeStep>1 && activeStep < 13"   @click="activeStep--" plain :style="{
                boxShadow: `var(${'--el-box-shadow'})`,
              }">上一组</el-button>
            </div>
            <div style="display: inline-block;">
              <el-button v-if="activeStep>0 && activeStep < 12" @click="nextStep" :style="{
                boxShadow: `var(${'--el-box-shadow'})`,
              }">下一组</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
      </el-main>
      
      
      
    </el-container>
  </div>
  
  
</template>

<script lang="ts" setup>

import { ref,computed, reactive  } from 'vue'
import {RouterLink, RouterView, useRouter} from "vue-router";

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

// logo
import logo from '@/assets/images/icon.jpg'



import { useSelectValueStore } from '@/stores/selected'
import { watch } from 'vue'

import { ElMessage } from 'element-plus'

const selectedValue = useSelectValueStore()

const totalSelect = computed(() => {
    const count = ref(0)
    if (selectedValue.radio1 !== ''){
      count.value+=1
    }
    if (selectedValue.radio2 !== ''){
      count.value+=1
    }
    if (selectedValue.radio3 !== ''){
      count.value+=1
    }
    if (selectedValue.radio4 !== ''){
      count.value+=1
    }
    if (selectedValue.radio5 !== ''){
      count.value+=1
    }
    if (selectedValue.radio6 !== ''){
      count.value+=1
    }
    if (selectedValue.radio7 !== ''){
      count.value+=1
    }
    if (selectedValue.radio8 !== ''){
      count.value+=1
    }
    if (selectedValue.radio9 !== ''){
      count.value+=1
    }
    if (selectedValue.radio10 !== ''){
      count.value+=1
    }
    if (selectedValue.radio11 !== ''){
      count.value+=1
    }
    if (selectedValue.radio12 !== ''){
      count.value+=1
    }
    return count.value
	})


  const router = useRouter();
  function toSelect() {
    router.push({path:'/select'})
} 

watch(() => selectedValue.radio1, (newValue, oldValue) => {
    console.log('------')
    console.log(newValue)
    selectedValue.$patch({ radio1:newValue })
});


const activeStep = ref(1)

function getRaidoValue(step:Number){
  if (step ==1){
    return selectedValue.radio1
  }
  if (step ==2){
    return selectedValue.radio2
  }


}
const mesasgeTip = () => {
  ElMessage({
    message: '请点击选择的卡片.',
    type: 'warning',
  })
}

function nextStep(){
  if (getRaidoValue(activeStep.value) === ''){
      mesasgeTip()
  }else{
    activeStep.value++
  }
}



</script>

<style scoped>
.el-header {
    position: relative;
    width: 100%;
    height: 120px;
    background-color: #f2f2f2;
}

h1 {
  text-align: center;
}

h5 {
  text-align: center;
}

.logo-container {
  display: flex;
  /* align-items: center; */
  width: 36%;
  height: 120px;
}
.shadow {
  boxShadow: var('--el-box-shadow')
}

.el-main {
  position: relative;
  top:18%;
  transform:translateY(+18%);
}
</style>