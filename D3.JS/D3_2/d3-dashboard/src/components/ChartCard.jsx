const ChartCard = ({ title, children }) => {
  return (
    <div className="bg-gray-900 text-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-800">
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold tracking-wide">
          {title}
        </h2>

        <span className="text-xs bg-gray-800 px-2 py-1 rounded-md text-gray-400">
          Live
        </span>
      </div>

      <div className="flex justify-center items-center">
        {children}
      </div>

    </div>
  );
};

export default ChartCard;