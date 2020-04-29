<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-md-4 col-xs-12 q-pa-md">
          <q-card flat class="bg-white text-blue-grey-14">
            <q-card-section>
              <div class="text-h6">
                SUSU INDOMILK
              </div>
            </q-card-section>
            <q-card-section>
              <q-img spinner-color="white" style="height: 100%; max-width: 100%" placeholder-src="statics/indomilk.jpg" src="statics/indomilk.jpg"/>
            </q-card-section>
            <q-card-section>
              <div>
                Harga : Rp. 11.000
              </div>

              <q-item-label class="text-red-10">
                Tersisa 560
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
             Susu Indomilk 1 Liter,
              INDOMILK Susu UHT Full Cream 1 Liter adalah salah satu varian minuman susu UHT dari INDOMILK yang terbuat dari susu sapi segar pilihan.
              Mengandung Vitamin A, B1, B2, B6, E, Inulin serta kaya akan Vitamin D, Kalsium, dan Fosfor untuk membantu menjaga kesehatan tubuh dan menjaga kepadatan tulang dan gigi keluarga.
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-4 col-xs-12 q-pa-md">
          <q-card flat class="bg-white text-blue-grey-14">
            <q-card-section>
              <div class="text-h6">
                SUSU DIAMOND
              </div>
            </q-card-section>
            <q-card-section>
              <q-img spinner-color="white" style="height: 100%; max-width: 100%" placeholder-src="statics/diamond.jpg" src="statics/diamond.jpg"/>
            </q-card-section>
            <q-card-section>
              <div>
                Harga : Rp. 13.000
              </div>

              <q-item-label class="text-red-10">
                Tersisa 410
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
             Susu Diaomond 1 Liter,
              Minuman Susu yang mengandung mineral, vitamin Sumber fosfor dan kalsium yang tinggi dengan Rasa yang nikmat.
              Bermanfaat untuk pembentukan energi dan jaringan tubuh.

              Kebutuhan kalsium tubuh Anda akan terpenuhi dengan baik.

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
  name: 'susu'
}
</script>

<style scoped>

</style>
