
app.component('recommandtions-cont',{
    template:
    /* html */
    `   
    <section id="hero-mst-ldh">
        <div class="container">
            <div class="heading">
                <h2>Recommendations</h2>
                <p>These ads posts may interest you</p>
            </div>

            <div class="house-cards-cont">
                <house-card v-for="house in data" @update_house="savingPost" :id_house="house.id" :user="house.is_auth" :saved_list="house.saved" :images="house.images" :location="house.city" :title="house.title" :price="house.price" :surface="house.tsurface" :bedNum="house.bedroom" :toilletes="house.toilettes"></house-card>
            </div>
        </div>
    </section>

    `,
    props : ["data"]
    ,
    data() {
        return {
            domain : "http://127.0.0.1:8000/"
        }
    },
    methods: {
        // Methods Goes Here
        submitForm(id){
            var xhr = new XMLHttpRequest;
            xhr.onreadystatechange = function(){
                var request_state = xhr.readyState;

                if (request_state === 4){
                    var response = xhr.responseText
                    console.log("Request Response " + response)
                }
            }
            xhr.open("GET",`${this.domain}home/api/savedposts/add/${id}`)
            xhr.send()
        }
        ,
        savingPost(id,state){
            var that = this
            var username = this.user_auth
            var house_list = this.data


            house_list.forEach(function(house){
                if (house.id === id){
                    if (state === true){
                        house.saved.push(username)
                        that.submitForm(id)
                    }
                    if (state === false){
                        var res = []
                        house.saved.forEach(function(user){
                            if (user === username){
                                console.log("Found the user")
                            }
                            if (user != username){
                                res.push(user)
                            }
                        })
                        house.saved = res
                        that.submitForm(id)
                    }
                }
            })
        }
    }
    
})



