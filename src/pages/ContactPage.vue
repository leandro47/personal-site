<template>
  <section class="page-section" id="contact">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Contact</h2>
        <h3 class="section-subheading text-muted">
          Some places you can find me. ;)
        </h3>
      </div>
    <div class="row">
      <Network :net-work="'Twitter'" :icon="'fab fa-twitter-square'" :link="'https://twitter.com/LeandroDS47'" />
      <Network :net-work="'Facebook'" :icon="'fab fa-facebook-square'" :link="'https://www.facebook.com/leandro.silva.5059601/'" />
      <Network :net-work="'Linkedin'" :icon="'fab fa-linkedin'" :link="'https://www.linkedin.com/in/leandro-silva-a5b84318b/'" />
      <Network :net-work="'Github'" :icon="'fab fa-github-square'" :link="'https://github.com/leandro47'" />
      <Network :net-work="'Email'" :icon="'fas fa-envelope'" :link="'mailto:leandrosilva47@live.com'" />
      <Network :net-work="'WhatsApp'" :icon="'fab fa-whatsapp-square'" :link="'https://api.whatsapp.com/send?phone=5547988387536'" />
    </div>
    </div>
  </section>
</template>

<script>
import Network from './../components/ContactItem'
export default {
  components: {
    Network
  }
};
</script>

<style scoped>
</style>