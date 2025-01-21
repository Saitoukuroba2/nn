function SideArticles() {
  const articles = [
    {
      title: "Boom, Snoop Dogg Breaking Elec/Box Paris 2024 Olympics",
      category: "Olympics",
      readTime: "4 min read",
      image: "/snoop.jpg"
    },
    {
      title: "Carlos Nassar wins 69kg gold and breaks World Record",
      category: "Olympics",
      readTime: "8 min read",
      image: "/carlos.jpg"
    },
    {
      title: "The People's Republic of China reigns supreme in men's table",
      category: "Olympics",
      readTime: "10 min read",
      image: "/china-table.jpg"
    }
  ];

  return (
    <div className="space-y-4">
      {articles.map((article, index) => (
        <article key={index} className="flex space-x-4">
          <div className="flex-1">
            <h2 className="font-bold mb-2">{article.title}</h2>
            <div className="flex items-center space-x-3 text-sm text-gray-500">
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded">{article.category}</span>
              <span>{article.readTime}</span>
            </div>
          </div>
          <img
            src={article.image}
            alt={article.title}
            className="w-32 h-24 object-cover rounded"
          />
        </article>
      ))}
    </div>
  );
}