// ProgramDropdown.jsx
export default function ProgramDropdown({
  title,
  overview,
  learnList,
  eligibility,
  careers,
  isOpen,
  onToggle,
}) {
  return (
    <div className="border rounded-lg shadow-sm bg-gray-50">
      
      {/* HEADER */}
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800"
      >
        <span className="text-[#000000] text-lg">
          {title}
        </span>
        <span className="ml-2 text-sm">
          {isOpen ? "▲" : "▼"}
        </span>
      </button>

      {/* CONTENT */}
      {isOpen && (
        <div className="px-4 pb-4 space-y-4 text-gray-600">
          
          <div>
            <h4 className="font-semibold text-gray-800">Overview</h4>
            <p className="text-justify">{overview}</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800">
              What You Will Learn
            </h4>
            <ul className="list-disc list-inside space-y-1">
              {learnList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800">Who Can Apply</h4>
            <p>{eligibility}</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800">
              Career Opportunities
            </h4>
            <p>{careers}</p>
          </div>

        </div>
      )}
    </div>
  );
}
