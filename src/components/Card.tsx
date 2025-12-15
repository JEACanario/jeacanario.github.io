type CardProps = {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  textPrimary: string;
  textSecondary: string;
  link: string;
};

export function Card({ imageSrc, imageAlt = "", title, textPrimary, textSecondary, link }: CardProps) {
  return (
    <a
      href={link}
      className="block focus:outline-none"
    >
      <article
        className="overflow-hidden rounded-2xl border border-gray-800/70 bg-[#0a0e16] shadow-sm transition-colors duration-200 ease-out hover:border-[#f0e6c3] hover:bg-[#0f141f] focus-visible:ring-2 focus-visible:ring-[#f0e6c3] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020408]"
      >
        <div className="h-48 w-full overflow-hidden my-1 flex items-center justify-center">
          <img src={imageSrc} alt={imageAlt || title} className="h-full" />
        </div>
        <div className="space-y-2 px-5 py-4">
          <h3 className="text-lg font-semibold leading-tight">{title}</h3>
          <p className="text-sm whitespace-pre-line">{textPrimary}</p>
          <p className="text-sm whitespace-pre-line opacity-80">{textSecondary}</p>
        </div>
      </article>
    </a>
  );
}
