

const app = Vue.createApp({
    data() {
      return {
        "house_id" : test_data.id,
        componentShow : {
          "showFirst" : true,
          "showSecond" : false,
          "showThird" : false,
          "showFourth" : false,
        }
      }
    },
    methods: {
      updateTitle(new_title){
        const testt = this.$refs.formStep3
        testt.titleAd = new_title
      }
      ,
      moveToNextStep(hide,show){
        this.componentShow[hide] = false
        this.componentShow[show] = true
      },
      moveToBackStep(hide,show){
        this.componentShow[hide] = false
        this.componentShow[show] = true
      }
    },
    mounted(){
      console.log(this.house_id)
    }
})



