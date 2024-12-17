const CardGrid = () => {
    const cards = [
      { id: 1, image: "https://via.placeholder.com/300", qr: true },
      { id: 2, image: "https://via.placeholder.com/300", playButton: true },
      { id: 3, image: "https://via.placeholder.com/300" },
      { id: 4, image: "https://via.placeholder.com/300" },
      { id: 5, image: "https://via.placeholder.com/300" },
    ];
  
    return (
      <section className="grid grid-cols-2 md:grid-cols-5 gap-4 px-8 py-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={card.image}
              alt={`Card ${card.id}`}
              className="w-full h-48 object-cover"
            />
            {card.qr && (
              <div className="absolute bottom-2 left-2 bg-lime-400 px-2 py-1 text-xs font-bold rounded">
                QR
              </div>
            )}
            {card.playButton && (
              <button className="absolute bottom-2 right-2 bg-gray-800 text-white p-2 rounded-full">
                ▶
              </button>
            )}
          </div>
        ))}
      </section>
    );
  };
  
  export default CardGrid;
  