import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/admin/home/DataSembako.vue') },
      { path: 'tambahstoksembakocan', component: () => import('pages/admin/home/Tambah Stok Sembakocan.vue') },
      { path: 'datatransaksipelanggan', component: () => import('pages/admin/home/DataTransaksiSembako.vue') },
      { path: 'edithargasembako', component: () => import('pages/admin/home/edithargasembako.vue') }

    ]
  },
  {
    path: '/sembakocan',
    component: () => import('layouts/PembeliLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Pembeli/halamanutama.vue') },
      { path: 'editProfil', component: () => import('pages/Pembeli/editprofil.vue') },
      { path: 'beras', component: () => import('pages/Pembeli/Jenissembako/Beras.vue') },
      { path: 'telur', component: () => import('pages/Pembeli/Jenissembako/Telur.vue') },
      { path: 'gulapasir', component: () => import('pages/Pembeli/Jenissembako/Gula Pasir.vue') },
      { path: 'minyak', component: () => import('pages/Pembeli/Jenissembako/Minyak.vue') },
      { path: 'susu', component: () => import('pages/Pembeli/Jenissembako/Susu.vue') },
      { path: 'keranjang', component: () => import('pages/Pembeli/Transaksi/Keranjang.vue') },
      { path: 'favorit', component: () => import('pages/Pembeli/Transaksi/Favorit.vue') },
      { path: 'riwayatTransaksi', component: () => import('pages/Pembeli/Transaksi/RiwayatTransaksi.vue') }

    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginRegisLayoutSembakocan.vue'),
    children: [
      { path: 'auth/login', component: () => import('pages/users/Login.vue') },
      { path: 'auth/registrasi', component: () => import('pages/users/registrasi.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
