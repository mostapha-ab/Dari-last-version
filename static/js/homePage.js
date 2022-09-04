const app = Vue.createApp({
    data() {
      return {
        showLoginCard: false,
        liked_house_data : null,
        most_viewd_house : null,
      }
    }
    ,
    methods: {
      openLoginCard(){
        this.showLoginCard = true
      }
      ,
      close_overlay(){
        this.showLoginCard = false
      }
    }
    ,
    mounted(){
      fetch("http://127.0.0.1:8000/home/api/most-liked-house/")
      .then(res=>res.json())
      .then(data=>this.liked_house_data=data)

      fetch("http://127.0.0.1:8000/home/api/most-viewd-house/")
      .then(res=>res.json())
      .then(data=>this.most_viewd_house=data)
      // .then(()=>{console.log(this.most_viewd_house)})
    }
})





