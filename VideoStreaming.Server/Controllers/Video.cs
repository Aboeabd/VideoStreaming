using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class VideoController : ControllerBase
{
    private readonly IVideoService _videoService;

    public VideoController(IVideoService videoService)
    {
        _videoService = videoService;
    }

    [HttpPost("upload")]
    public async Task<IActionResult> UploadVideo(IFormFile file)
    {
        var video = await _videoService.UploadVideo(file);
        return Ok(video);
    }

    [HttpGet("list")]
    public IActionResult ListVideos()
    {
        var videos = _videoService.ListVideos();
        return Ok(videos);
    }

    [HttpGet("stream/{name}")]
    public async Task<IActionResult> StreamVideo(string name)
    {
        var stream = await _videoService.GetVideoByName(name);
        if (stream == null)
        {
            return NotFound();
        }

        return new FileStreamResult(stream, "video/mp4");
    }
}