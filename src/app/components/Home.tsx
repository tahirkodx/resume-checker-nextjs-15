import Image from "next/image";
// import Link from 'next/link';

const Home = () => {
  return (
    <>
      <>
        <header className="bg-white shadow">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <div className="flex items-center">
              <Image
                alt="Kibbi logo"
                className="h-10 w-10"
                width="40"
                height="40"
                src="https://storage.googleapis.com/a1aa/image/kX4mHKSouaoyFBIUZeOl4AegYrWjeYXoHx85k9ZrcfA1Wp0PB.jpg"
              />
              <span className="ml-2 text-xl font-bold">kibbi</span>
            </div>
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded">
              Sign Up/Log In
            </button>
          </div>
        </header>
        <main>
          <div className="relative">
            <Image
              alt="Red's Diner banner"
              className="w-full h-72 object-cover"
              width="100"
              height="288"
              src="https://storage.googleapis.com/a1aa/image/jDWSNLe3wBX0byNe8SLNVe1cSfMR9wfO2Ek8qBMGo6QksSpfE.jpg"
            />
            <div className="absolute bottom-0 left-0 p-4 flex items-center">
              <Image
                alt="Red's Diner logo"
                className="h-20 w-20 rounded-full border-4 border-white"
                width="80"
                height="80"
                src="https://storage.googleapis.com/a1aa/image/NKFkCCdSgewTP6P6e4MFfoITH41hFt10UEz6f4B2RMGvWp0PB.jpg"
              />
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-white">
                  Red&apos;s Diner{" "}
                  <span className="text-green-500">
                    <i className="fas fa-check-circle" />
                  </span>
                </h1>
                <p className="text-white">13,445 Followers</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-sm">
            <div className="container mx-auto flex justify-start items-center py-4 px-6">
              <button className="text-red-500 font-semibold border-b-2 border-red-500 px-4 py-2">
                About
              </button>
              <button className="text-gray-500 font-semibold px-4 py-2">
                Jobs
              </button>
            </div>
          </div>
          <div className="container mx-auto py-8 px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-red-500 text-xl font-bold mb-4 font-caveat">
                    About Business
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Enjoy breakfast all day Red&apos;s Diner! Farm-fresh ingredients
                    and made-in-house. We believe in creating hearty meals that
                    anyone can enjoy and feel like part of the family.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>
                      <i className="fas fa-utensils mr-2" /> Industry: Breakfast
                      &amp; Brunch Restaurant
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt mr-2" /> Main Address:
                      910 7 Ave SW #1200, Calgary, AB T2P 3N8
                    </li>
                    <li>
                      <i className="fas fa-globe mr-2" /> Website:{" "}
                      <a
                        className="text-blue-500"
                        href="https://www.Redsdiner.com"
                      >
                        https://www.Redsdiner.com
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-phone mr-2" /> Business Phone:
                      0123456789
                    </li>
                    <li>
                      <i className="fas fa-users mr-2" /> Business Size: 100
                    </li>
                    <li>
                      <i className="fas fa-building mr-2" /> Organization Type:
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow mb-8">
                  <button className="bg-white border border-red-500 text-red-500 px-4 py-2 rounded w-full mb-4 flex items-center justify-center">
                    <i className="fas fa-file-upload mr-2" /> Drop Resume
                  </button>
                  <button className="bg-white border border-red-500 text-red-500 px-4 py-2 rounded w-full flex items-center justify-center">
                    <i className="fas fa-heart mr-2" /> Follow Business
                  </button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-red-500 text-xl font-bold mb-4">
                    We Are Proudly
                  </h2>
                  <div className="flex items-center mb-4">
                    <Image
                      alt="Father-Owned"
                      className="h-12 w-12 mr-4"
                      width="48"
                      height="48"
                      src="https://storage.googleapis.com/a1aa/image/jRa1UAE1jN6uKxR8q0AXWWFmUfdo2vXjW7CCWciWqgPzKleTA.jpg"
                    />
                    <span>Father-Owned</span>
                  </div>
                  <div className="flex items-center">
                    <Image
                      alt="Pet-Lover Owned"
                      className="h-12 w-12 mr-4"
                      width="48"
                      height="48"
                      src="https://storage.googleapis.com/a1aa/image/X525sMNvL6J7FBC14knvbfYnixDwHlMXRZPj98iGBGswKleTA.jpg"
                    />
                    <span>Pet-Lover Owned</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow mt-8">
              <h2 className="text-red-500 text-xl font-bold mb-4">
                Our Core Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start">
                  <Image
                    alt="Fun icon"
                    className="h-12 w-12 mr-4"
                    width="48"
                    height="48"
                    src="https://storage.googleapis.com/a1aa/image/5WJIxmlf4v22aSJ1ELG8BJL43P2kuiephfRtfqCB9IxOWp0PB.jpg"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Fun</h3>
                    <p className="text-gray-700">
                      If we&apos;re not having fun, we&apos;re doing it wrong
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Image
                    alt="Teamwork icon"
                    className="h-12 w-12 mr-4"
                    width="48"
                    height="48"
                    src="https://storage.googleapis.com/a1aa/image/2JstCXziDZ5WP96NteLQJNagww0tfYoR5nxerYF0nzwirU6nA.jpg"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Teamwork</h3>
                    <p className="text-gray-700">
                      Together we can move mountains, or at least rearrange some
                      furniture.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Image
                    alt="Customer Obsession icon"
                    className="h-12 w-12 mr-4"
                    width="48"
                    height="48"
                    src="https://storage.googleapis.com/a1aa/image/xlX8sc2tvdYsCZpuBAoPJUwUQlqqAyedlHU9UEcjoZF0KleTA.jpg"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      Customer Obsession
                    </h3>
                    <p className="text-gray-700">
                      Because without you, we&apos;re just standing around talking to
                      ourselves.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Image
                    alt="Quality icon"
                    className="h-12 w-12 mr-4"
                    width="48"
                    height="48"
                    src="https://storage.googleapis.com/a1aa/image/9NpqpeRUOJU3HyjlGqTcTlmEeGm4bzEzOAnjOr8VvwlvVK9TA.jpg"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Quality</h3>
                    <p className="text-gray-700">
                      If it&apos;s not good enough for Grandma, it&apos;s not good enough.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Image
                    alt="Teamwork icon"
                    className="h-12 w-12 mr-4"
                    width="48"
                    height="48"
                    src="https://storage.googleapis.com/a1aa/image/2JstCXziDZ5WP96NteLQJNagww0tfYoR5nxerYF0nzwirU6nA.jpg"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Teamwork</h3>
                    <p className="text-gray-700">
                      Together we can move mountains, or at least rearrange some
                      furniture.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Image
                    alt="Loyalty icon"
                    className="h-12 w-12 mr-4"
                    width="48"
                    height="48"
                    src="https://storage.googleapis.com/a1aa/image/PNEfN6c1iQ0MX64VIePUCylMLBXvJe50e0CHpn33LOZrWp0PB.jpg"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Loyalty</h3>
                    <p className="text-gray-700">
                      Like a golden retriever, but with business acumen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    </>
  );
};

export default Home;
