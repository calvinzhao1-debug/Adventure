export default function SubscribePage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8 rounded-xl border border-gray-800 bg-gray-900/50 p-8 shadow-2xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Stay Updated</h2>
          <p className="mt-2 text-sm text-gray-400">
            Subscribe to our newsletter to get the latest updates on events and opportunities.
          </p>
        </div>

        <form className="space-y-4" action="#">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full rounded-md border border-gray-700 bg-black px-3 py-2 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="zID@student.unsw.edu.au"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-white py-2 text-sm font-bold text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            Subscribe
          </button>
        </form>
        
        <p className="text-xs text-center text-gray-500">
          By subscribing, you agree to receive emails from UNSW ADSOC.
        </p>
      </div>
    </div>
  );
}