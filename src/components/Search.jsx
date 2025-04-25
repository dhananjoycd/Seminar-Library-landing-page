import { useEffect, useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { bookDataDemo } from "../rawData/dataCollection";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [loading, setLoading] = useState(false);

  const perColumn = Math.ceil(selectedIds.length / 3);

  const col1 = selectedIds.slice(0, perColumn);
  const col2 = selectedIds.slice(perColumn, perColumn * 2);
  const col3 = selectedIds.slice(perColumn * 2);

  useEffect(() => {
    const handleSearch = () => {
      setLoading(true);
      if (inputValue) {
        const filteredSelf = bookDataDemo.filter(
          (item) => item.self.toLowerCase() === inputValue.toLowerCase()
        );

        const bookIds = filteredSelf.flatMap((item) =>
          Array(item.quantity).fill(item.bookId)
        );

        setSelectedIds(bookIds);
      }
    };
    setTimeout(() => {
      setLoading(false);
    }, 1500);

    const debounce = setTimeout(() => {
      handleSearch();
      // setLoading(false);
    }, 500);

    return () => clearTimeout(debounce);
  }, [inputValue]);

  const handleDownloadPDF = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const itemsPerColumn = 20;
    const columnCount = 3;
    const itemsPerPage = itemsPerColumn * columnCount;

    const totalPages = Math.ceil(selectedIds.length / itemsPerPage);

    for (let page = 0; page < totalPages; page++) {
      const startIdx = page * itemsPerPage;
      const pageData = selectedIds.slice(startIdx, startIdx + itemsPerPage);

      // Split into 3 columns
      const columns = Array.from({ length: columnCount }, (_, i) =>
        pageData.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn)
      );

      // Convert columns into rows
      const tableRows = [];
      for (let row = 0; row < itemsPerColumn; row++) {
        const rowData = columns.map((col) => col[row] || "");
        tableRows.push(rowData);
      }

      if (page > 0) doc.addPage();

      doc.setFontSize(18);
      doc.text(`Books list for ${inputValue}`, 105, 15, {
        align: "center",
      });

      autoTable(doc, {
        startY: 25,
        body: tableRows,
        theme: "plain",
        styles: {
          fontSize: 12,
          halign: "left",
          cellPadding: 4,
          textColor: [40, 40, 40],
        },
        columnStyles: {
          0: { halign: "center" },
          1: { halign: "center" },
          2: { halign: "center" },
        },

        didDrawPage: () => {
          // Add page number at the bottom center
          doc.setFontSize(10);
          doc.text(
            `Page ${page + 1} of ${totalPages}`,
            105,
            doc.internal.pageSize.height - 5,
            {
              align: "center",
            }
          );
        },
      });
    }

    doc.save(`Books list for ${inputValue}.pdf`);
    alert("✅ PDF downloaded successfully!");
  };

  const showColumn = (items) => {
    return (
      <div className="space-y-4">
        {items.map((id, index) => (
          <div
            key={index}
            className="bg-white border my-2 border-gray-200 rounded-lg shadow p-4 text-center text-gray-800 hover:shadow-md transition"
          >
            {id}
          </div>
        ))}
      </div>
    );
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
          onClick={handleDownloadPDF}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded shadow"
        >
          Download PDF
        </button>
      </div>
      {loading && (
        <p className="text-center text-sm text-gray-600 my-6">Searching...</p>
      )}

      <div>
        <h3 className="text-xl font-medium text-gray-700 mb-4">
          📚 Results: {` We have found ${selectedIds?.length} book IDs `}
        </h3>
        {selectedIds.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {showColumn(col1)}
              {showColumn(col2)}
              {showColumn(col3)}
            </div>
            <div className="my-5 text-center">
              <button
                onClick={handleDownloadPDF}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded shadow"
              >
                Download Now
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
