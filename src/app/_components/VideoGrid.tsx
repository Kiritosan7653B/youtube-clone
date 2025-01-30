import Video from "../_class/Video";
import Thumbnail from "./thumbnails";

function VideoGrid({videos} : {videos : Video[]}){

    return ( 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {videos.map((video) => (
          <Thumbnail {...video} key={video.title} />
        ))}
      </div>
     );
}

export default VideoGrid;