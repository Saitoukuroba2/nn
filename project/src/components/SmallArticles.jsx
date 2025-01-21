function SmallArticles() {
  const articles = [
    {
      title: "Refugee athlete Farzad Mansouri falls just short of quarter...",
      category: "Olympics",
      time: "24 hours ago",
      image: "/refugee.jpg"
    },
    {
      title: "Uzbekistan's Rashitov defends Olympic men's -68kg taekwondo title",
      category: "Olympics",
      time: "24 hours ago",
      image: "/taekwondo.jpg"
    }
  ];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Lastest Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <article key={index} className="relative h-64 rounded-lg overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <div className="flex items-center space-x-3 text-white text-sm mb-2">
                <span className="bg-red-600 px-2 py-1 rounded">{article.category}</span>
                <span>{article.time}</span>
              </div>
              <h3 className="text-white font-bold">{article.title}</h3>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-6 text-right">
        <a href="#" className="text-orange-500 hover:text-orange-600">Show More →</a>
      </div>
    </div>
  );
}