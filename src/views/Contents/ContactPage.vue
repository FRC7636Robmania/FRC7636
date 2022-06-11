<template>
  <div>
    <v-img
      aspect-ratio="2"
      src="@/assets/Elements/FrontIMG/About7636.jpg"
      class="align-center"
    >
      <div
        class="fontImg"
      >
        Contact Us
      </div>
    </v-img>
    <div class="box">
      <v-row>
        <v-col
          lg="6"
          md="6"
          sm="12"
          class="text-center my-8 pa-6"
          v-for="(contact, index) in contacts"
          :key="index"
        >
          <div class="size" style="color: black;">
            {{ contact.name }}: <br />
            {{ contact.method }}
          </div>
        </v-col>
        <v-col cols="12" class="text-center my-8 pa-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3638.331362841231!2d120.6258336!3d24.2301866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d1d68110173%3A0xf1a85cea689e4cac!2sNational%20Experimental%20High%20School%20at%20Central%20Taiwan%20Science%20Park!5e0!3m2!1sen!2stw!4v1613675378836!5m2!1sen!2stw"
            width="80%"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
          <div class="size" style="color: black;">
            WorkShop:<br />
            No. 227, Pinghe Road, Daya District, Taichung City, 428
          </div>
        </v-col>
        <v-col lg="6" md="6" sm="12" class="text-center my-8 pa-6">
          <v-row>
            <v-col cols="3" v-for="(icon, index) in icons" :key="index">
              <v-btn :href="icon.path" target="_blank" icon>
                <v-icon size="10vmin" color="black">{{ icon.title }}</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    contacts: [
      {
        name: "Tel",
        method: " +886 4 2568 6850",
      },
      {
        name: "Email",
        method: "frc7636@nehs.tc.edu.tw",
      },
    ],
    icons: [
      {
        title: "mdi-facebook",
        path: "https://www.facebook.com/7636.Robomania",
      },
      {
        title: "mdi-youtube",
        path: "https://www.youtube.com/channel/UCXFLKnRlpTNMn2aaLVM9H6g",
      },
      {
        title: "mdi-instagram",
        path: "https://www.instagram.com/frc7636_robomania/",
      },
      {
        title: "mdi-email",
        path: "",
      },
    ],
  }),
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/contactPage.scss";
</style>
