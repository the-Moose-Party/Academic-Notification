import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import '../css/ScrollableBox.css'; // Ensure this CSS file exists

export default function ScrollableBox() {
    const navigate = useNavigate();
    
  return (
    <div className="scrollable-container">
      {/* Header */}
      <div className="header">
        <FiArrowLeft className="back-button" onClick={() => window.history.back()} />
        <h2 className="header-title">Scrollable Box</h2>
        <div className="spacer" /> {/* Placeholder for spacing */}
      </div>

      {/* Scrollable Content */}
      <div className="scrollable-box">
        <div className="box-grid">
        {[...Array(12)].map((_, index) => (
            <button
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-300 text-center"
              onClick={() => navigate('/course-selection')}
            >
              Box {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}