// Shared storage and utility helpers
const Storage = {
  load(key, defaultVal) {
    try { const s = localStorage.getItem(key); return s ? JSON.parse(s) : defaultVal; } catch (e) { return defaultVal; }
  },
  save(key, val) { localStorage.setItem(key, JSON.stringify(val)); },
  downloadCSV(filename, rows) {
    if (!rows || !rows.length) return;
    const keys = Object.keys(rows[0]);
    const header = keys.join(',') + '\n';
    const csv = rows.map(r => keys.map(k => '"' + (String(r[k] ?? '')).replace(/"/g,'""') + '"').join(',')).join('\n');
    const blob = new Blob([header + csv], {type: 'text/csv;charset=utf-8;'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
  }
};

// small helper to ensure arrays exist
function ensureDefaults() {
  if (!Storage.load('products', null)) {
    Storage.save('products', []);
  }
  if (!Storage.load('cart', null)) Storage.save('cart', []);
  if (!Storage.load('orders', null)) Storage.save('orders', []);
}

// Initialize defaults on script load
ensureDefaults();
