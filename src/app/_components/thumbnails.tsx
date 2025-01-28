import Video from "../_class/Video";

const compactNumberFormatter = new Intl.NumberFormat(undefined, {
  notation: "compact",
});

export function formatCompactNumber(number: number) {
  return compactNumberFormatter.format(number);
}

function Thumbnail(item: Video) {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <img src={item.thumbnailUrl} alt={item.title} className="w-full h-auto" />
      <div className="p-2">
        <h3 className="font-semibold text-lg truncate">{item.title}</h3> {/* Added 'truncate' class here */}
        <p className="text-sm text-gray-500">{item.channel}</p>
        <p className="text-sm text-gray-400">
          {formatCompactNumber(item.views)} views • {item.since}
        </p>
      </div>
    </div>
  );
  
}

export default Thumbnail;
