<template>
  <div class="columns is-multiline" id="images">
    <div class="column is-one-quarter" v-for="n in numberOfImages">
      <img :src="'https://source.unsplash.com/random/' + size + '?sig=' + n" class="image" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberOfImages: 12,
      width: window.screen.width,
      height: window.screen.height
    };
  },
  computed:{
    size(){
      return this.width + 'x' + this.height;
    }
  }
};
</script>

<style>
#images {
  padding: 5px;
}
.image:hover {
  transition: all 0.3s;
  box-shadow: 0 0.3125rem 1rem 0 rgba(0, 0, 0, 0.4);
}
</style>
