<template>
  <q-layout view="lHh Lpr lFf">

    <q-header class="bg-white text-blue-grey-6">

      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title></q-toolbar-title>
        <q-btn flat round dense icon="person" style="font-size: 20px;">
          <q-menu>
            <div class="row no-wrap q-pa-lg">
              <div class="column">
                <q-item-label class="text-h6">Hello Chandra!</q-item-label>
                <q-linear-progress class="q-mb-lg" :value="100" color="grey-4" style="height: 2px"/>
                <div class="items-center">
                  <div class="text-bold items-center">18415003</div>
                  <div>Mahaditya Chandra</div>
                </div>
              </div>

              <q-separator vertical inset class="q-mx-lg"></q-separator>

              <div class="column items-center">
                <q-btn flat round dense>
                  <q-avatar size="72px">
                    <img src="statics/logo.png">
                  </q-avatar>
                </q-btn>

                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>

                <q-btn
                  color="teal"
                  label="Edit Profil"
                  unelevated
                  size="sm"
                  v-close-popup
                  to="/sembakocan/editProfil">
                  <q-tooltip>Edit Profil Anda</q-tooltip>
                </q-btn>

                <q-btn
                  color="teal"
                  label="Keluar"
                  unelevated
                  size="sm"
                  v-close-popup to="/auth/login">
                  <q-tooltip>Keluar disini..</q-tooltip>
                </q-btn>
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-img spinner-color="white"  placeholder-src="statisc/sembakocan.png" src="statics/sembakocanlogin.png"></q-img>
    <q-drawer
      v-model="left"
      :breakpoint="500"
      show-if-above
      content-class="bg-white text-teal-10"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item style="height: 50px;" class="bg-white text-bold" to="/sembakocan">
            <q-item-section>
              SEMBAKOCAN APPS
            </q-item-section>
          </q-item>
          <q-item class="justify-center text-center q-mb-md q-pt-md">
            <div>
              <q-avatar size="100px" class="q-mb-md">
                <img src="statics/logo.png" alt="">
              </q-avatar>
              <div class="text-weight-bold">18415003</div>
              <div>Mahaditya Chandra</div>
            </div>
          </q-item>
          <q-item-label
            header
            class="text-grey-8"
          >
           Jenis Sembako
          </q-item-label>
          <q-item clickable active-class="active" exact v-ripple to="/sembakocan/beras">
            <q-item-section avatar>
              <q-icon name="label" />
            </q-item-section>
            <q-item-section>
              Beras
            </q-item-section>
          </q-item>
          <q-item clickable active-class="active" exact v-ripple to="/sembakocan/telur">
            <q-item-section avatar>
              <q-icon name="label" />
            </q-item-section>
            <q-item-section>
              Telur
            </q-item-section>
          </q-item>
          <q-item clickable active-class="active" exact v-ripple to="/sembakocan/gulapasir">
            <q-item-section avatar>
              <q-icon name="label" />
            </q-item-section>
            <q-item-section>
              Gula Pasir
            </q-item-section>
          </q-item>
          <q-item clickable active-class="active" exact v-ripple to="/sembakocan/minyak">
            <q-item-section avatar>
              <q-icon name="label" />
            </q-item-section>
            <q-item-section>
              Minyak
            </q-item-section>
          </q-item>
          <q-item clickable active-class="active" exact v-ripple to="/sembakocan/susu">
            <q-item-section avatar>
              <q-icon name="label" />
            </q-item-section>
            <q-item-section>
              Susu
            </q-item-section>
          </q-item>

          <q-item-label
            header
            class="text-grey-8"
          >
            Transaksi
          </q-item-label>
          <q-item clickable active-class="active" exact v-ripple to="/sembakocan/favorit">
            <q-item-section avatar>
              <q-icon name="stars" />
            </q-item-section>
            <q-item-section>
              Favorit
            </q-item-section>
          </q-item>
          <q-item clickable active-class="active" exact v-ripple to="/sembakocan/keranjang">
            <q-item-section avatar>
              <q-icon name="shopping_basket" />
            </q-item-section>
            <q-item-section>
              Keranjang
            </q-item-section>
          </q-item>
          <q-item clickable active-class="active" exact v-ripple to="/sembakocan/riwayatTransaksi">
            <q-item-section avatar>
              <q-icon name="money" />
            </q-item-section>
            <q-item-section>
              Riwayat Transaksi
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>

</template>

<script>

export default {
  name: 'PembeliLayout',

  data () {
    return {
      left: false
    }
  }
}
</script>
