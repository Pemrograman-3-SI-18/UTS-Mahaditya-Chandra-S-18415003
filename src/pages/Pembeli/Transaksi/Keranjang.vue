<template>
  <div class="q-pa-md">
<span class="text-h2 text-weight-light q-pa-md">
        <span class="text-blue-grey-6" >KERANJANG</span>
      </span>
    <q-table

      title=" "
      :data="data"
      :columns="columns"
      row-key="name"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      :selected.sync="selected"
    />
    <q-btn color="teal" :disable="loading" icon="money" label="Lakukan Transaksi"   />

     <div class="q-mt-md">
      Selected: {{ JSON.stringify(selected) }}
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selected: [],
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Kode Sembako',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namasembako', align: 'center', label: 'Nama Sembako', field: 'namasembako', sortable: true },
        { name: 'merk', align: 'center', label: 'Merk', field: 'merk', sortable: true },
        { name: 'hargasembako', align: 'center', label: 'Harga Sembako', field: 'hargasembako' },
        { name: 'jumlahbeli', align: 'center', label: 'Jumlah Beli', field: 'jumlahbeli', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'satuan', align: 'center', label: 'Satuan', field: 'satuan', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      data: [
        {
          name: 'T001',
          namasembako: 'Telur',
          merk: 'Ayam',
          hargasembako: 'RP. ' + 20000,
          jumlahbeli: 2,
          satuan: 'Kg'
        },
        {
          name: 'M001',
          kodesembako: 'M001',
          namasembako: 'Minyak',
          merk: 'Filma',
          hargasembako: 'RP. ' + 13000,
          jumlahbeli: 5,
          satuan: 'Liter'
        },
        {
          name: 'G001',
          namasembako: 'Gula Pasir',
          merk: 'Rosebrand',
          hargasembako: 'RP. ' + 14000,
          jumlahbeli: 5,
          satuan: 'Kg'
        },
        {
          name: 'B002',
          namasembako: 'Beras',
          merk: 'Pandan Wangi',
          hargasembako: 'RP. ' + 300000,
          jumlahbeli: 1,
          satuan: 'Karung'
        },
        {
          name: 'M003',
          namasembako: 'Minyak',
          merk: 'Filma',
          hargasembako: 'RP. ' + 13000,
          jumlahbeli: 2,
          satuan: 'Liter'
        }
      ]
    }
  },
  methods: {
    getSelectedString () {
      return this.selected.length === 0 ? '' : `${this.selected.length} record${this.selected.length > 1 ? 's' : ''} selected of ${this.data.length}`
    }
  }
}
</script>
