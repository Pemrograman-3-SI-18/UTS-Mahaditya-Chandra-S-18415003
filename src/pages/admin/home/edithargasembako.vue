<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">

      <div></div>
      <q-img spinner-color="white" placeholder-src="statics/sembakocanlogin.png" src="statics/sembakocanlogin.png"></q-img>
      <q-space />
      <span class="text-h2 text-weight-light q-pa-md">
        <span class="text-blue-grey-6" >EDIT HARGA SEMBAKO</span>
      </span>
      <div class="q-pa-md">
        <q-form
          class="q-gutter-md"
        >

          <q-input
            label="Kode Sembako"
            lazy-rules
            color="teal"
            v-model="kodesembako"
            :rules="[
           val => val !== null && val !== '' || 'Kode Sembako Harus Terisi'
           ]">
            <template v-slot:append>
              <q-icon name="assignment_late"/>
            </template>
          </q-input>

          <q-input
            label="Nama Sembako"
            lazy-rules
            color="teal"
            v-model="namasembako"
            :rules="[
           val => val !== null && val !== '' || 'Nama Sembako Harus Terisi'
           ]">
            <template v-slot:append>
              <q-icon name="title"/>
            </template>
          </q-input>

          <q-input
            label="Merk Sembako"
            lazy-rules
            color="teal"
            v-model="merksembako"
            :rules="[
           val => val !== null && val !== '' || 'Merk Sembako Harus Terisi'
           ]">
            <template v-slot:append>
              <q-icon name="bookmarks"/>
            </template>
          </q-input>

          <q-input
            label="Harga Sembako yang Baru"
            lazy-rules
            color="teal"
            v-model="hargasembakobaru"
            :rules="[
           val => val !== null && val !== '' || 'Harga Baru Harus Terisi'
           ]">
            <template v-slot:append>
              <q-icon name="control_point"/>
            </template>
          </q-input>

          <div>
            <q-btn
              unelevated
              icon="add"
              label="Edit Harga Sembako"
              style="height: 50px"
              color="teal-6"/>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      kodesembako: null,
      namasembako: null,
      merksembako: null,
      hargasembakobaru: null

    }
  }
}
</script>

<style scoped>

</style>
