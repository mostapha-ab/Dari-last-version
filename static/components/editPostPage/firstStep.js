
app.component('create-post-first-step',{
    template:
    /* html */
    `
    <div class="form-step-one">
        <div class="one-row">
            <label for="">Category 
                <div class="input-box">
                    <select name="category" id="category" v-model="hs_cat">
                        <option value="House" selected="">House</option>
                        <option value="Appartement">Appartement</option>
                        <option value="Villa">Villa</option>
                        <option value="Duplex">Duplex</option>
                    </select>
                </div>
            </label>

            <label for="">Post state 
                <div class="input-box">
                    <select name="state" id="state" v-model="hs_state">
                        <option value="Active">Publish</option>
                        <option value="Desactive">Hide</option>
                    </select>
                </div>
            </label>
        </div>



        <label for="">Transaction
            <div class="input-box">
                <select name="transaction" id="transaction" v-model="hs_transaction">
                    <option value="Vente">Vente</option>
                    <option value="Location (Per Day)">Location (Per Day)</option>
                    <option value="Location (Per Month)">Location (Per Month)</option>
                </select>
            </div>
        </label>

        <label for="">City
            <div class="input-box">
                <select name="city" id="city" v-model="hs_city">
                    <option value="Casablanca">Casablanca</option>
                    <option value="Marrakech">Marrakech</option>
                    <option value="Fès">Fès</option>
                    <option value="Chefchaouen">Chefchaouen</option>
                    <option value="Essaouira">Essaouira</option>
                    <option value="Tanger">Tanger</option>
                    <option value="Rabat">Rabat</option>
                    <option value="Meknès">Meknès</option>
                    <option value="Agadir">Agadir</option>
                    <option value="Ouarzazate">Ouarzazate</option>
                    <option value="Asilah">Asilah</option>
                    <option value="Tétouan">Tétouan</option>
                    <option value="Merzouga">Merzouga</option>
                    <option value="El Jadida">El Jadida</option>
                    <option value="Tinghir">Tinghir</option>
                    <option value="Ifrane">Ifrane</option>
                    <option value="Taroudant ">Taroudant</option>
                    <option value="Larache">Larache</option>
                    <option value="Aït Ben Haddou">Aït Ben Haddou</option>
                    <option value="Al Hoceïma">Al Hoceïma</option>
                    <option value="Oujda">Oujda</option>
                    <option value="Sidi Ifni">Sidi Ifni</option>
                    <option value="Azrou">Azrou</option>
                    <option value="Béni Mellal">Béni Mellal</option>
                    <option value="Midelt">Midelt</option>
                    <option value="Safi">Safi</option>
                    <option value="Taza">Taza</option>
                    <option value="Martil">Martil</option>
                    <option value="Oued Zem">Oued Zem</option>
                    <option value="Sefrou">Sefrou</option>
                    <option value="Taourirt">Taourirt</option>
                    <option value="Guercif">Guercif</option>
                    <option value="Tiflet">Tiflet</option>
                    <option value="Ouazzane">Ouazzane</option>
                    <option value="Youssoufia">Youssoufia</option>
                    <option value="Ksar El-Kébir">Ksar El-Kébir</option>
                    <option value="Fnideq">Fnideq</option>
                    <option value="Sidi Kacem">Sidi Kacem</option>
                    <option value="Saïdia">Saïdia</option>
                    <option value="M'diq">M'diq</option>
                    <option value="Tiznit">Tiznit</option>
                    <option value="Moulay Idriss">Moulay Idriss</option>
                    <option value="Zerhoun">Zerhoun</option>
                    <option value="Guelmim">Guelmim</option>
                    <option value="Mohammédia">Mohammédia</option>
                    <option value="Imlil">Imlil</option>
                    <option value="Nador">Nador</option>
                    <option value="Berrchid">Berrchid</option>
                    <option value="Settat">Settat</option>
                    <option value="Berkane">Berkane</option>
                </select>
            </div>
        </label>

        <label for="">Addresse
            <div class="input-box" id="addresseBox">
                <input type="text" name="addresse" id="" v-model="addresse" @keyup="checkAddresse" maxlength="40" placeholder="Enter your Addresse Here">
            </div>
            <span id="addresse-notify">Minimum 10 caractères</span>
        </label>


        <div class="buttons">
            <p style="opacity:0.7" class="prv-btn">Back</p>
            <p @click="validateForm" class="nxt-btn">Next</p>
        </div>

    </div>    
    `
    ,
    props : ["house_id"]
    ,
    data(){
        return {
            hs_id : test_data,
            hs_cat : "House",
            hs_state : "",
            hs_transaction : "Vente",
            hs_city : "Casablanca",
            fname : "mehdi hyad",
            addresse : "sasa"
        }
    }
    ,
    methods: {
        // Method For Addresse Checking
        checkAddresse(){
            var addresse_error_text = document.getElementById("addresse-notify");
            var addresse_input_box = document.getElementById("addresseBox");
            var addresse_value = this.addresse;

            if (addresse_value.length < 10){
                addresse_error_text.style.opacity = "1"
                addresse_input_box.style.border = "3px solid #e14c4c"
                return false
            }
            else{
                addresse_error_text.style.opacity = "0"
                addresse_input_box.style.border = "3px solid #4A3AFF"
                setTimeout(()=>{
                    addresse_input_box.style.border = "1px solid #B7B7B7"
                },1000)
                return true
            }
        }
        ,
        validateForm(){
            var that = this
            var addresse_valid = that.checkAddresse();

            if (addresse_valid){
                that.nextMove()
                console.log("Now We Can Move")
            }
        }
        ,
        // Method For Next Move
        nextMove(){
            var step1 = document.getElementById("step1");
            var step2 = document.getElementById("step2");
            
            var bar1 = document.getElementById("bar1");

            this.$emit("next-move","showFirst","showSecond")
            step1.style.border = "none"
            step1.style.color = "white"
            step1.style.backgroundColor = "#4A3AFF"
            bar1.style.backgroundColor = "#4A3AFF"

            step2.style.border = "3px solid #4A3AFF"
            step2.style.color = "#4A3AFF"
        }
        ,
        getData(id){
            fetch(`http://127.0.0.1:8000/home/api/houseinfo/${id}`)
            .then(res=>res.json())
            .then((res)=>{
                this.hs_cat = (res[0].category);
                this.hs_state = (res[0].state);
                this.hs_transaction = (res[0].transaction);
                this.hs_city = (res[0].city)

                console.log(this.hs_city)

                this.addresse = (res[0].adress)
            })
        }
    },
    mounted(){
        var step1 = document.getElementById("step1");
        var that = this
        var buttons = document.querySelector(".buttons")
        step1.style.border = "3px solid #4A3AFF";
        step1.style.color = "#4A3AFF";
        buttons.style.marginTop = "0";

        that.getData(this.house_id)
    },
})


