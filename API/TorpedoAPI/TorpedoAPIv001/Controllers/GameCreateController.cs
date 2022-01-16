using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TorpedoAPIv001.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameCreateController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            /*var coords = new List<coords1>
            {
                new coords1() { coordinate="a1", boatType="none", fired=false},
                new coords1() { coordinate="a2", boatType="none", fired=false}
            };*/

            PlayerData.Player1.coords a1 = new PlayerData.Player1.coords("none", false);

            var salmons = new List<dynamic>();
            salmons.Add(1);


            return Ok(a1.btype);
        }
        /**/
        public static string NewGame(string sessionID, DateTime dateTime)
        {
            return sessionID + dateTime;

            var coords = new List<coords1>
            {
                new coords1() { coordinate="a1", boatType="none", fired=false},
                new coords1() { coordinate="a2", boatType="none", fired=false}
            };

            var player1 = new List<TorpedoAPIv001.PlayerData>
            {
                new TorpedoAPIv001.PlayerData() { sessionID = sessionID, coodspl1 = coords, boats = "" }
            };
        }

    }
}
