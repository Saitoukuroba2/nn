function MainArticle() {
  return (
    <article className="space-y-4">
      <div className="flex items-center space-x-3">
        <img src="https://placekitten.com/32/32" alt="Author" className="w-8 h-8 rounded-full" />
        <span className="font-medium">Silma Bomiko</span>
      </div>
      <h1 className="text-2xl font-bold">Women's Basketball Semifinals Preview And Schedule</h1>
      <div className="flex items-center space-x-3 text-sm text-gray-500">
        <span className="bg-red-100 text-red-600 px-2 py-1 rounded">Olympics</span>
        <span>6 minute read</span>
      </div>
      <img
        src="/basketball.jpg"
        alt="Women's Basketball"
        className="w-full h-64 object-cover rounded-lg"
      />
    </article>
  );
}