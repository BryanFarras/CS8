export default function Iklan() {
    return (
      <aside className="w-72 bg-white rounded-2xl shadow-md p-4 sticky top-20 h-fit">
        <h3 className="text-xl font-semibold mb-4">Iklan</h3>
        <div className="space-y-4">
          <div className="bg-gray-200 rounded p-4 text-center">
            <p>Pasang Iklan Anda di sini</p>
            <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
              Hubungi Kami
            </button>
          </div>
          <div className="bg-gray-200 rounded p-4 text-center">
            <p>Promo Spesial April 2025</p>
            <button className="mt-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition">
              Lihat Detail
            </button>
          </div>
        </div>
      </aside>
    );
  }
  
