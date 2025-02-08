// app/tickets/page.tsx
"use client";
export default function TicketsPage() {
  // Placeholder shows
  const shows = [
    {
      id: 1,
      artist: "John Doe",
      date: "March 15, 2025",
      venue: "Madison Square Garden",
    },
    {
      id: 2,
      artist: "Jane Smith",
      date: "April 2, 2025",
      venue: "Sydney Opera House",
    },
    {
      id: 3,
      artist: "The VR Band",
      date: "May 10, 2025",
      venue: "Royal Albert Hall",
    },
  ];

  const handleBuyTicket = (showId: number) => {
    alert(`Buying ticket for show with ID: ${showId}`);
    // Actual ticket purchasing logic goes here
  };

  return (
    <section className="bg-gray-800 rounded-lg p-8 shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Upcoming Shows</h1>

      <ul className="space-y-4">
        {shows.map((show) => (
          <li
            key={show.id}
            className="flex flex-col md:flex-row items-center justify-between p-4 border-b border-gray-700"
          >
            <div className="mb-2 md:mb-0">
              <h2 className="text-xl font-semibold text-gray-100">
                {show.artist}
              </h2>
              <p className="text-gray-400">
                {show.date} – {show.venue}
              </p>
            </div>
            <button
              onClick={() => handleBuyTicket(show.id)}
              className="mt-2 md:mt-0 py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Buy Ticket
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
