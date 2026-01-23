import { useRef, useState } from "react";
import html2pdf from "html2pdf.js";

const initialData = {
  name: "",
  relationType: "S/O",
  relationName: "",
  residentOf: "",
  oldAddress: "",
  newAddress: "",
  verificationPlace: "",
  verificationDay: "",
  verificationMonth: "",
};

export default function AddressProof() {
  const [data, setData] = useState(initialData);
  const pdfRef = useRef(null);

  const update = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const downloadPDF = () => {
    html2pdf()
      .from(pdfRef.current)
      .set({
        filename: "Affidavit.pdf",
        margin: 0,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,                // ✅ reduced to avoid rounding overflow
          useCORS: true,
          backgroundColor: "#ffffff",
          logging: false,
          dpi: 300,
          letterRendering: true,
          scrollY: 0,
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
        },
        pagebreak: { mode: [] },   // ✅ no auto page breaks
      })
      .save();
  };

  return (
    <div className="min-h-screen bg-[#f3f1fa] p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* ================= FORM ================= */}
        <div className="bg-white p-6 rounded-xl shadow border border-purple-200">
          <h2 className="text-xl font-semibold text-purple-700 mb-4">
            Affidavit Details
          </h2>

          <Input label="Name" name="name" value={data.name} onChange={update} />

          <div className="grid grid-cols-2 gap-3">
            <Input label="Relation Type (S/D/W/O)" name="relationType" value={data.relationType} onChange={update} />
            <Input label="Relation Name" name="relationName" value={data.relationName} onChange={update} />
          </div>

          <Input label="Resident Of (R/O)" name="residentOf" value={data.residentOf} onChange={update} />
          <Input label="Previous Address" name="oldAddress" value={data.oldAddress} onChange={update} />
          <Input label="New Address" name="newAddress" value={data.newAddress} onChange={update} />

          <div className="grid grid-cols-3 gap-3">
            <Input label="Verification Place" name="verificationPlace" value={data.verificationPlace} onChange={update} />
            <Input label="Day" name="verificationDay" value={data.verificationDay} onChange={update} />
            <Input label="Month" name="verificationMonth" value={data.verificationMonth} onChange={update} />
          </div>

          <button
            onClick={downloadPDF}
            className="mt-6 w-full bg-purple-700 hover:bg-purple-800 text-white py-2.5 rounded-lg font-medium"
          >
            Download PDF
          </button>
        </div>

        {/* ================= PDF PREVIEW ================= */}
        <div className="bg-gray-100 p-4 rounded shadow overflow-auto max-h-[90vh]">
          <div
            ref={pdfRef}
            style={{
              width: "210mm",
              height: "296mm",              // ✅ FIX: exact single page
              backgroundColor: "#ffffff",
              color: "#000000",
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: "12pt",
              lineHeight: "1.55",
              padding: "20mm 22mm",
              boxSizing: "border-box",
              margin: 0,
              overflow: "hidden",           // ✅ CRITICAL
              transform: "scale(0.985)",    // ✅ rounding fix
              transformOrigin: "top left",
            }}
          >
            {/* TITLE */}
            <div style={{ 
              textAlign: "center", 
              marginBottom: "24px",
              fontSize: "14pt",
              fontWeight: "bold",
              textDecoration: "underline",
              letterSpacing: "0.4px",
            }}>
              AFFIDAVIT
            </div>

            {/* INTRO */}
            <p style={{ margin: "0 0 16px 0", textAlign: "justify" }}>
              I,{" "}
              <b>{data.name || "________________________"}</b>{" "}
              <b>{data.relationType || "S/D/W/O"}</b>{" "}
              <b>{data.relationName || "________________________"}</b>{" "}
              R/O{" "}
              <b>{data.residentOf || "________________________"}</b>{" "}
              do hereby solemnly affirm and declare as under:
            </p>

            {/* POINTS */}
            <div style={{ marginLeft: "12px" }}>
              <p style={{ margin: "12px 0", textIndent: "-12px" }}>
                1. That I was previously residing at{" "}
                <b>{data.oldAddress || "__________________________________________________"}</b>.
              </p>
              <p style={{ margin: "12px 0", textIndent: "-12px" }}>
                2. That now I have shifted my new address i.e.{" "}
                <b>{data.newAddress || "__________________________________________________"}</b>.
              </p>
              <p style={{ margin: "12px 0", textIndent: "-12px" }}>
                3. That I have no any documentary proof so I am swearing this affidavit to proof my present residential address.
              </p>
              <p style={{ margin: "12px 0", textIndent: "-12px" }}>
                4. That it is my true and correct statement.
              </p>
            </div>

            {/* DEPONENT */}
            <div style={{ marginTop: "50px", textAlign: "right", fontWeight: "bold" }}>
              DEPONENT
            </div>

            {/* VERIFICATION */}
            <div style={{ marginTop: "45px" }}>
              <div style={{ fontWeight: "bold", marginBottom: "12px" }}>
                VERIFICATION
              </div>
              <p style={{ margin: "0 0 16px 0", textAlign: "justify" }}>
                Verified at{" "}
                <b>{data.verificationPlace || "________"}</b>{" "}
                on this{" "}
                <b>{data.verificationDay || "__"}</b>{" "}
                day of{" "}
                <b>{data.verificationMonth || "________"}</b>, 2025 that the contents of the 
                above affidavit are true and correct to the best of my knowledge and belief 
                and nothing material has been concealed therefrom.
              </p>
              <div style={{ marginTop: "50px", textAlign: "right", fontWeight: "bold" }}>
                DEPONENT
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

/* INPUT */
function Input({ label, ...props }) {
  return (
    <div className="mb-3">
      <label className="block text-sm font-medium text-purple-700 mb-1">
        {label}
      </label>
      <input
        {...props}
        className="w-full border border-purple-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  );
}
