import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSelectValueStore = defineStore('selectedValue', {
  state: () => ({
  radio1 : "",
  radio2 : "",
  radio3 : "",
  radio4 : "",
  radio5 : "",
  radio6 : "",
  radio7 : "",
  radio8 : "",
  radio9 : "",
  radio10 : "",
  radio11 : "",
  radio12 : "",
  }),
  actions: {
    setRadio(setep:Number,value: string) {
      if(setep == 1){ this.radio1 = value }
      if(setep == 2){ this.radio2 = value }
      if(setep == 3){ this.radio3 = value }
      if(setep == 4){ this.radio4 = value }
      if(setep == 5){ this.radio5 = value }
      if(setep == 6){ this.radio6 = value }
      if(setep == 7){ this.radio7 = value }
      if(setep == 8){ this.radio8 = value }
      if(setep == 9){ this.radio9 = value }
      if(setep == 10){ this.radio10 = value }
      if(setep == 11){ this.radio11 = value }
      if(setep == 12){ this.radio12 = value }
    },
    getRadio(setep:Number):String {
      if(setep == 1){ return this.radio1 }
      if(setep == 2){ return this.radio2 }
      if(setep == 3){ return this.radio3 }
      if(setep == 4){ return this.radio4 }
      if(setep == 5){ return this.radio5 }
      if(setep == 6){ return this.radio6 }
      if(setep == 7){ return this.radio7 }
      if(setep == 8){ return this.radio8 }
      if(setep == 9){ return this.radio9 }
      if(setep == 10){ return this.radio10 }
      if(setep == 11){ return this.radio11 }
      if(setep == 12){ return this.radio12 }
      return ""
    },
    getTotalSelected():number {
      let count = 0
      if(this.radio1 != ""){ count++ }
      if(this.radio2 != ""){ count++ }      
      if(this.radio3 != ""){ count++ }
      if(this.radio4 != ""){ count++ }
      if(this.radio5 != ""){ count++ }
      if(this.radio6 != ""){ count++ }          
      if(this.radio7 != ""){ count++ }
      if(this.radio8 != ""){ count++ }
      if(this.radio9 != ""){ count++ }
      if(this.radio10 != ""){ count++ }
      if(this.radio11 != ""){ count++ }
      if(this.radio12 != ""){ count++ }
      return count
  },
  }
})


