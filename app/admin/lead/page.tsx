"use client";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

interface LeadRequest {
  _id: string;
  name: string;
  phone: string;
  email: string;
  services: string[];
  message: string;
  marked?: boolean;
  createdAt: string;
}

const ITEMS_PER_PAGE = 20;

const AdminLead = () => {
  const [contacts, setContacts] = useState<LeadRequest[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<LeadRequest[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  /* ================= FETCH LEADS ================= */
  useEffect(() => {
    setLoading(true);

    fetch(`${API_BASE}/lead`)
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a: LeadRequest, b: LeadRequest) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );

        setContacts(sorted);
        setFilteredContacts(sorted);
      })
      .catch((err) => {
        console.error("Error fetching leads:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  /* ================= FILTER BY DATE ================= */
  useEffect(() => {
    if (!selectedDate) {
      setFilteredContacts(contacts);
      setCurrentPage(1);
      return;
    }

    const filtered = contacts.filter((c) =>
      new Date(c.createdAt).toISOString().startsWith(selectedDate),
    );

    setFilteredContacts(filtered);
    setCurrentPage(1);
  }, [selectedDate, contacts]);

  const totalPages = Math.ceil(filteredContacts.length / ITEMS_PER_PAGE);
  const currentContacts = filteredContacts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  /* ================= MARK / UNMARK LEAD ================= */
  const handleMark = async (id: string, marked: boolean) => {
    try {
      const res = await fetch(`${API_BASE}/lead/${id}/mark`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ marked }),
      });

      if (!res.ok) throw new Error("Failed to update lead");

      setContacts((prev) =>
        prev.map((lead) => (lead._id === id ? { ...lead, marked } : lead)),
      );
    } catch (err) {
      console.error("Error updating lead:", err);
    }
  };

  /* ================= DELETE LEAD ================= */
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this lead?")) return;

    try {
      const res = await fetch(`${API_BASE}/lead/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete lead");

      setContacts((prev) => prev.filter((lead) => lead._id !== id));
    } catch (err) {
      console.error("Error deleting lead:", err);
    }
  };

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      {/* HEADER */}
      <div className="sticky top-0 z-20 bg-black p-4 md:py-6 border-b border-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Leads</h1>

        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-400">Filter by Date:</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="bg-gray-800 text-white border border-gray-600 rounded px-2 py-1 text-sm"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:py-6">
        {loading ? (
          /* ================= LOADING STATE ================= */
          <div className="flex flex-col items-center justify-center h-[60vh] text-gray-400">
            <div className="w-10 h-10 border-4 border-gray-600 border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-sm tracking-wide">Loading leads…</p>
          </div>
        ) : filteredContacts.length === 0 ? (
          /* ================= EMPTY STATE ================= */
          <div className="flex flex-col items-center justify-center h-[60vh] text-center text-gray-400">
            <div className="text-5xl mb-4">📭</div>
            <h3 className="text-lg font-semibold text-gray-300">
              No Leads Found
            </h3>
            <p className="text-sm max-w-sm mt-2">
              There are no lead requests available yet. New inquiries will
              appear here automatically.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 space-y-4">
              {currentContacts.map((contact) => (
                <div
                  key={contact._id}
                  className="bg-[#111] border border-gray-700 rounded-xl p-4 space-y-2 "
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{contact.name}</h3>
                      <p className="text-sm text-gray-400">
                        {new Date(contact.createdAt).toLocaleString()}
                      </p>
                    </div>

                    <button
                      onClick={() => handleDelete(contact._id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <div className="text-sm space-y-1">
                    <p>
                      <span className="text-gray-400">Email:</span>{" "}
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-cyan-400"
                      >
                        {contact.email}
                      </a>
                    </p>
                    <p>
                      <span className="text-gray-400">Phone:</span>{" "}
                      {contact.phone}
                    </p>
                    <p>
                      <span className="text-gray-400">Services:</span>{" "}
                      {contact.services.join(", ")}
                    </p>
                    <p>
                      <span className="text-gray-400">Message:</span>{" "}
                      {contact.message || "—"}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <input
                      type="checkbox"
                      checked={contact.marked || false}
                      onChange={(e) =>
                        handleMark(contact._id, e.target.checked)
                      }
                    />

                    <span className="text-sm text-gray-400">Mark as done</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* PAGINATION */}
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
    </div>
  );
};

export default AdminLead;
