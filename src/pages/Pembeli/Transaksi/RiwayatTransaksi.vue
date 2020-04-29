<template>
  <q-page >
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :data="data"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
      >

        <template v-slot:top>
          <q-space />
          <span class="text-h2 text-weight-light q-pa-md">
        <span class="text-blue-grey-6" >RIWAYAT TRANSAKSI</span>
      </span>
          <!---<q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" />--->
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

      </q-table>

    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Kode Transaksi',
          align: 'left',
          field: row => row.kodeTransaksi,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'tgltransaksi', align: 'center', label: 'Tanggal Transaksi', field: 'tgltransaksi', sortable: true },
        { name: 'kodesembako', align: 'center', label: 'Kode Sembako', field: 'kodesembako' },
        { name: 'namasembako', align: 'center', label: 'Nama Sembako', field: 'namasembako' },
        { name: 'merk', align: 'center', label: 'Merk', field: 'merk' },
        { name: 'hargasembako', align: 'center', label: 'Harga Sembako', field: 'hargasembako' },
        { name: 'satuan', align: 'center', label: 'satuan', field: 'satuan' },
        { name: 'jumlahbeli', align: 'center', label: 'Jumlah Beli', field: 'jumlahbeli' },
        { name: 'total', align: 'center', label: 'Total Harga', field: 'total' }
      ],
      data: [
        {
          kodeTransaksi: 'T18042002',
          tgltransaksi: '18 April 2020',
          kodesembako: 'B001 , T002',
          namasembako: 'Beras , Telur ',
          merk: 'Rojolele',
          hargasembako: 'RP. ' + 150000,
          satuan: 'Karung',
          jumlahbeli: 2,
          total: 300000

        },
        {

          kodeTransaksi: 'T10042001',
          tgltransaksi: '10 April 2020',
          kodesembako: 'T001',
          namasembako: 'Telur',
          merk: 'Ayam',
          hargasembako: 'RP. ' + 20000,
          satuan: 'Kg',
          jumlahbeli: 5,
          total: 100000

        },
        {

          kodeTransaksi: 'T20042001',
          tgltransaksi: '20 April 2020',
          kodesembako: 'G003',
          namasembako: 'Gula Pasir',
          merk: 'Manis Kita',
          hargasembako: 'RP. ' + 12000,
          satuan: 'Kg',
          jumlahbeli: 6,
          total: 60000

        }

      ]
    }
  },

  methods: {
    // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [...this.data.slice(0, index), addRow, ...this.data.slice(index)]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        this.loading = false
      }, 500)
    }
  }
}
</script>
