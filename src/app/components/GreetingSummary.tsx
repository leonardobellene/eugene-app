interface GreetingSummaryProps {
  name: string;
  gender: string;
  language: string;
  onStartChatting: () => void;
  onChangeName: () => void;
}

export default function GreetingSummary({
  name,
  gender,
  language,
  onStartChatting,
  onChangeName,
}: GreetingSummaryProps) {
  return (
    <div className="text-center space-y-6">
      <p className="text-xl text-[#003366] text-shadow-beige">
        Hi <span className="font-semibold">{name}</span>! Ready to chat?
      </p>
      <div className="text-sm space-y-1 text-[#003366] text-shadow-beige font-semibold">
        <p>
          🧍 Gender: <span className="font-bold">{gender}</span>
        </p>
        <p>
          🌐 Language: <span className="font-bold">{language}</span>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onStartChatting}
          className="bg-blue-600 hover:bg-blue-500 transition-colors px-6 py-3 rounded-2xl font-semibold cursor-pointer"
        >
          Start Chatting
        </button>
        <button
          onClick={onChangeName}
          className="bg-gray-700 hover:bg-gray-600 transition-colors px-6 py-3 rounded-2xl font-semibold border border-gray-500 cursor-pointer"
        >
          Edit Details
        </button>
      </div>
    </div>
  );
}
