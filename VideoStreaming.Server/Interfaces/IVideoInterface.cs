public interface IVideoService
{
    Task<Video> UploadVideo(IFormFile file);
    List<Video> ListVideos();
    Task<Stream> GetVideoByName(string name);
}