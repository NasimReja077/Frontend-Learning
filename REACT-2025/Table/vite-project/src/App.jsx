import React, { useState } from "react";

const App =()=> {
  const [visible, setVisible] = useState(false);
  const [rows, setRows] = useState([
    { id: 1, name: "Alice", age: 28, role: "Designer" },
    { id: 2, name: "Bob", age: 32, role: "Developer" },
  ]);

  // Basic headers — you can modify these or generate dynamically
  const headers = ["#", "Name", "Age", "Role", "Actions"];

  function toggleTable() {
    setVisible(v => !v);
  }

  function addRow() {
    const nextId = rows.length ? Math.max(...rows.map(r => r.id)) + 1 : 1;
    setRows(r => [...r, { id: nextId, name: "", age: "", role: "" }]);
  }

  function updateCell(id, key, value) {
    setRows(r => r.map(row => (row.id === id ? { ...row, [key]: value } : row)));
  }

  function removeRow(id) {
    setRows(r => r.filter(row => row.id !== id));
  }

  function exportCSV() {
    const cols = ["id", "name", "age", "role"];
    const csv = [cols.join(","), ...rows.map(row => cols.map(c => `"${row[c]}"`).join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "table-export.csv";
    a.click();
    URL.revokeObjectURL(url);
  }
 return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex gap-3 items-center mb-4">
        <button
          onClick={toggleTable}
          className="px-4 py-2 rounded-2xl shadow-md hover:scale-[1.02] transition-transform"
        >
          {visible ? "Hide Table" : "Create Table"}
        </button>

        {visible && (
          <>
            <button onClick={addRow} className="px-3 py-1 rounded-full border">
              + Add Row
            </button>
            <button onClick={exportCSV} className="px-3 py-1 rounded-full border">
              Export CSV
            </button>
          </>
        )}
      </div>

      {visible && (
        <div className="overflow-x-auto rounded-lg border">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                {headers.map(h => (
                  <th key={h} className="text-left px-4 py-2 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={row.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-2">{row.id}</td>
                  <td className="px-4 py-2">
                    <input
                      value={row.name}
                      onChange={e => updateCell(row.id, "name", e.target.value)}
                      placeholder="Name"
                      className="w-full bg-transparent outline-none"
                    />
                  </td>
                  <td className="px-4 py-2 w-28">
                    <input
                      value={row.age}
                      onChange={e => updateCell(row.id, "age", e.target.value)}
                      placeholder="Age"
                      className="w-full bg-transparent outline-none"
                      type="number"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      value={row.role}
                      onChange={e => updateCell(row.id, "role", e.target.value)}
                      placeholder="Role"
                      className="w-full bg-transparent outline-none"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex gap-2">
                      <button
                        onClick={() => removeRow(row.id)}
                        className="px-2 py-1 text-sm rounded border"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {rows.length === 0 && (
                <tr>
                  <td colSpan={headers.length} className="px-4 py-6 text-center text-gray-500">
                    No rows — click "Add Row" to create one.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App