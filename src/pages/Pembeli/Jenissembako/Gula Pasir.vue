<template>
<q-page>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-md-4 col-xs-12 q-pa-md">
        <q-card flat class="bg-white text-blue-grey-14">
          <q-card-section>
            <div class="text-h6">
              GULA PASIR ROSEBRAND
            </div>
          </q-card-section>
          <q-card-section>
            <q-img spinner-color="white" style="height: 100%; max-width: 100%" placeholder-src="statics/rosebrand.jpg" src="statics/roseberand.jpg"/>
          </q-card-section>
          <q-card-section>
            <div>
              Harga : Rp. 14.000
            </div>

            <q-item-label class="text-red-10">
              Tersisa 500
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
            Gula Pasir merk ROSEBRAND 1 KG,
            Gula kristal putih manis dan bersih

          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-4 col-xs-12 q-pa-md">
        <q-card flat class="bg-white text-blue-grey-14">
          <q-card-section>
            <div class="text-h6">
              GULA PASIR GMP
            </div>
          </q-card-section>
          <q-card-section>
            <q-img spinner-color="white" style="height: 100%; max-width: 100%" placeholder-src="statics/gmp.jpg" src="statics/gmp.jpg"/>
          </q-card-section>
          <q-card-section>
            <div>
              Harga : Rp. 16.500
            </div>

            <q-item-label class="text-red-10">
              Tersisa 421
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
            Gula Pasir Gunung Madu Plantations 1 KG,
            Gula Asli Lampung

          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-4 col-xs-12 q-pa-md">
        <q-card flat class="bg-white text-blue-grey-14">
          <q-card-section>
            <div class="text-h6">
              GULA PASIR MANISKITA
            </div>
          </q-card-section>
          <q-card-section>
            <q-img spinner-color="white" style="height: 100%; max-width: 100%" placeholder-src="statics/maniskita.jpg" src="statics/maniskita.jpg"/>
          </q-card-section>
          <q-card-section>
            <div>
              Harga : Rp. 12.000
            </div>

            <q-item-label class="text-red-10">
              Tersisa 800
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
            Gula Pasir Maniskita 1 KG,
            Gula Maniskita diproses dari bahan baku pilihan sehingga menghasilkan gula yang bermutu baik.

          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>

</q-page>
</template>

<script>
export default {
  name: 'Gula Pasir'
}
</script>

<style scoped>

</style>
