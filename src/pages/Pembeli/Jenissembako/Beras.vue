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
              <q-btn rounded flat icon="stars" label="FAVORIT" unelevated no-caps color="negative">
                <q-tooltip>Ditambakan Ke Favorit</q-tooltip>
              </q-btn>
            </div>
            <q-input
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
              BERAS PANDAN WANGI
            </div>
          </q-card-section>
          <q-card-section>
            <q-img spinner-color="white" style="height: 100%; max-width: 100%" placeholder-src="statics/pandan wangi.jpg" src="statics/pandan wangi.jpg"/>
          </q-card-section>
          <q-card-section>
            <div>
              Harga : Rp. 300.000
            </div>

            <q-item-label class="text-red-10">
              Tersisa 100
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
            Beras BMW 20kg kami selalu baru, kualitas terjamin dan ASLI PANDAN WANGI.
            Beras BMW Pandan Wangi dihasilkan dari beras bibit unggul varietas pandan wangi asli pilihan
            dengan keunggulan rasa nasi enak, pulen, dan harum beraroma wangi pandan asli.

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
