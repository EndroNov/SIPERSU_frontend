import { useState } from 'react'
import './d_admin.css'

/* ── Icon components ── */
const IconHome = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)
const IconSend = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
)
const IconBell = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
)
const IconUser = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)
const IconBook = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
)
const IconHelp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
)
const IconLogout = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
)
const IconEye = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)
const IconTrash = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4h6v2" />
  </svg>
)
const IconFilter = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
)
const IconSearch = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

/* ── Data ── */
const initialData = [
  { id: 1, noSurat: 'M.002/9/KL.01.00/2026', tanggal: '23 Okt 2023', perihal: 'Undangan Rapat Koordinasi', tujuan: 'Dosen Pengajar Semester Ganjil' },
  { id: 2, noSurat: 'M.005/9/KL.01.00/2026', tanggal: '10 Nov 2023', perihal: 'Pengumuman Jadwal UAS', tujuan: 'Seluruh Mahasiswa Aktif' },
  { id: 3, noSurat: 'M.008/9/KL.01.00/2026', tanggal: '15 Des 2023', perihal: 'Undangan Rapat Dosen', tujuan: 'Ketua Program Studi' },
]

const navMenu = [
  { group: 'MENU UTAMA', items: [
    { key: 'beranda',    label: 'Beranda',    Icon: IconHome },
    { key: 'terkirim',  label: 'Terkirim',   Icon: IconSend },
    { key: 'notifikasi',label: 'Notifikasi', Icon: IconBell },
  ]},
  { group: 'PENGATURAN', items: [
    { key: 'profil',    label: 'Profil',     Icon: IconUser },
    { key: 'panduan',   label: 'Panduan',    Icon: IconBook },
    { key: 'bantuan',   label: 'Bantuan',    Icon: IconHelp },
  ]},
]

/* ── Component ── */
export default function d_admin({ onLogout }) {
  const [activePage, setActivePage] = useState('terkirim')
  const [search, setSearch]         = useState('')
  const [data, setData]             = useState(initialData)

  const filtered = data.filter(d =>
    d.noSurat.toLowerCase().includes(search.toLowerCase()) ||
    d.perihal.toLowerCase().includes(search.toLowerCase())
  )

  const handleDelete = (id) => {
    if (window.confirm('Hapus surat ini?')) {
      setData(prev => prev.filter(d => d.id !== id))
    }
  }

  return (
    <div className="dash-layout">

      {/* ── SIDEBAR ── */}
      <aside className="sidebar">
        <div className="sb-brand">
          <div className="sb-brand-logo">
            <svg viewBox="0 0 24 24" fill="none" stroke="#e53e3e" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
          <div>
            <div className="sb-brand-name">SIPERSU TIK</div>
            <div className="sb-brand-sub">PNUP</div>
          </div>
        </div>

        <div className="sb-divider" />

        <div className="sb-user">
          <div className="sb-avatar">
            <IconUser />
          </div>
          <div>
            <div className="sb-uname">Admin</div>
            <div className="sb-urole">ASMIR</div>
          </div>
        </div>

        <nav className="sb-nav">
          {navMenu.map(({ group, items }) => (
            <div key={group} className="nav-group">
              <span className="nav-group-label">{group}</span>
              {items.map(({ key, label, Icon }) => (
                <button
                  key={key}
                  className={`nav-item ${activePage === key ? 'active' : ''}`}
                  onClick={() => setActivePage(key)}
                >
                  <span className="nav-icon"><Icon /></span>
                  {label}
                </button>
              ))}
            </div>
          ))}
        </nav>

        <button className="sb-logout" onClick={onLogout}>
          <span className="nav-icon"><IconLogout /></span>
          Keluar
        </button>
      </aside>

      {/* ── MAIN ── */}
      <div className="dash-main">

        {/* Topbar */}
        <header className="topbar">
          <h1 className="page-title">Daftar Surat</h1>
          <div className="topbar-info">
            <span className="topbar-name">Admin Jurusan</span>
            <span className="topbar-dept">Teknik Informatika &amp; Komputer</span>
          </div>
        </header>

        {/* Content */}
        <main className="dash-content">
          <div className="table-card">

            {/* Toolbar */}
            <div className="toolbar">
              <button className="filter-btn">
                Filter <IconFilter />
              </button>
              <div className="search-wrap">
                <IconSearch />
                <input
                  type="text"
                  placeholder="Cari nomor atau perihal..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
            </div>

            {/* Table */}
            <table className="surat-table">
              <thead>
                <tr>
                  <th>NO</th>
                  <th>NO. SURAT / TANGGAL</th>
                  <th>HAL / PERIHAL</th>
                  <th>AKSI</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length > 0 ? filtered.map((item, idx) => (
                  <tr key={item.id}>
                    <td className="td-no">{idx + 1}</td>
                    <td>
                      <span className="surat-no">{item.noSurat}</span>
                      <span className="surat-date">{item.tanggal}</span>
                    </td>
                    <td>
                      <span className="perihal-title">{item.perihal}</span>
                      <span className="perihal-sub">{item.tujuan}</span>
                    </td>
                    <td>
                      <div className="aksi-wrap">
                        <button className="btn-view" title="Lihat detail">
                          <IconEye />
                        </button>
                        <button className="btn-delete" title="Hapus" onClick={() => handleDelete(item.id)}>
                          <IconTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={4} className="td-empty">Tidak ada data ditemukan.</td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="pagination">
              <button className="pg-btn" disabled>&#8249;</button>
              <button className="pg-btn">&#8250;</button>
            </div>

          </div>
        </main>
      </div>
    </div>
  )
}