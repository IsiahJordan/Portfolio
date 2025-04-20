import React from "react";
import Cert_1 from "../assets/cert-1.png";
import Cert_2 from "../assets/cert-2.png";
import Cert_3 from "../assets/cert-3.png";
import Cert_4 from "../assets/cert-4.png";
import Cert_5 from "../assets/cert-5.png";

const Certificates: React.FC = () => {
  const certificates = [Cert_1, Cert_2, Cert_3, Cert_4, Cert_5];

  // Break into rows of 3
  const rows = [];
  for (let i = 0; i < certificates.length; i += 3) {
    rows.push(certificates.slice(i, i + 3));
  }

  return (
    <div className="py-25 flex flex-col items-center text-center">
      <h2 className="text-[32px] font-semibold mb-10 text-white">
        Finally, here are my <span className="inline purple-text">Certificates...</span>
      </h2>

      <div className="flex flex-col gap-8">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex justify-center gap-8 flex-wrap"
          >
            {row.map((cert, certIndex) => (
              <div
                key={certIndex}
                className="bg-white p-4 rounded-lg shadow-md w-[380px] h-[300px] flex items-center justify-center"
              >
                <img
                  src={cert}
                  alt={`Certificate ${certIndex + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;

