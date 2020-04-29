<template>
<q-page>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-md-4 col-xs-12 q-pa-md">
        <q-card flat class="bg-white text-blue-grey-14">
          <q-card-section>
            <div class="text-h6">
              BERAS ROJOLELE
            </div>
          </q-card-section>
          <q-card-section>
            <q-img spinner-color="white" style="height: 100%; max-width: 100%" placeholder-src="statics/rojolele.jpg" src="statics/rojolele.jpg"/>
          </q-card-section>
          <q-card-section>
            <div>
              Harga : Rp. 200.000
            </div>

            <q-item-label class="text-red-10">
              Tersisa 150
            </q-item-label>
          </q-card-section>
          <q-card-section>
            <div>
              <q-btn rounded flat icon="stars" label="HAPUS SEMBAKO" unelevated no-caps color="negative">
                <q-tooltip>Dihapus dari Favorit</q-tooltip>
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
            Kualitas Beras Medium
            Pulen, bebas Kutu, bebas pewangi, bebas bahan kimia berbahaya, bersih.
            Cocok untuk restoran, rumah makan, padang warteg.

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
              <q-btn rounded flat icon="stars" label="HAPUS SEMBAKO" unelevated no-caps color="negative">
                <q-tooltip>Dihapus dari Favorit</q-tooltip>
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
              SUSU ULTRA MILK
            </div>
          </q-card-section>
          <q-card-section>
            <q-img spinner-color="white" style="height: 100%; max-width: 100%" placeholder-src="statics/ultramilk.jpg" src="statics/ultramilk.jpg"/>
          </q-card-section>
          <q-card-section>
            <div>
              Harga : Rp. 12.000
            </div>

            <q-item-label class="text-red-10">
              Tersisa 915
            </q-item-label>
          </q-card-section>
          <q-card-section>
            <div>
              <q-btn rounded flat icon="stars" label="HAPUS SEMBAKO" unelevated no-caps color="negative">
                <q-tooltip>Dihapus dari Favorit</q-tooltip>
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
            Susu Ultra Milk 1 Liter,
            salah satu produk susu Ultra Milk yang digemari oleh keluarga Indonesia.
            Seluruh manfaat susu Ultra dapat didapatkan dalam susu yang kaya akan protein, karbohidrat, vitamin, kalsium, fosfor, dan magnesium.

          </q-card-section>
        </q-card>
      </div>

    </div>
  </div>

</q-page>
</template>

<script>
export default {
  name: 'beras'
}
</script>

<style scoped>

</style>
