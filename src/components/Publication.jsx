// function Publication() {
//   return (
//     <section id="publication" className="section publication-section">

//       <div className="section-title">
//         <span>Research & Publication</span>
//         <h2>Featured Publication</h2>
//       </div>

//       <div className="publication-container">

//         {/* Publication Badge */}
//         <div className="publication-badge">
//           FEATURED RESEARCH
//         </div>

//         {/* Main Content */}
//         <div className="publication-content">

//           <div className="publication-header">

//             <div>
//               <p className="publication-label">
//                 International Journal of Computer Techniques
//               </p>

//               <h3>
//                 Cow Health Monitoring System using IoT
//               </h3>
//             </div>

//             <div className="publication-year">
//               2026
//             </div>

//           </div>


//           <p className="publication-description">
//             A research-based IoT solution designed to monitor
//             the health of cows in real time by tracking important
//             parameters such as heart rate and body temperature.
//             The system aims to support early detection of abnormal
//             health conditions through continuous monitoring.
//           </p>


//           {/* Technologies */}
//           <div className="publication-technologies">

//             <span>Arduino Nano</span>

//             <span>ESP8266</span>

//             <span>Heart Pulse Sensor</span>

//             <span>Temperature Sensor</span>

//             <span>IoT</span>

//             <span>React</span>

//             <span>Python</span>

//           </div>


//           {/* Research Highlights */}
//           <div className="publication-highlights">

//             <div className="publication-highlight">

//               <div className="highlight-number">
//                 01
//               </div>

//               <div>
//                 <h4>Real-Time Monitoring</h4>

//                 <p>
//                   Monitors heart rate and temperature
//                   continuously.
//                 </p>
//               </div>

//             </div>


//             <div className="publication-highlight">

//               <div className="highlight-number">
//                 02
//               </div>

//               <div>
//                 <h4>IoT-Based System</h4>

//                 <p>
//                   Uses connected hardware to collect
//                   and transmit health data.
//                 </p>
//               </div>

//             </div>


//             <div className="publication-highlight">

//               <div className="highlight-number">
//                 03
//               </div>

//               <div>
//                 <h4>Early Detection</h4>

//                 <p>
//                   Helps identify unusual health
//                   conditions through monitoring.
//                 </p>
//               </div>

//             </div>

//           </div>


//           {/* Publication Footer */}
//           <div className="publication-footer">

//             <div className="publication-info">

//               <span>
//                 Published in
//               </span>

//               <strong>
//                 IJCT · 2026
//               </strong>

//             </div>

//             {/* Add your paper link here later */}
//             <a
//               href="/certificate.pdf"
//               className="publication-button"
//               onClick={(e) => e.preventDefault()}
//             >
//               View Publication
//               <span>↗</span>
//             </a>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Publication;




import { useState } from "react";

function Publication() {
  const [showPublication, setShowPublication] = useState(false);

  return (
    <section id="publication" className="section publication-section">

      <div className="section-title">
        <span>Research & Publication</span>
        <h2>Featured Publication</h2>
      </div>

      <div className="publication-container">

        {/* Publication Badge */}
        <div className="publication-badge">
          FEATURED RESEARCH
        </div>

        {/* Main Content */}
        <div className="publication-content">

          <div className="publication-header">

            <div>
              <p className="publication-label">
                International Journal of Computer Techniques
              </p>

              <h3>
                Cow Health Monitoring System using IoT
              </h3>
            </div>

            <div className="publication-year">
              2026
            </div>

          </div>

          <p className="publication-description">
            A research-based IoT solution designed to monitor
            the health of cows in real time by tracking important
            parameters such as heart rate and body temperature.
            The system aims to support early detection of abnormal
            health conditions through continuous monitoring.
          </p>

          {/* Technologies */}
          <div className="publication-technologies">

            <span>Arduino Nano</span>
            <span>ESP8266</span>
            <span>Heart Pulse Sensor</span>
            <span>Temperature Sensor</span>
            <span>IoT</span>
            <span>React</span>
            <span>Python</span>

          </div>

          {/* Research Highlights */}
          <div className="publication-highlights">

            <div className="publication-highlight">

              <div className="highlight-number">
                01
              </div>

              <div>
                <h4>Real-Time Monitoring</h4>

                <p>
                  Monitors heart rate and temperature
                  continuously.
                </p>
              </div>

            </div>

            <div className="publication-highlight">

              <div className="highlight-number">
                02
              </div>

              <div>
                <h4>IoT-Based System</h4>

                <p>
                  Uses connected hardware to collect
                  and transmit health data.
                </p>
              </div>

            </div>

            <div className="publication-highlight">

              <div className="highlight-number">
                03
              </div>

              <div>
                <h4>Early Detection</h4>

                <p>
                  Helps identify unusual health
                  conditions through monitoring.
                </p>
              </div>

            </div>

          </div>

          {/* Publication Footer */}
          <div className="publication-footer">

            <div className="publication-info">

              <span>
                Published in
              </span>

              <strong>
                IJCT · 2026
              </strong>

            </div>

            {/* View Publication */}
            <button
              type="button"
              className="publication-button"
              onClick={() => setShowPublication(true)}
            >
              View Publication
              <span>↗</span>
            </button>

          </div>

        </div>

      </div>


      {/* ============================= */}
      {/* Publication Modal */}
      {/* ============================= */}

      {showPublication && (
        <div
          className="publication-modal-overlay"
          onClick={() => setShowPublication(false)}
        >

          <div
            className="publication-modal"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Modal Header */}
            <div className="publication-modal-header">

              <div>
                <span>RESEARCH PUBLICATION</span>

                <h3>
                  Cow Health Monitoring System using IoT
                </h3>
              </div>

              <button
                type="button"
                className="publication-close"
                onClick={() => setShowPublication(false)}
                aria-label="Close publication"
              >
                ×
              </button>

            </div>


            {/* PDF Preview */}
            <div className="publication-preview">

              <iframe
                src="/certificate.pdf"
                title="Cow Health Monitoring System using IoT"
              />

            </div>


            {/* Modal Footer */}
            <div className="publication-modal-footer">

              <a
                href="/certificate.pdf"
                download="Cow-Health-Monitoring-System-IJCT-2026.pdf"
                className="publication-download"
              >
                Download PDF
              </a>

              <button
                type="button"
                className="publication-close-button"
                onClick={() => setShowPublication(false)}
              >
                Close
              </button>

            </div>

          </div>

        </div>
      )}

    </section>
  );
}

export default Publication;