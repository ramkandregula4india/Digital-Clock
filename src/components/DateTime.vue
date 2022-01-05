<template>
    <button @click="addClock" >Click here to Add Clock</button>
    <ul>
        <li v-for="num in count" :key="num">
            <div>
                <h2><strong>Todays's Date and Time</strong></h2>
                <h2>Date: <span style="color: blue">{{dateNow}} - {{Weekday}}</span></h2>
                <h2>Time: <span style="color: brown">{{timeNow}} - {{AmPm}}</span></h2>
            </div>
            <!-- <div>
                <h2><strong>'s Date and Time</strong></h2>
                <h2>Date: <span style="color: blue">{{dateNow}} - {{Weekday}}</span></h2>
                <h2>Time: <span style="color: brown">{{timeNow}} - {{AmPm}}</span></h2>
            </div> -->
        </li>
    </ul>
</template>

<script>
export default {
  data(){
    return {
      dateNow:'',
      timeNow:'',
      Weekday:'',
      AmPm   :'AM',
      count :0,
    };
  },
  methods: {
    time(){
      var week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
      var instTime = new Date();
      var self = this;
      var hours = instTime.getHours();
      var months = instTime.getMonth() + 1 ;
      if(hours > 12){
        hours = hours -12 ;
        this.AmPm = 'PM';
      }

      this.timeNow = hours + ':' + instTime.getMinutes() + ':' + instTime.getSeconds();
      this.dateNow = instTime.getDate() + ':' + months + ':' + instTime.getFullYear();

      this.Weekday = week [instTime.getDay()];
      setInterval(self.time,1000);
    },
    addClock(){
        this.count = this.count + 1;

    }
  },
  mounted: function(){
    this.time();
  }
};
</script>
<style>
html {
  font-family: sans-serif;
}
div {
  max-width: 30rem;
  border: 2px solid blue;
}
li {
    list-style-type: none;
}
button {
    font-size: 30px;
    height: 2rem;
    text-align: center;



}
</style>