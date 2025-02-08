"use client"; // <-- Important for client-side interactivity

export default function HomePage() {
  const handleWatchNow = () => {
    alert("Connecting VR headset to AWS stream...");
  };

  return (
    <section className="space-y-12">
      {/* Hero Section */}
      <div className="bg-gray-800 rounded-lg p-8 shadow-md">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold mb-2">Pana: VR Concerts</h1>
          <p className="text-xl text-gray-300 italic">
            Experience live concerts in immersive VR
          </p>
        </div>

        <div className="bg-gray-700 rounded-lg p-6 text-center">
          <h2 className="text-3xl font-semibold mb-2">
            Featured Artist: John Doe
          </h2>
          <p className="text-gray-400 mb-4">Live from Madison Square Garden</p>

          {/* Thumbnail with Overlay */}
          <div className="relative group w-fit mx-auto">
            <img
              src="/thumbnail.jpg"
              alt="Concert Thumbnail"
              className="rounded-lg transition-opacity duration-300 group-hover:opacity-60"
            />
            {/* Overlay: hidden by default, appears on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={handleWatchNow}
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
              >
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Three-Section Placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold mb-2">Immersive Audio</h3>
          <p className="text-gray-400">
            Feel the music all around you with 360° spatial audio, delivering an
            immersive concert experience like never before.
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold mb-2">Worldwide Venues</h3>
          <p className="text-gray-400">
            Enjoy live performances from iconic venues across the globe, without
            ever leaving your home.
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold mb-2">Exclusive Access</h3>
          <p className="text-gray-400">
            Interact with artists in virtual meet-and-greets, unlock backstage
            passes, and enjoy bonus content in VR.
          </p>
        </div>
      </div>
    </section>
  );
}
