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
          <q-img spinner-color="white" placeholder-src="statics/sembakocanlogin.png" src="statics/sembakocanlogin.png"></q-img>
          <q-space />
          <span class="text-h2 text-weight-light q-pa-md">
        <span class="text-blue-grey-6" >DAFTAR STOK SEMBAKO</span>
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
      <q-btn color="teal" :disable="loading" icon="add" label="Tambah Stok Sembako" to="/admin/tambahstoksembakocan"  />
      <q-btn color="teal" :disable="loading" icon="add" label="Edit Harga Sembako" to="/admin/edithargasembako"  />
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
          label: 'Kode Sembako',
          align: 'left',
          field: row => row.kodesembako,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namasembako', align: 'center', label: 'Nama Sembako', field: 'namasembako', sortable: true },
        { name: 'merk', align: 'center', label: 'Merk', field: 'merk', sortable: true },
        { name: 'hargasembako', align: 'center', label: 'Harga Sembako', field: 'hargasembako' },
        { name: 'stoksembako', align: 'center', label: 'Stok Sembako', field: 'stoksembako' },
        { name: 'satuan', align: 'center', label: 'Satuan', field: 'satuan' }
      ],
      data: [
        {

          kodesembako: 'B001',
          namasembako: 'Beras',
          merk: 'Rojolele',
          hargasembako: 'RP. ' + 200000,
          stoksembako: 150,
          satuan: 'Karung'

        },
        {

          kodesembako: 'B002',
          namasembako: 'Beras',
          merk: 'Pandan Wangi',
          hargasembako: 'RP. ' + 300000,
          stoksembako: 100,
          satuan: 'Karung'

        },
        {

          kodesembako: 'T001',
          namasembako: 'Telur',
          merk: 'Ayam',
          hargasembako: 'RP. ' + 20000,
          stoksembako: 200,
          satuan: 'Kg'

        },
        {

          kodesembako: 'T002',
          namasembako: 'Telur',
          merk: ' Bebek',
          hargasembako: 'RP. ' + 30000,
          stoksembako: 140,
          satuan: 'Kg'

        },
        {

          kodesembako: 'G001',
          namasembako: 'Gula Pasir',
          merk: 'Rosebrand',
          hargasembako: 'RP. ' + 14000,
          stoksembako: 500,
          satuan: 'Kg'

        },
        {

          kodesembako: 'G002',
          namasembako: 'Gula Pasir',
          merk: 'GMP',
          hargasembako: 'RP. ' + 16500,
          stoksembako: 421,
          satuan: 'Kg'

        },
        {

          kodesembako: 'G003',
          namasembako: 'Gula Pasir',
          merk: 'Manis Kita',
          hargasembako: 'RP. ' + 12000,
          stoksembako: 800,
          satuan: 'Kg'

        },
        {

          kodesembako: 'M001',
          namasembako: 'Minyak',
          merk: 'Filma',
          hargasembako: 'RP. ' + 13000,
          stoksembako: 520,
          satuan: 'Liter'

        },
        {

          kodesembako: 'M002',
          namasembako: 'Minyak',
          merk: 'Sunco',
          hargasembako: 'RP. ' + 11000,
          stoksembako: 630,
          satuan: 'Liter'

        },
        {

          kodesembako: 'M003',
          namasembako: 'Minyak',
          merk: 'Sania',
          hargasembako: 'RP. ' + 12000,
          stoksembako: 720,
          satuan: 'Liter'

        },
        {

          kodesembako: 'S001',
          namasembako: 'Susu',
          merk: 'Indomilk',
          hargasembako: 'RP. ' + 11000,
          stoksembako: 560,
          satuan: 'Liter'

        },
        {

          kodesembako: 'S002',
          namasembako: 'Susu',
          merk: 'Diamond',
          hargasembako: 'RP. ' + 13000,
          stoksembako: 410,
          satuan: 'Liter'

        },
        {

          kodesembako: 'S003',
          namasembako: 'Susu',
          merk: 'Ultra Milk',
          hargasembako: 'RP. ' + 12000,
          stoksembako: 915,
          satuan: 'Liter'

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
