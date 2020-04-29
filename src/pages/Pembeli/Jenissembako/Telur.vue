<template>
<q-page >

  <div class="q-pa-md">

  </div>
    <div class="row">
      <div class="col-md-4 col-xs-12 q-pa-md">
        <q-card flat class="bg-white text-blue-grey-14">
          <q-card-section>
            <div class="text-h6">
              TELUR AYAM
            </div>
          </q-card-section>
          <q-card-section>
            <q-img spinner-color="white" style="height: 100%; max-width: 100%" placeholder-src="statics/telurayam.jpg" src="statics/telurayam.jpg"/>
          </q-card-section>
          <q-card-section>
            <div>
              Harga : Rp. 20.000
            </div>

            <q-item-label class="text-red-10">
              Tersisa 200
            </q-item-label>
          </q-card-section>
          <q-card-section>
            <div>
              <q-btn rounded flat icon="stars" label="FAVORIT" unelevated no-caps color="negative">
                <q-tooltip>Ditambakan Ke Favorit</q-tooltip>
              </q-btn>
            </div> <q-input
            filled
            v-model="Jumlahbeli"
            label="Jumlah Beli*"
            hint="Jumlah Beli"

          />
            <q-btn unelevated color="teal" icon="add_shopping_cart" no-caps label="Tambah Ke Keranjang">
              <q-tooltip>Ditambakan Ke Keranjang anda</q-tooltip>
            </q-btn>
          </q-card-section>
          <q-card-section>
            DESKRIPSI PRODUK
          </q-card-section>
          <q-card-section>
          Telur Ayam 1 KG,
            telur ini berkualitas terbaik dengan peternakan yang dijaga seperti anak sendiri

          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-4 col-xs-12 q-pa-md">
        <q-card flat class="bg-white text-blue-grey-14">
          <q-card-section>
            <div class="text-h6">
              TELUR BEBEK
            </div>
          </q-card-section>
          <q-card-section>
            <q-img spinner-color="white" style="height: 100%; max-width: 100%" placeholder-src="statics/telurbebek.jpg" src="statics/telurbebek.jpg"/>
          </q-card-section>
          <q-card-section>
            <div>
              Harga : Rp. 30.000
            </div>

            <q-item-label class="text-red-10">
              Tersisa 140
            </q-item-label>
          </q-card-section>
          <q-card-section>
            <div>
              <q-btn rounded flat icon="stars" label="FAVORIT" unelevated no-caps color="negative">
                <q-tooltip>Ditambakan Ke Favorit</q-tooltip>
              </q-btn>
            </div> <q-input
            filled
            v-model="Jumlahbeli"
            label="Jumlah Beli*"
            hint="Jumlah Beli"

          />
            <q-btn unelevated color="teal" icon="add_shopping_cart" no-caps label="Tambah Ke Keranjang">
              <q-tooltip>Ditambakan Ke Keranjang anda</q-tooltip>
            </q-btn>
          </q-card-section>
          <q-card-section>
            DESKRIPSI PRODUK
          </q-card-section>
          <q-card-section>
            Telur Bebek 1 KG,
            telur ini berkualitas terbaik dengan peternakan yang dijaga seperti anak sendiri

          </q-card-section>
        </q-card>
      </div>

  </div>

</q-page>
</template>

<script>
export default {
  name: 'telur'
}
</script>

<style scoped>

</style>
