interface QuoteBlockProps {
  quote: string;
  author?: string;
  className?: string;
}

export const QuoteBlock = ({ quote, author, className }: QuoteBlockProps) => {
  return (
    <blockquote
      className={`${className ? className : "relative w-full md:w-[300px] mt-8 p-6 bg-gray/100 rounded-xl text-white italic"}`}
    >
      {!author && <span className="absolute bottom-4 -left-2 text-6xl text-white">„</span>}
      {quote}
      {author && (
        <cite className="block mt-2 text-sm lg:text-md xl:text-lg not-italic text-gray-300">
          – {author}
        </cite>
      )}
      {!author && <span className="absolute -top-4 -right-2 text-6xl text-white">“</span>}
    </blockquote>
  );
};
