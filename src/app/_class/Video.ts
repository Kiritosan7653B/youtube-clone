interface VideoDetails {
    title: string;
    url: string;
    channel: string;
    views: number;
    since: string;
    thumbnailUrl: string;
    description: string;
    publishedAt: string;
    comments: number;
    likes: number;
    dislikes: number;
    duration: number;
    isLive: boolean;
  }
  
  class Video implements VideoDetails {
    title: string;
    url: string;
    channel: string;
    views: number;
    since: string;
    thumbnailUrl: string;
    description: string;
    publishedAt: string;
    comments: number;
    likes: number;
    dislikes: number;
    duration: number;
    isLive: boolean;
  
    constructor(
      title: string,
      url: string,
      channel: string,
      views: number,
      since: string,
      thumbnailUrl: string,
      description: string,
      publishedAt: string,
      comments: number,
      likes: number,
      dislikes: number,
      duration: number,
      isLive: boolean
    ) {
      this.title = title;
      this.url = url;
      this.channel = channel;
      this.views = views;
      this.since = since;
      this.thumbnailUrl = thumbnailUrl;
      this.description = description;
      this.publishedAt = publishedAt;
      this.comments = comments;
      this.likes = likes;
      this.dislikes = dislikes;
      this.duration = duration;
      this.isLive = isLive;
    }
  
  }

export default Video;