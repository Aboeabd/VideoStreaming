public class VideoService : IVideoService
{
    private readonly string _videosPath = Path.Combine(Directory.GetCurrentDirectory(), "Videos");
    private static List<Video> _videos = new List<Video>();

    public async Task<Video> UploadVideo(IFormFile file)
    {
        byte[] fileBytes;

        using (var ms = new MemoryStream())
        {
            await file.CopyToAsync(ms);
            fileBytes = ms.ToArray();
        }

        var video = new Video { Id = Guid.NewGuid().ToString(), Name = file.FileName, FileBytes = fileBytes };
        _videos.Add(video);

        return video;
    }

    public List<Video> ListVideos()
    {
        return _videos;
    }

    public async Task<Stream> GetVideoByName(string name)
    {
        var video = _videos.FirstOrDefault(v => v.Name.Contains(name));
        if (video == null)
        {
            return null;
        }

        return new MemoryStream(video.FileBytes);
    }
}