<template>
  <div id="app">
    <input type="file" @change="onFileChange" multiple="multiple" />

    <div id="preview">
      <img v-if="url" :src="url" />
    </div>
  </div>
</template>
<style scoped>
body {
  background-color: #e2e2e2;
}

#app {
  padding: 20px;
}

#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 50%;
  max-height: 500px;
}
</style>
<script>
export default {
  data() {
    return {
      url: null,
    };
  },

  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      let url = URL.createObjectURL(file);
    },
  },
};
</script>



