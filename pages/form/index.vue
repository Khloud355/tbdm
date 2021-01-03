<template>
  <section class="khloud">
    <div class="container">
      <!-- <div class="image">
                <img src="" alt="">
            
            </div>
                <div class="file">
                    <label for="file">{{filename}}</label>
            <input type="file" id="file" hidden>
            </div> -->
      <label class="btn btn-xs btn-primary">
        <input type="file" id="fileId" hidden @change="onFileChange" multiple />
        Upload file
      </label>
      <div class="show" v-for="file in fileName" :key="file.id">
        {{ file.name }}
      </div>
    <p><input type="file"  accept="image/*" name="image" id="file"  @click="loadFile" style="display: none;"></p>
<p><label for="file" style="cursor: pointer;">Upload Image</label></p>
<p><img id="output" width="200" /></p>

    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      fileName: [],
      image:'',
      khloud:''
    };
  },
  methods: {
    onFileChange(event) {
      // console.log(event.target.files)
      this.fileName = event.target.files;
      console.log(this.fileName);
      this.image=event.target.files[0];
      this.khloud=this.image.type
      console.log( this.khloud)
    },
  },
//  loadFile(event){
//   this.image.src = URL.createObjectURL(event.target.files[0]);
//   console.log('khloud',URL.createObjectURL(event.target.files[0]));
//  }
};
</script>