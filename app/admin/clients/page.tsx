"use client";

import ClientModal from "@/app/components/ClientModal";
import { Trash2, Plus, Pencil } from "lucide-react";
import { useEffect, useState } from "react";

interface Client {
  _id: string;
  name: string;
  image: string;
  active: boolean;
  createdAt: string;
}

const ITEMS_PER_PAGE = 20;

const AdminClient = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editClient, setEditClient] = useState<Client | null>(null);

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  /* ================= FETCH ================= */
  const fetchClients = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(`${API_BASE}/client`, {
        cache: "no-store",
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Fetch failed");

      setClients(
        data.sort(
          (a: Client, b: Client) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        ),
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  /* ================= CREATE / EDIT ================= */
  /* ================= CREATE ================= */
  const handleCreate = async (formData: FormData) => {
    try {
      const res = await fetch(`${API_BASE}/client`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to create client");
      }

      setIsModalOpen(false);
      setEditClient(null);
      await fetchClients();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Create failed");
    }
  };

  /* ================= EDIT ================= */
  const handleEdit = async (formData: FormData) => {
    if (!editClient) return;

    try {
      // ⚠️ IMPORTANT:
      // If image was not changed, ClientModal should NOT append "image"
      const res = await fetch(`${API_BASE}/client/${editClient._id}`, {
        method: "PUT",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to update client");
      }

      setIsModalOpen(false);
      setEditClient(null);
      await fetchClients();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Update failed");
    }
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id: string) => {
    if (!confirm("Delete this client?")) return;

    await fetch(`${API_BASE}/client/${id}`, { method: "DELETE" });
    setClients((prev) => prev.filter((c) => c._id !== id));
  };

  /* ================= PAGINATION ================= */
  const totalPages = Math.ceil(clients.length / ITEMS_PER_PAGE);
  const currentClients = clients.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  /* ================= RENDER ================= */
  return (
    <div className="h-screen bg-black text-white flex flex-col">
      {/* HEADER */}
      <div className="sticky top-0 z-20 bg-black border-b border-gray-700">
        <div className="p-4 sm:p-6 flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold">Clients</h1>

          <button
            onClick={() => {
              setEditClient(null);
              setIsModalOpen(true);
            }}
            className="border hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] text-white px-4 py-2 rounded-full flex items-center gap-2 font-semibold"
          >
            <Plus size={16} />
            Create Client
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        {loading ? (
          /* ================= LOADING STATE ================= */
          <div className="flex flex-col items-center justify-center h-[60vh] text-gray-400">
            <div className="w-10 h-10 border-4 border-gray-600 border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-sm tracking-wide">Loading clients…</p>
          </div>
        ) : error ? (
          /* ================= ERROR STATE ================= */
          <div className="flex flex-col items-center justify-center h-[60vh] text-center text-red-400">
            <h3 className="text-lg font-semibold mb-2">
              Failed to load clients
            </h3>
            <p className="text-sm max-w-sm">{error}</p>
          </div>
        ) : clients.length === 0 ? (
          /* ================= EMPTY STATE ================= */
          <div className="flex flex-col items-center justify-center h-[60vh] text-center text-gray-400">
            <div className="text-5xl mb-4">🧾</div>
            <h3 className="text-lg font-semibold text-gray-300">
              No Clients Found
            </h3>
            <p className="text-sm max-w-sm mt-2">
              You haven’t added any clients yet. Click{" "}
              <strong>Create Client</strong> to add your first one.
            </p>
          </div>
        ) : (
          <>
            {/* ================= MOBILE CARDS ================= */}
            <div className="md:hidden space-y-4">
              {currentClients.map((client) => (
                <div
                  key={client._id}
                  className="bg-[#111] border border-gray-700 rounded-xl p-4 space-y-3"
                >
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{client.name}</h3>
                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          setEditClient(client);
                          setIsModalOpen(true);
                        }}
                        className="text-blue-500 hover:text-blue-400"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(client._id)}
                        className="text-red-500 hover:text-red-400"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  <img
                    src={client.image}
                    className="h-16 object-contain bg-black rounded p-2"
                  />

                  <div className="flex justify-between text-xs text-gray-400">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        client.active
                          ? "bg-green-600/20 text-green-400"
                          : "bg-red-600/20 text-red-400"
                      }`}
                    >
                      {client.active ? "Active" : "Inactive"}
                    </span>

                    <span>
                      {new Date(client.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* ================= DESKTOP TABLE ================= */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border border-gray-700 text-sm">
                <thead className="bg-[#1e1e1e]">
                  <tr>
                    <th className="px-4 py-3 text-left">Logo</th>
                    <th className="px-4 py-3 text-left">Name</th>
                    <th className="px-4 py-3 text-left">Status</th>
                    <th className="px-4 py-3 text-left">Created</th>
                    <th className="px-4 py-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentClients.map((client) => (
                    <tr
                      key={client._id}
                      className="even:bg-[#111] hover:bg-[#222]"
                    >
                      <td className="px-4 py-3">
                        <img
                          src={client.image}
                          className="h-10 object-contain"
                        />
                      </td>

                      <td className="px-4 py-3">{client.name}</td>

                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                            client.active
                              ? "bg-green-600/20 text-green-400"
                              : "bg-red-600/20 text-red-400"
                          }`}
                        >
                          {client.active ? "Active" : "Inactive"}
                        </span>
                      </td>

                      <td className="px-4 py-3">
                        {new Date(client.createdAt).toLocaleDateString()}
                      </td>

                      <td className="px-4 py-3 flex gap-4">
                        <button
                          onClick={() => {
                            setEditClient(client);
                            setIsModalOpen(true);
                          }}
                          className="text-blue-500 hover:text-blue-400"
                        >
                          <Pencil size={18} />
                        </button>

                        <button
                          onClick={() => handleDelete(client._id)}
                          className="text-red-500 hover:text-red-400"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* ================= PAGINATION ================= */}
        {totalPages > 1 && (
          <div className="flex justify-end mt-6 gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-3 py-1 bg-gray-700 rounded disabled:opacity-50"
            >
              Prev
            </button>

            <span className="px-3 py-1 bg-gray-800 rounded">{currentPage}</span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-3 py-1 bg-gray-700 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* MODAL */}
      <ClientModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={editClient ? handleEdit : handleCreate}
        initialData={
          editClient
            ? {
                name: editClient.name,
                active: editClient.active,
                image: editClient.image,
              }
            : undefined
        }
      />
    </div>
  );
};

export default AdminClient;
