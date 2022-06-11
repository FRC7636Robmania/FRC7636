
<template>
    <div>
      <v-img
          aspect-ratio="2"
          src="@/assets/Elements/FrontIMG/Events-PastSeasons.jpg"
          class="d-flex align-end"
      >
      <h1 class="ml-3 mb-2" style="font-style: italic; font-size: 7vmin;">
          FRC<br/> Past Seasons            
      </h1>
      </v-img>
      
      <div
        class="box"
      >
        <div class="inside">
          <div v-for="(season, index) in seasons" :key="index">
            <div class="pa-6 mx-auto" height="220">
              <v-hover v-slot:default="{ hover }">
                <v-row @click="changePath(season.path)" :class="`elevation-${hover ? 20 : 0}`">
                    <v-col
                        cols="12"
                        md="4"
                        class="text-center my-auto"
                    >
                        <img :src="season.photo" style="width: 80%">
                    </v-col>
                    <v-col order="2">
                        <div class="mb-2 titleSize">
                            {{ season.title }}
                        </div>
                        <div class="contentSize">
                            {{ season.text }}
                        </div>
                    </v-col>
                </v-row>                  
              </v-hover>
            </div>
              <hr color="#3b3b3b" class="mx-auto my-3" style="max-width: 80%">
            </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data: ()=> ({
      seasons:[
        {
          photo: require("../../../assets/Elements/Everywhere-2020 Infinite Recharge.png"),
          title: "FRC 2021: Infinite Recharge",
          text: "Powered by the great sponsorer, STAR WARS, our mission this year is the same as the mission last year, because of the epidemic, we get the similar seasons. We have more time to perfect our robot. If there is any opportunity to participate in the competition, we will do our best to fight for. No matter what, we will continue to work hard so that the team can take good hold of opportunities when we enconter opportunities.",
          path: "/2021InfiniteRecharge",
        },
        {
          photo: require("../../../assets/Elements/Everywhere-2020 Infinite Recharge.png"),
          title: "FRC 2020: Infinite Recharge",
          text: "Powered by the great sponsorer, STAR WARS, our mission this year is to protect the FIRST city from being attacked. We use limited resources to built our second robot. We aim to strike both Science Park Taiwan Regional and Silicon Valley Regional and go to our final goal, Detroit Championship. We are confidential that we will do a lot better this season.",
          path: "/2020InfiniteRecharge",
        },
        {
          photo: require("@/assets/Elements/Everywhere-2019 Deep Space.png"),
          title: "FRC 2019: Deep Space",
          text: "Sponsored by the aircraft mega company, BOEING, and with the view to explore the unknown space in the future, our theme this year, Deep Space, is looking forward to load and transport the resources to our space craft. Our robot and strategy had changed through the season, and our first robot, Charlie’s Comet had done a great job .",
          path: "/2019DeepSpace",
        },
      ]
  }),
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    imageHeight () {
      // eslint-disable-next-line no-console
      console.log(document.body.clientWidth)
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 1
        case 'sm': return 1
        case 'md': return 1
        case 'lg': return 3
        case 'xl': return 3
      }
    },
  },
  methods: {
    changePath(goToPath){
      this.$router.push(goToPath).catch((error) => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
      });
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/event.scss";
</style>