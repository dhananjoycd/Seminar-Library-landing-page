import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const Search = () => {
  const bookData = useLoaderData(); // Data from loader
  const [inputValue, setInputValue] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);

  const handleSearch = () => {
    if (bookData[inputValue]) {
      setSelectedIds(bookData[inputValue]);
    } else {
      setSelectedIds([]);
    }
  };
  const handleDownloadPDF = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    doc.setFontSize(18);
    doc.text(` Books list for ${inputValue}`, 105, 15, {
      align: "center",
    });

    const tableRows = [];
    for (let i = 0; i < selectedIds.length; i += 3) {
      const row = [
        selectedIds[i] || "",
        selectedIds[i + 1] || "",
        selectedIds[i + 2] || "",
      ];
      tableRows.push(row);
    }

    autoTable(doc, {
      startY: 25,

      body: tableRows,
      theme: "plain",
      styles: {
        fontSize: 16,
        cellPadding: 4,
        textColor: [40, 40, 40],
      },
      headStyles: {
        fontStyle: "bold",
        textColor: [0, 0, 0],
      },
      didDrawPage: function () {
        doc.setFontSize(10);
      },
    });

    doc.save(`Books list for ${inputValue}.pdf`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        🔍 Search by Category
      </h2>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter s1, s2, s3..."
          className="w-full sm:w-64 border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow transition-all"
        >
          Search
        </button>
      </div>

      <div>
        <h3 className="text-xl font-medium text-gray-700 mb-4">
          📚 Results: {` We have found ${selectedIds?.length} book IDs `}
        </h3>
        {selectedIds.length > 0 ? (
          <>
            <div className="grid grid-cols-3  gap-4">
              {selectedIds.map((id, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg shadow p-4 text-center text-gray-800"
                >
                  {id}
                </div>
              ))}
            </div>
            <div className="my-5 text-center">
              <button
                onClick={handleDownloadPDF}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded shadow"
              >
                Download PDF
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-500 italic">No data found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
