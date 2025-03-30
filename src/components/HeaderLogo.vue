<template>
  <div class="header-logo">
    <img :src="logo" alt="logo-images" class="header-logo-img" />
    <span class="header-logo-title">心安家园-性格测试</span>
  </div>
</template>

<script setup>
const props = defineProps({
  logo: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>

.header-logo {
  padding: 0 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  justify-items: center;
  align-items: center;
  /* padding: 0 20px; */
  height: 100px;
  background-color: #f2f2f2;
  border-bottom: 1px solid #eee;
  box-shadow: var(--el-box-shadow);
  /* margin-bottom: 3%; */
}

@media (max-width: 600px) {
  .header-logo {
    height: 100px;
  }
  .header-logo-img {
    height: 68px;
    font-size: 0;
    display: inline;
  }
  .header-logo-title {
    font-size: 26px;
    font-weight: bold;
    color: #303133;
    line-height: 100px;
  }
}
@media (min-width: 600px) {
  .header-logo {    
    height: 200px;
  }
  .header-logo-img {
    float: left;
    height: 200px;
    font-size: 0;
    display: inline;
  }
  .header-logo-title {
    float: right;
    font-size: 40px;
    font-weight: bold;
    color: #303133;
    /* line-height: 10vh; */
    align-items: center;
    /* margin-right: 1vh; */
    line-height: 200px;
  }
}
</style>