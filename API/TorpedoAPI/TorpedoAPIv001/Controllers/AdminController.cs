using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;



namespace TorpedoAPIv001.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            return Ok("In development...");
        }
    }
}
