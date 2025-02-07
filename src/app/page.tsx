'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const weekdays = {
    Monday: "Start your week strong! Time for new beginnings.",
    Tuesday: "Keep the momentum going! You're making progress.",
    Wednesday: "Halfway there! You're doing great.",
    Thursday: "The weekend is almost in sight! Stay focused.",
    Friday: "TGIF! Time to wrap up the week's tasks.",
    Saturday: "Relax and enjoy your weekend!",
    Sunday: "Time to recharge and prepare for the week ahead."
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Daily Messages</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {Object.keys(weekdays).map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedDay === day
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-100 hover:bg-blue-200 text-blue-800'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {selectedDay && (
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{selectedDay}</h2>
            <p className="text-gray-700">{weekdays[selectedDay]}</p>
          </div>
        )}
      </div>
    </main>
  );
}
