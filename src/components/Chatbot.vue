<template>
  <div id="wrapper">
    <div id="header">
      <h3>Chat - Matrix Airlines</h3>
      <p>We help robots to fly around the world, without any region limitations.</p>

    </div>

    <div id="body">
      <div
          v-for="(message, index) in messages"
          :key="index"
          style="display: flex; height: fit-content; width: 100%;row-gap: 25px;"
          :id="'message-' + index"
      >
        <div class="message-wrapper"  v-if="message.sender === 'bot'">
          <div class="container">
            <span class="profil-picture-bot" ></span>
            <div class="message-container">
              <p>{{
                  message.message
                }}</p>

            </div>
          </div>

        </div>
        <div class="message-wrapper"  v-else>
          <div class="container-client">
            <div class="message-container-client">
              <p>{{
                  message.message
                }}</p>

            </div>
            <span class="profil-picture-client" ></span>
          </div>

        </div>
      </div>

    </div>

    <div id="footer">
      <input placeholder="Send a message..." v-model="new_message" @keyup.enter="sendMessage">
      <span @click="sendMessage">
        <font-awesome-icon id="paper-plane-icon" icon="fa-solid fa-paper-plane" />
      </span>



    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Chatbot',
  data: function () {
    return {
      new_message: null,
      messages: [

      ]
    }
  },
  methods: {
    sendMessage: function(){
      let data = {
        message : this.new_message
      }
      this.addMessage('client', this.new_message)
      this.new_message = null

      axios.get("http://127.0.0.1:5000?message=" + data.message)
      .then(res =>{
        this.addMessage('bot', res.data)
      })

    },

    addMessage: function(sender, message){
      this.messages.push({
        sender: sender,
        message : message
      })
    },

  },
  watch: {
    messages: {
      handler() {
        const container = this.$el.querySelector("#body");
        this.$nextTick(() => {
          container.scrollTop = container.scrollHeight;
        });
      },
      deep: true,
    },


  },

  mounted() {
    this.messages.push({
          sender: 'bot',
          message: "Hi 👋 AirBot here!\n" +
              "                What brings you to Bots Airlines today?"
        },
        )

    console.log(this.messages)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#wrapper{
  height: 60%;
  width:25%;
  background-color: white;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  filter: drop-shadow(0px 0px 50px rgba(0, 0, 0, 0.25));
}

#header{
  display: flex;
  flex-direction: column;
  background: linear-gradient(107.59deg, #304BE2 -0.59%, #0F28A1 100%);
  box-shadow: 0px 3px 6px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px 10px 0px 0px;
  height: 22.5%;
  align-items: flex-start;
  padding-left: 7.5%;
  padding-right: 7.5%;
  box-sizing: border-box;
  row-gap: 7.5px;
  padding-top: 20px;
  padding-bottom: 20px;
}

#header h3{
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
}

#header p{
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
  color: #B8C0F0;
}

#header *{
  margin: 0;
  text-align: left;
}

#body{
  width: 100%;
  height: 65%;
  overflow: scroll;
  color: black;
  text-align: left;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 5% 0;

}

#footer{
  height:12.5%;
  border-radius: 0 0 10px 10px;
  border-top: 1px solid #E6E6E6;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#footer input{
  flex: 4;
  height: 90%;
  border: none;
  padding-left: 5%;
  border-radius: 10px;

}
#footer input:focus{

  outline: none;

}


#footer span {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3%;
  cursor: pointer;
  background-color: #304BE2;
  border-radius: 100%;
  margin-right: 5%;
}

#paper-plane-icon{
  font-size: 17.5px;
  color: white;

}

.message-wrapper{
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
}

.container{
  display: flex;
  height: 100%;
  width: 100%;
  align-items: flex-end;
  padding: 0 2.5%;
  column-gap: 5px;
}

.profil-picture-bot{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 30px;
  min-height: 30px;
  max-width: 30px;
  max-height: 30px;
  border-radius: 50%;
  background-image: url("https://i.pinimg.com/originals/cf/2a/84/cf2a845542047ab9ad1a919ad0e7c74a.gif");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.container-client{
  display: flex;
  height: 100%;
  width: 100%;
  align-items: flex-end;
  padding: 0 2.5%;
  justify-content: flex-end;
  column-gap: 5px;
}

.message-container{
  display: flex;
width: 60%;
  background-color: #F5F5F5;
  color: black;
  padding:0 3.5%;
  border-radius: 5px;
  white-space: pre-line;

  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

}

.message-container-client{
  display: flex;
  width: 60%;
  background-color: #314CE3;
  color: white;
  padding:0 3.5%;
  border-radius: 5px;
  white-space: pre-line;

  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

}

</style>
