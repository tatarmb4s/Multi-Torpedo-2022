using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TorpedoAPIv001.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class GameCreateTempController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<dynamic>> Get()
        {
            

            return Ok("");
        }

        
    }
    [Route("api/[controller]")]
    [ApiController]
    public class GameCreateController : ControllerBase
    {
        //public List<> sessions = new List<dynamic>();
        private static List<Games> games = new List<Games>
        {
            /*new Games
            {
                sessionID = 1,
                status = 1,
                PlayerData =""
            }*/
        };

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            /*var coords = new List<coords1>
            {
                new coords1() { coordinate="a1", boatType="none", fired=false},
                new coords1() { coordinate="a2", boatType="none", fired=false}
            };*/          

            return Ok(games);
        }

        [HttpPost("NewGame")]
        public async Task<ActionResult<List<Games>>> NGame(string sessionID)
        {
            NewGame(sessionID);


            return Ok(sessionID+"/player1.html");
        }
        
        [HttpGet("sessions")]
        public async Task<ActionResult<List<Games>>> Sessons()
        {
            
            List<string> ss = new List<string>();
            
            foreach (dynamic g in games)
            {
                ss.Add(g.sessionID);
            }

            return Ok(ss);
        }

        [HttpPost("fire")]
        public async Task<ActionResult<List<Games>>> fire(string sessionID, string target, string coord)
        {
            NewGame(sessionID);

            List<dynamic> datas = new List<dynamic>();
            
            foreach (dynamic g in games)
            {
                datas.Add(g.PlayerData);
                //Dictionary<string, int> cords = new Dictionary<string, int>();
                //cords.Add("a1", 200);
                //
            }

            

            int index = games.FindIndex(g => g.sessionID == sessionID);

            //games[index].PlayerData.target.coord.fired = true;
           
            //return Ok(games[index].PlayerData.player1.coords[coord-1].fired);
            return Ok(games[index].PlayerData.player1.coords.a1.fired);

        }

        [HttpPost("actual")]
        public async Task<ActionResult<List<Games>>> actual(string sessionID)
        {
            int index = games.FindIndex(g => g.sessionID == sessionID);
            return Ok(games[index].actualPlayer);
        }

        /**/

        public static dynamic ConCr(dynamic cord)
        {
            var a1c = new
            {
                btype = cord.btype,
                fired = cord.fired
            };

            return a1c;
        }

        public static dynamic BoatConv(dynamic Boat)
        {
            var HajCon = new
            {
                pos = Boat.pos,
                fired = Boat.fired,
            };

            return HajCon;
        }


        public static dynamic NewGame(string sessionID)
        {
            
            PlayerData.Player1.coords tabelCoords = new PlayerData.Player1.coords("none", false);

            /*var sessions = new List<PlayerData>
            {
                new PlayerData {
                    sessionID = sessionID
                }
            };*/

            PlayerData.Player1.coords a1 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords a2 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords a3 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords a4 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords a5 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords a6 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords a7 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords a8 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords a9 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords a10 = new PlayerData.Player1.coords("none", false);

            //B
            PlayerData.Player1.coords b1 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords b2 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords b3 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords b4 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords b5 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords b6 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords b7 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords b8 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords b9 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords b10 = new PlayerData.Player1.coords("none", false);

            //C
            PlayerData.Player1.coords c1 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords c2 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords c3 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords c4 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords c5 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords c6 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords c7 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords c8 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords c9 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords c10 = new PlayerData.Player1.coords("none", false);

            //D
            PlayerData.Player1.coords d1 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords d2 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords d3 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords d4 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords d5 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords d6 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords d7 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords d8 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords d9 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords d10 = new PlayerData.Player1.coords("none", false);

            //E
            PlayerData.Player1.coords e1 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords e2 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords e3 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords e4 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords e5 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords e6 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords e7 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords e8 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords e9 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords e10 = new PlayerData.Player1.coords("none", false);

            //F
            PlayerData.Player1.coords f1 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords f2 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords f3 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords f4 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords f5 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords f6 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords f7 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords f8 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords f9 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords f10 = new PlayerData.Player1.coords("none", false);

            //G
            PlayerData.Player1.coords g1 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords g2 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords g3 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords g4 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords g5 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords g6 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords g7 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords g8 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords g9 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords g10 = new PlayerData.Player1.coords("none", false);

            //H
            PlayerData.Player1.coords h1 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords h2 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords h3 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords h4 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords h5 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords h6 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords h7 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords h8 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords h9 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords h10 = new PlayerData.Player1.coords("none", false);

            //I
            PlayerData.Player1.coords i1 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords i2 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords i3 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords i4 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords i5 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords i6 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords i7 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords i8 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords i9 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords i10 = new PlayerData.Player1.coords("none", false);

            //J
            PlayerData.Player1.coords j1 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords j2 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords j3 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords j4 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords j5 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords j6 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords j7 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords j8 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords j9 = new PlayerData.Player1.coords("none", false);
            PlayerData.Player1.coords j10 = new PlayerData.Player1.coords("none", false);

            var a1c = new
            {
                btype = a1.btype,
                fired = a1.fired
            };

            var crds = new
            {
                a1 = ConCr(a1),
                a2 = ConCr(a2),
                a3 = ConCr(a3),
                a4 = ConCr(a4),
                a5 = ConCr(a5),
                a6 = ConCr(a6),
                a7 = ConCr(a7),
                a8 = ConCr(a8),
                a9 = ConCr(a9),
                a10 = ConCr(a10),

                b1 = ConCr(b1),
                b2 = ConCr(b2),
                b3 = ConCr(b3),
                b4 = ConCr(b4),
                b5 = ConCr(b5),
                b6 = ConCr(b6),
                b7 = ConCr(b7),
                b8 = ConCr(b8),
                b9 = ConCr(b9),
                b10 = ConCr(b10),

                c1 = ConCr(c1),
                c2 = ConCr(c2),
                c3 = ConCr(c3),
                c4 = ConCr(c4),
                c5 = ConCr(c5),
                c6 = ConCr(c6),
                c7 = ConCr(c7),
                c8 = ConCr(c8),
                c9 = ConCr(c9),
                c10 = ConCr(c10),

                d1 = ConCr(d1),
                d2 = ConCr(d2),
                d3 = ConCr(d3),
                d4 = ConCr(d4),
                d5 = ConCr(d5),
                d6 = ConCr(d6),
                d7 = ConCr(d7),
                d8 = ConCr(d8),
                d9 = ConCr(d9),
                d10 = ConCr(d10),

                e1 = ConCr(e1),
                e2 = ConCr(e2),
                e3 = ConCr(e3),
                e4 = ConCr(e4),
                e5 = ConCr(e5),
                e6 = ConCr(e6),
                e7 = ConCr(e7),
                e8 = ConCr(e8),
                e9 = ConCr(e9),
                e10 = ConCr(e10),

                f1 = ConCr(f1),
                f2 = ConCr(f2),
                f3 = ConCr(f3),
                f4 = ConCr(f4),
                f5 = ConCr(f5),
                f6 = ConCr(f6),
                f7 = ConCr(f7),
                f8 = ConCr(f8),
                f9 = ConCr(f9),
                f10 = ConCr(f10),

                g1 = ConCr(g1),
                g2 = ConCr(g2),
                g3 = ConCr(g3),
                g4 = ConCr(g4),
                g5 = ConCr(g5),
                g6 = ConCr(g6),
                g7 = ConCr(g7),
                g8 = ConCr(g8),
                g9 = ConCr(g9),
                g10 = ConCr(g10),

                h1 = ConCr(h1),
                h2 = ConCr(h2),
                h3 = ConCr(h3),
                h4 = ConCr(h4),
                h5 = ConCr(h5),
                h6 = ConCr(h6),
                h7 = ConCr(h7),                 
                h8 = ConCr(h8),
                h9 = ConCr(h9),
                h10 = ConCr(h10),
                
                i1 = ConCr(i1),
                i2 = ConCr(i2),
                i3 = ConCr(i3),
                i4 = ConCr(i4),
                i5 = ConCr(i5),
                i6 = ConCr(i6),
                i7 = ConCr(i7),
                i8 = ConCr(i8),
                i9 = ConCr(i9),
                i10 = ConCr(i10),

                j1 = ConCr(j1),
                j2 = ConCr(j2),
                j3 = ConCr(j3),
                j4 = ConCr(j4),
                j5 = ConCr(j5),
                j6 = ConCr(j6),
                j7 = ConCr(j7),
                j8 = ConCr(j8),
                j9 = ConCr(j9),
                j10 = ConCr(j10),


            };

            PlayerData.Player1.boats.egyes.first egy1 = new PlayerData.Player1.boats.egyes.first("a1", false);

            List<dynamic> egyes = new List<dynamic>();
            egyes.Add(BoatConv(egy1));

            PlayerData.Player1.boats.kettes1.first kett11 = new PlayerData.Player1.boats.kettes1.first("", false);
            PlayerData.Player1.boats.kettes1.second kett12 = new PlayerData.Player1.boats.kettes1.second("", false);
            List<dynamic> kettes1 = new List<dynamic>();
            kettes1.Add(BoatConv(kett11));
            kettes1.Add(BoatConv(kett12));

            PlayerData.Player1.boats.kettes2.first kett21 = new PlayerData.Player1.boats.kettes2.first("", false);
            PlayerData.Player1.boats.kettes2.second kett22 = new PlayerData.Player1.boats.kettes2.second("", false);
            List<dynamic> kettes2 = new List<dynamic>();
            kettes2.Add(BoatConv(kett21));
            kettes2.Add(BoatConv(kett22));

            PlayerData.Player1.boats.harmas1.first harm11 = new PlayerData.Player1.boats.harmas1.first("", false);
            PlayerData.Player1.boats.harmas1.second harm12 = new PlayerData.Player1.boats.harmas1.second("", false);
            PlayerData.Player1.boats.harmas1.third harm13 = new PlayerData.Player1.boats.harmas1.third("", false);
            List<dynamic> harmas1 = new List<dynamic>();
            harmas1.Add(BoatConv(harm11));
            harmas1.Add(BoatConv(harm12));
            harmas1.Add(BoatConv(harm13));

            PlayerData.Player1.boats.harmas2.first harm21 = new PlayerData.Player1.boats.harmas2.first("", false);
            PlayerData.Player1.boats.harmas2.second harm22 = new PlayerData.Player1.boats.harmas2.second("", false);
            PlayerData.Player1.boats.harmas2.third harm23 = new PlayerData.Player1.boats.harmas2.third("", false);
            List<dynamic> harmas2 = new List<dynamic>();
            harmas2.Add(BoatConv(harm21));
            harmas2.Add(BoatConv(harm22));
            harmas2.Add(BoatConv(harm23));

            PlayerData.Player1.boats.negyes.first negy1 = new PlayerData.Player1.boats.negyes.first("", false);
            PlayerData.Player1.boats.negyes.second negy2 = new PlayerData.Player1.boats.negyes.second("", false);
            PlayerData.Player1.boats.negyes.third negy3 = new PlayerData.Player1.boats.negyes.third("", false);
            PlayerData.Player1.boats.negyes.fourth negy4 = new PlayerData.Player1.boats.negyes.fourth("", false);

            List<dynamic> negyes = new List<dynamic>();
            negyes.Add(BoatConv(negy1));
            negyes.Add(BoatConv(negy2));
            negyes.Add(BoatConv(negy3));
            negyes.Add(BoatConv(negy4));


            PlayerData.Player1.boats.otos.first ot1 = new PlayerData.Player1.boats.otos.first("", false);
            PlayerData.Player1.boats.otos.second ot2 = new PlayerData.Player1.boats.otos.second("", false);
            PlayerData.Player1.boats.otos.third ot3 = new PlayerData.Player1.boats.otos.third("", false);
            PlayerData.Player1.boats.otos.fourth ot4 = new PlayerData.Player1.boats.otos.fourth("", false);
            PlayerData.Player1.boats.otos.fiveth ot5 = new PlayerData.Player1.boats.otos.fiveth("", false);

            List<dynamic> otos = new List<dynamic>();
            otos.Add(BoatConv(ot1));
            otos.Add(BoatConv(ot2));
            otos.Add(BoatConv(ot3));
            otos.Add(BoatConv(ot4));
            otos.Add(BoatConv(ot5));

            var boats = new
            {
                egyes = egyes,
                kettes1 = kettes1,
                kettes2 = kettes2,
                harmas1 = harmas1,
                harmas2 = harmas2,
                negyes = negyes,
                otos = otos,
            };

            var player1 = new
            {
                coords = crds,
                boats = boats,
                joined = false
            };

            var player2 = new
            {
                coords = crds,
                boats = boats,
                joined = false
            };

            var playerData = new
            {
                player1 = player1,
                player2 = player2,
            };

            



            var sess = new Games
            {
                sessionID = sessionID,
                status = 0,
                PlayerData = playerData,
                actualPlayer = 1,
            };

            List<dynamic> sessions = new List<dynamic>();
            games.Add(sess);

            return games;


        }

    }
}
