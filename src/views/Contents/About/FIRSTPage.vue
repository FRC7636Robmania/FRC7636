<template>
  <div>
    <v-img
      aspect-ratio="2"
      src="@/assets/Elements/FrontIMG/About-FIRST.jpg"
      class="d-flex align-end"
    >
      <h1 class="ml-6 mb-2" style="font-style: italic; font-size: 7vmin;">
        About<br />FIRST
      </h1>
    </v-img>

    <div class="box">
      <div class="inside">
        <div class="pa-6 mx-auto contentSize" height="220" style="font-size:3vmin;">
          {{ firstContent }}
        </div>
      </div>
      <div class="d-flex">
        <v-row>
          <v-col cols="12" sm="5" md="3" class="text-center my-auto">
            <a href="https://www.firstinspires.org/robotics/frc">
              <img
                  class="pt-12 pa-5"
                  style="width:100%;"
                  src="@/assets/Elements/About/About - FIRSTfirstdown.png"
              />
            </a>
          </v-col>
          <v-col cols="12" sm="7" md="9" class="pt-10">
            <div class="inside pa-6 contentSize" style="font-size:3vmin;">{{ secondContent }}</div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    firstContent:
      "FIRST, as “For Inspiration and Recognition of Science and Technology” is an international youth organization that operates the FIRST Robotics Competition, FIRST LEGO League, FIRST Lego League Jr., FIRST LEGO League Jr. Discovery Edition, and FIRST Tech Challenge competitions.Founded by Dean Kamen and Woodie Flowers in 1989, its expressed goal is to develop ways to inspire students in engineering and technology fields. Its philosophy is expressed by the organization as coopertition and gracious professionalism. FIRST also operates FIRST Place, a research facility at FIRST headquarters in Manchester, New Hampshire, where it holds educational programs and day camps for students and teachers.",
    secondContent:
      "To us, FIRST is an access that we can fully develop our professional skills and make our dream come true. FIRST is not just a competition to us, it is a place filled with talented people, so we can learn plenty of skills from others and make our team become stronger. To have more chances to compete with other teams, we pay a lot of efforts during the competition.",
  }),
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/about.scss";
</style>
