
app.component('create-post-third-step',{
    template:
    /* html */
    `
    <div class="step-three">

        <label for=""><p>Title Ad</p>
            <div class="input-box" id="title-input-box">
                <input type="text" name="titleAd" v-model="titleAd" @keyup="valideTitle" @change="valideTitle" placeholder="Enter The title of the ad" id="titleAd">
            </div>
        </label>

        <label for=""><p>Price</p>
            <div class="input-box" id="price-input-box">
                <input type="number" name="price" max="10000000000" v-model="price" @keyup="validePrice" @change="validePrice" placeholder="Enter The price" id="">
            </div>
        </label>

        <label for=""><p>Description</p>
            <div class="input-box-textarea" id="desc-input-box">
                <textarea name="description" id="" cols="30" v-model="description" @keyup="valideDescription" @change="valideDescription" rows="10" placeholder="Enter the discription of the post"></textarea>
            </div>
            <span id="notify-desc">Minimum 10 caractères</span>
        </label>

        <div class="buttons" id="buttons">
            <p @click="goBack" class="prv-btn">Back</p>
            <p @click="validateForm" class="nxt-btn">Next step</p>
        </div>
    </div>



    `,
    data(){
        return{
            titleAd : "",
            price : 0,
            description : "",
        }
    }
    ,
    methods: {
        //> Methods For Validation
        valideTitle(){
            var value = this.titleAd.length
            var inputBox = document.getElementById("title-input-box");

            if (value < 10){
                inputBox.style.border = "1px solid #e14c4c"
                return false
            }
            else{
                inputBox.style.border = "1px solid #B7B7B7"
                return true
            }
        }
        ,
        validePrice(){
            var value = this.price
            var inputBox = document.getElementById("price-input-box")

            if (value > 0 && value <= 10000000000){
                inputBox.style.border = "1px solid #B7B7B7"
                return true
            }
            else if (value <= 0){
                this.price = 0
                inputBox.style.border = "1px solid red";
                return false
            }
            else if (value > 10000000000){

                inputBox.style.border = "1px solid red";
                setTimeout(()=>{
                    inputBox.style.border = "1px solid #685BFF"
                },1500)
                return false
            }
        }
        ,
        valideDescription(){
            var value = this.description.length
            var inputBox = document.getElementById("desc-input-box");
            var notifyText =  document.getElementById("notify-desc") 

            if (value < 10){
                inputBox.style.border = "1px solid #e14c4c"
                notifyText.style.opacity = "1"
                return false
            }
            else{
                inputBox.style.border = "1px solid #B7B7B7"
                notifyText.style.opacity = "0"
                return true
            }
        },
        //> Validating Form
        validateForm(){
            var that = this
            var valide_title = that.valideTitle()
            var valide_price = that.validePrice()
            var valide_desc = that.valideDescription()

            if (valide_title && valide_price && valide_desc){
                that.nextMove()
                return true
            }
            else{
                return false
            }
        }
        ,
        //> Methods For Moving
        nextMove(){
            var step4 = document.getElementById("step4");

            var step3 = document.getElementById("step3");
            var bar3 = document.getElementById("bar3");
            step3.style.border = "none"
            step3.style.color = "white"
            step3.style.backgroundColor = "#4A3AFF"
            bar3.style.backgroundColor = "#4A3AFF"

            this.$emit("next-move","showThird","showFourth");

            step4.style.border = "3px solid #4A3AFF";
            step4.style.color = "#4A3AFF";
            step4.style.backgroundColor = "#EFF0F6";
        },
        goBack(){
            var step3 = document.getElementById("step3");
            var step2 = document.getElementById("step2");
            var bar2 = document.getElementById("bar2");
            step2.style.border = "3px solid #4A3AFF"
            step2.style.color = "rgb(74, 58, 255)"
            step2.style.backgroundColor = "#EFF0F6"
            bar2.style.backgroundColor = "#EFF0F6"

            this.$emit("back-move","showThird","showSecond")
            
            step3.style.backgroundColor = "#EFF0F6"
            step3.style.border = "none"
            step3.style.color = "#6F6C90"
        }
    }
    ,
    mounted(){
        var that = this
        var buttons = document.getElementById("buttons")
        buttons.style.marginTop = "30px";
    }
    ,
    unmounted(){
        var buttons = document.getElementById("buttons")
        buttons.style.marginTop = "0px";
    }
})


