<template>
    <div>
        <v-img
        aspect-ratio="2"
        src="@/assets/Elements/FrontIMG/MentorLeaderHeader.jpg"
        class="align-center"
        >
            <div class="text-center" style="color: white; font-size: 8vmin; font-weight: bold;">
                About <br>
                team 7636
            </div>
            
        </v-img>

        <div class="pa-10" style="background-color: #d5d5d5;">
            <div class="pa-6 description text-center">
                #7636 Robomania, standing for the enthusiastic students who have a passionate spirit
                about robot and indicates we’ll never give up changing the world.     
            </div>
            <div class="text-center pa-6" style="color: black; font-size:3vmin;">
                FRC team 7636 Robomania is located in the central of Taiwan - Taichung City. 
                Since our rookie year in 2019, we've developed into an experienced and well-prepared team, 
                aiming at the Detroit championship every season. 
                We are all passionate and willing to bring differences to our society. 
                We are diligent and we work hard in our free time to change the world through creative designs, ideal innovations, and well-developed strategies.
                The spirit of 7636 Robomania will last forever.
            </div>
        </div>

        <v-img
        aspect-ratio="2.5"
        src="@/assets/Elements/About/Team7636/About7636.jpg"
        class="align-center"
        >
        </v-img>

        <div class="box">
            <div v-for="(item, index) in items" :key="index">
                <div class="pa-6">
                    <v-row>
                        <v-col
                            :order="imageHeight"
                            v-if="index % 2 == 0"
                            cols="12"
                            md="4"
                            class="text-center my-auto"
                        >
                            <img :src="item.imgPath" style="width: 95%; background-color:black;">
                        </v-col>

                        <v-col order="2">
                            <div class="contentSize" style="font-size:3vmin;">
                                {{ item.content }}
                            </div>
                        </v-col>
                        <v-col
                            v-if="index % 2 == 1"
                            cols="12"
                            md="4"
                            class="text-center my-auto"
                        >
                            <img :src="item.imgPath" style=" width: 95%;">
                        </v-col>                        
                    </v-row>
                </div>                                     
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data:()=>({
        items: [
            {
                content: "FRC team 7636 is made up of students studying in National Experimental High School @ Central Taiwan Science Park, including 50+ students and 4 mentors. We developed a unique three-department team structure to operate team 7636 the best. By separating Mechanism, Electric Engineering and Strategy Department, everyone can learn skills in different fields and work together as a whole.",
                imgPath: require("@/assets/Elements/About/Team7636/IMG_1209.jpg"),
            },
            {
                content: "Our main goal is to learn skills through FIRST and fulfill our dream as well as passing the spirit of FIRST and 7636 Robomania on. We want to improve our every skill and participate in the championship. We also want to reach out to the public and minor schools to pass our spirits and increase public awareness. We believe that we are changing the world by what we did.",
                imgPath: require("@/assets/Elements/About/Team7636/IMG_3409.jpg"),
            },
            {
                content: "Base on our missions, we held both recruiting-educating programs and outreach programs. We uses our free time during and between semesters to recruit more team members and to teach them skills in different fields. We also reach out to the public by collaborating with the government or minor schools. We practice and gain skills through the lesson, fulfilling our self and changing the world at the same time.",
                imgPath: require("@/assets/Elements/About/Team7636/IMG_8169.jpg"),
            },
        ],
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
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/about.scss";
</style>