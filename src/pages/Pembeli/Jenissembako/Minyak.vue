<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-md-4 col-xs-12 q-pa-md">
          <q-card flat class="bg-white text-blue-grey-14">
            <q-card-section>
              <div class="text-h6">
                MINYAK FILMA
              </div>
            </q-card-section>
            <q-card-section>
              <q-img spinner-color="white" style="height: 100%; max-width: 100%" placeholder-src="statics/filma.jpg" src="statics/filma.jpg"/>
            </q-card-section>
            <q-card-section>
              <div>
                Harga : Rp. 13.000
              </div>

              <q-item-label class="text-red-10">
                Tersisa 520
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
              Minyak Filma 1 Liter,
              Filma adalah Minyak Goreng Non Kolesterol, Filma Minyak Goreng merupakan minyak goreng yang alami yaitu Minyak Nabati Tidak Mengandung Kolesterol.Filma mengandung 3 Nutrisi yaitu: Omega 6, Omega 9 dan Vitamin E.

            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-4 col-xs-12 q-pa-md">
          <q-card flat class="bg-white text-blue-grey-14">
            <q-card-section>
              <div class="text-h6">
                MINYAK SUNCO
              </div>
            </q-card-section>
            <q-card-section>
              <q-img spinner-color="white" style="height: 100%; max-width: 100%" placeholder-src="statics/sunco.jpg" src="statics/sunco.jpg"/>
            </q-card-section>
            <q-card-section>
              <div>
                Harga : Rp. 11.000
              </div>

              <q-item-label class="text-red-10">
                Tersisa 630
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
              Minyak Goreng Sunco 1 Liter,
              Diproduksi dari buah kepala sawit yang segar. Minyak ini juga sudah diuji organoleptik yang membuktikan kualitas minyak goreng yang baik secara sensorik

            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-4 col-xs-12 q-pa-md">
          <q-card flat class="bg-white text-blue-grey-14">
            <q-card-section>
              <div class="text-h6">
               MINYAK SANIA
              </div>
            </q-card-section>
            <q-card-section>
              <q-img spinner-color="white" style="height: 100%; max-width: 100%" placeholder-src="statics/sania.jpg" src="statics/sania.jpg"/>
            </q-card-section>
            <q-card-section>
              <div>
                Harga : Rp. 12.000
              </div>

              <q-item-label class="text-red-10">
                Tersisa 720
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
             Minyak Goreng Sania 1 Liter,
              Sania adalah minyak goreng premium yang diproduksi dengan beberapa tahap proses pemurnian dan penyaringan.
              KOMPOSISI : Minyak kelapa sawit dan vitamin A (mengandung antioksidan tokoferol).

            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'minyak'
}
</script>

<style scoped>

</style>
