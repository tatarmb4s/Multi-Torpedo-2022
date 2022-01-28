using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TorpedoAPIv001.Controllers
{
    /*TempController
    [Route("api/[controller]")]
    [ApiController]

    public class GameCreateTempController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<dynamic>> Get()
        {
            

            return Ok("");
        }

        
    }*/

    /*
     Find index kódrészlet: int index = games.FindIndex(g => g.sessionID == sessionID);
     */

    [Route("api/[controller]")]
    [ApiController]
    public class GameCreateController : ControllerBase
    {
        //public List<> sessions = new List<dynamic>();
        public static Dictionary<string, Games> games = new Dictionary<string, Games>
        {
            /*new Games
            {
                sessionID = 1,
                status = 1,
                PlayerData =""
            }*/
        };

        public static List<string> PublicSessonsList = new List<string>();
        
        

        private static Dictionary<string, Fire> FIre = new Dictionary<string, Fire> { };

        [HttpGet]
        public async Task<IActionResult> Get()
        {        
            return Ok(games);
        }

        [HttpPost("New-Game")]
        public async Task<ActionResult<List<Games>>> New_Game(string sessionID, bool RandomName, bool isPublic)
        {
            dynamic a = "nincs";
            var response = "Létezik a név. Addjon meg egy újat!";
            bool siker = false;

            while (!siker)
            {
                a = "nincs";
                if (RandomName)
                {
                    sessionID = RandomSessionName(false, sessionID);
                }
                
                try
                {
                    a = games[sessionID];
                    sessionID = RandomSessionName(true, sessionID);
                    //return BadRequest(response);
                }
                catch (Exception ex)
                {
                    if (a == "nincs")
                    {
                        NewGame(sessionID, isPublic);
                        siker = true;
                        response = sessionID;
                    }
                }                
            }

            return Ok(response);
        }

        [HttpGet("CodeValid")]
        public async Task<ActionResult<List<Games>>> CodeValid(string sessionID)
        {
            dynamic a = "nincs";           
            
            try
            {
                a = games[sessionID];                
                return Ok(true);
            }
            catch (Exception ex)
            {
                if (a == "nincs")
                {                    
                    return BadRequest(false);
                }
            }

            return Ok(false);
        }

        [HttpGet("CanJoin")]
        public async Task<ActionResult<List<Games>>> CanJoin(string sessionID)
        {            
            return Ok(!games[sessionID].player2joined);
        }

        [HttpGet("SecondJoined")]
        public async Task<ActionResult<List<Games>>> SecondJoined(string sessionID)
        {
            return Ok(games[sessionID].player2joined);
        }

        [HttpPost("StartGame")]
        public async Task<ActionResult<List<Games>>> StartGame(string sessionID)
        {
            if (games[sessionID].player1ready && games[sessionID].player2ready)
            {
                games[sessionID].status = 1;
                return Ok(true);
            }

            return Ok(false);
        }

        [HttpGet("bothReady")]
        public async Task<IActionResult> bothReady(string sessionID)
        {
            if (games[sessionID].player1ready && games[sessionID].player2ready)
            {
                //games[sessionID].status = 1;
                return Ok(true);
            }
            return Ok(false);
        }

        [HttpGet("status")]
        public async Task<IActionResult> Status(string sessionID)
        {
            return Ok(games[sessionID].status);
        }

        [HttpGet("sessions")]
        public async Task<ActionResult<List<Games>>> sessions()
        {           
            return Ok(PublicSessonsList);
        }

        [HttpGet("endgame")]
        public async Task<ActionResult<List<Games>>> endgame(string sessionID)
        {
            bool isEnded = true;

            foreach (dynamic item in games[sessionID].PlayerData["player1"].boats)
            {
                foreach (dynamic cellak in item.Value)
                {
                    Console.WriteLine(cellak);
                    if (cellak.fired == false)
                    {
                        isEnded = false;
                    }
                }
            }

            if (isEnded == false)
            {
                foreach (dynamic item in games[sessionID].PlayerData["player2"].boats)
                {
                    foreach (dynamic cellak in item.Value)
                    {
                        Console.WriteLine(cellak);
                        if (cellak.fired == false)
                        {
                            isEnded = false;
                        }
                    }
                }
            }

            if (isEnded)
            {
                games[sessionID].status = 2;
            }

            
            return Ok(isEnded);
        }
         
        [HttpPost("putBoat")]
        public async Task<ActionResult<List<Games>>> putBoat(string sessionID, string targetor, string boatType, List<string>boatPos)
        {
            List<dynamic> crds = new List<dynamic>();

            for (int i = 0; i < boatPos.Count; i++)
            {
                //games[sessionID].PlayerData[targetor].boats[boatType][i].pos = boatPos[i];
                
                games[sessionID].PlayerData[targetor].boats[boatType][i] = NewBtData(boatPos[i], false);

                

                //games[sessionID].PlayerData[targetor].coords[boatPos[i]].btype = boatType;
                games[sessionID].PlayerData[targetor].coords[boatPos[i]] = NewCrData(boatType, false);


                crds.Add(games[sessionID].PlayerData[targetor].coords[boatPos[i]]);
            }

            

            return Ok(games[sessionID].PlayerData[targetor].boats[boatType] + "\n" + crds);
        }

        [HttpPost("fire")]
        public async Task<ActionResult<List<Games>>> fire(string sessionID, string target, string fCor)
        {
            //NewGame(sessionID);

            

            // Végeredmény maghatározása
            var result = "";

            //Elsüllyedés vizsgálata
            var sullyedt = true;

            // Az objektumban lévő sorszám
            int fp;

            // A koordinátán lévő hajónév lekérése
            var fn = games[sessionID].PlayerData[target].coords[fCor].btype;
            // Lőttek e már arra a mezőre?
            var ifFired = games[sessionID].PlayerData[target].coords[fCor].fired;

            //Api válasza
            dynamic response;

            response = new
            {
                result = result,
                boat = "secreet"
            };

            //Ha a koordinátához nem tartozik hajó
            if (ifFired)
            {
                return BadRequest("Ide már lőttek!");
                
            }
            //Ha a koordinátához nem tartozik hajó
            else if (fn == "none")
            {
                games[sessionID].PlayerData[target].coords[fCor] = NewCrData(fn, true);
                result = "nemtalalt";
                response = new
                {
                    result = result,
                    boat = "noboat"
                };
            }
            else
            {
                // A hajón a találat beírása, és visszatérés vagy találtal, vagy süllyedtel
                //dynamic boats = games[sessionID].PlayerData[target].boats;

                int count = games[sessionID].PlayerData[target].boats[fn].Count;

                for (int fps = 0; fps < games[sessionID].PlayerData[target].boats[fn].Count; fps++)
                {
                    if (fCor == games[sessionID].PlayerData[target].boats[fn][fps].pos)
                    {
                        //Ha a lövés helye egyezik a hajó egyik koordináta értékével
                        if (fCor == games[sessionID].PlayerData[target].boats[fn][fps].pos)
                        {
                            //Sorszám átadása
                            fp = fps;
                            // Ha a hajó azon részére még nem lőttek akkor
                            if (games[sessionID].PlayerData[target].boats[fn][fps].fired == false)
                            {
                                // A hajó ezen részére legyen igaz az hogy lőttek rá
                                games[sessionID].PlayerData[target].boats[fn][fps] = NewBtData(fCor, true);
                                result = "Talalt";
                            }
                        }
                        //Ha a hajó koordinátáján nincs lövés legyen false
                    }
                    if (games[sessionID].PlayerData[target].boats[fn][fps].fired == false)
                    {
                        sullyedt = false;
                    }
                }
                // Ha elsullyedt akkor legyen az eredmény süllyedt
                
                if (sullyedt)
                {
                    result = "Sullyedt";
                    games[sessionID].PlayerData[target].coords[fCor] = NewCrData(fn, true);
                    response = new
                    {
                        result = result,
                        boat = games[sessionID].PlayerData[target].boats[fn]
                    };

                    Console.WriteLine(response);
                }

                if (result == "Talalt" && !sullyedt)
                {
                    games[sessionID].PlayerData[target].coords[fCor] = NewCrData(fn, true);
                    response = new
                    {
                        result = result,
                        boat = "secreetTalalt"
                    };
                    Console.WriteLine(response);
                }
                else
                {
                    if (!sullyedt && result != "Talalt")
                    {
                        //games[sessionID].PlayerData[target].coords[fCor] = NewCrData(fn, true);
                        result = "nemtalalt";
                        response = new
                        {
                            result = result,
                            boat = "noboat"
                        };
                    }

                    Console.WriteLine(response);
                }
            }


            //return Ok(games[sessionID].PlayerData[target].coords[fCor]);//);

            //Aktuális játékos átállítása a másik playerre

            if (games[sessionID].actualPlayer == 1)
            {
                games[sessionID].actualPlayer = 2;
            }
            else
            {
                if (games[sessionID].actualPlayer == 2)
                {
                    games[sessionID].actualPlayer = 1;
                }
            }
            

            return Ok(response);
        }

        [HttpPost("playerJoin")]
        public async Task<ActionResult<List<Games>>> playerJoin(string sessionID, string player)
        {
            /*games[sessionID].PlayerData[player].joined = true;

             dynamic temp = games[sessionID].PlayerData[player];
             temp.joined = true;
             games[sessionID].PlayerData[player] = temp;*/

            bool msg = false;

            if (player == "player1")
            {
                games[sessionID].player1joined = true;
                msg = games[sessionID].player1joined;
            }
            else if (player == "player2") {
                games[sessionID].player2joined = true;
                msg = games[sessionID].player2joined;
            }

            return Ok(msg);
        }

        [HttpPost("playerReady")]
        public async Task<ActionResult<List<Games>>> playerReady(string sessionID, string player)
        {
            /*games[sessionID].PlayerData[player].joined = true;

             dynamic temp = games[sessionID].PlayerData[player];
             temp.joined = true;
             games[sessionID].PlayerData[player] = temp;*/

            bool msg = false;

            if (player == "player1")
            {
                games[sessionID].player1ready = true;
                msg = games[sessionID].player1ready;
            }
            else if (player == "player2")
            {
                games[sessionID].player2ready = true;
                msg = games[sessionID].player2ready;
            }

            return Ok(msg);
        }

        [HttpGet("actualPlayer")]
        public async Task<ActionResult<List<Games>>> actualPlayer(string sessionID)
        {
            //int index = games.FindIndex(g => g.sessionID == sessionID);
            return Ok(games[sessionID].actualPlayer);
        }

        /**/

        public static dynamic NewCrData(string boatType, bool frd)
        {
            PlayerData.Player1.coords btyp = new PlayerData.Player1.coords(boatType, frd);            
            return (ConCr(btyp));
        }

        public static dynamic NewBtData(string boatPos, bool frd)
        {
            return (BoatConv(new PlayerData.Player1.boats.egyes.first(boatPos, frd)));
        }

        private static Random random = new Random();

        public static string RandomSessionName(bool predefinied, string sessionID)
        {
            if (predefinied)
            {
                const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                return sessionID + "_" + new string(Enumerable.Repeat(chars, 5)
                        .Select(s => s[random.Next(s.Length)]).ToArray());
            }
            else
            {
                const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                return new string(Enumerable.Repeat(chars, 5)
                        .Select(s => s[random.Next(s.Length)]).ToArray());
            }
        }

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


        public static dynamic NewGame(string sessionID, bool isPublic)
        {

            if (isPublic)
            {
                PublicSessonsList.Add(sessionID);
            }
            
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
            PlayerData.Player1.coords xy = new PlayerData.Player1.coords("none", false);


            Dictionary<string, dynamic> crds = new Dictionary<string, dynamic>();
            crds.Add("a1", ConCr(a1));
            crds.Add("a2", ConCr(a2));
            crds.Add("a3", ConCr(a3));
            crds.Add("a4", ConCr(a4));
            crds.Add("a5", ConCr(a5));
            crds.Add("a6", ConCr(a6));
            crds.Add("a7", ConCr(a7));
            crds.Add("a8", ConCr(a8));
            crds.Add("a9", ConCr(a9));
            crds.Add("a10", ConCr(a10));
            //b
            crds.Add("b1", ConCr(b1));
            crds.Add("b2", ConCr(b2));
            crds.Add("b3", ConCr(b3));
            crds.Add("b4", ConCr(b4));
            crds.Add("b5", ConCr(b5));
            crds.Add("b6", ConCr(b6));
            crds.Add("b7", ConCr(b7));
            crds.Add("b8", ConCr(b8));
            crds.Add("b9", ConCr(b9));
            crds.Add("b10", ConCr(b10));
            //c
            crds.Add("c1", ConCr(c1));
            crds.Add("c2", ConCr(c2));
            crds.Add("c3", ConCr(c3));
            crds.Add("c4", ConCr(c4));
            crds.Add("c5", ConCr(c5));
            crds.Add("c6", ConCr(c6));
            crds.Add("c7", ConCr(c7));
            crds.Add("c8", ConCr(c8));
            crds.Add("c9", ConCr(c9));
            crds.Add("c10", ConCr(c10));
            //d
            crds.Add("d1", ConCr(d1));
            crds.Add("d2", ConCr(d2));
            crds.Add("d3", ConCr(d3));
            crds.Add("d4", ConCr(d4));
            crds.Add("d5", ConCr(d5));
            crds.Add("d6", ConCr(d6));
            crds.Add("d7", ConCr(d7));
            crds.Add("d8", ConCr(d8));
            crds.Add("d9", ConCr(d9));
            crds.Add("d10", ConCr(d10));
            //e
            crds.Add("e1", ConCr(e1));
            crds.Add("e2", ConCr(e2));
            crds.Add("e3", ConCr(e3));
            crds.Add("e4", ConCr(e4));
            crds.Add("e5", ConCr(e5));
            crds.Add("e6", ConCr(e6));
            crds.Add("e7", ConCr(e7));
            crds.Add("e8", ConCr(e8));
            crds.Add("e9", ConCr(e9));
            crds.Add("e10", ConCr(e10));
            //f
            crds.Add("f1", ConCr(f1));
            crds.Add("f2", ConCr(f2));
            crds.Add("f3", ConCr(f3));
            crds.Add("f4", ConCr(f4));
            crds.Add("f5", ConCr(f5));
            crds.Add("f6", ConCr(f6));
            crds.Add("f7", ConCr(f7));
            crds.Add("f8", ConCr(f8));
            crds.Add("f9", ConCr(f9));
            crds.Add("f10", ConCr(f10));
            //g
            crds.Add("g1", ConCr(g1));
            crds.Add("g2", ConCr(g2));
            crds.Add("g3", ConCr(g3));
            crds.Add("g4", ConCr(g4));
            crds.Add("g5", ConCr(g5));
            crds.Add("g6", ConCr(g6));
            crds.Add("g7", ConCr(g7));
            crds.Add("g8", ConCr(g8));
            crds.Add("g9", ConCr(g9));
            crds.Add("g10", ConCr(g10));
            //h
            crds.Add("h1", ConCr(h1));
            crds.Add("h2", ConCr(h2));
            crds.Add("h3", ConCr(h3));
            crds.Add("h4", ConCr(h4));
            crds.Add("h5", ConCr(h5));
            crds.Add("h6", ConCr(h6));
            crds.Add("h7", ConCr(h7));
            crds.Add("h8", ConCr(h8));
            crds.Add("h9", ConCr(h9));
            crds.Add("h10", ConCr(h10));
            //i
            crds.Add("i1", ConCr(i1));
            crds.Add("i2", ConCr(i2));
            crds.Add("i3", ConCr(i3));
            crds.Add("i4", ConCr(i4));
            crds.Add("i5", ConCr(i5));
            crds.Add("i6", ConCr(i6));
            crds.Add("i7", ConCr(i7));
            crds.Add("i8", ConCr(i8));
            crds.Add("i9", ConCr(i9));
            crds.Add("i10", ConCr(i10));
            //j
            crds.Add("j1", ConCr(j1));
            crds.Add("j2", ConCr(j2));
            crds.Add("j3", ConCr(j3));
            crds.Add("j4", ConCr(j4));
            crds.Add("j5", ConCr(j5));
            crds.Add("j6", ConCr(j6));
            crds.Add("j7", ConCr(j7));
            crds.Add("j8", ConCr(j8));
            crds.Add("j9", ConCr(j9));
            crds.Add("j10", ConCr(j10));
            /*
            //x
            crds.Add("x1", ConCr(x1));
            crds.Add("x2", ConCr(x2));
            crds.Add("x3", ConCr(x3));
            crds.Add("x4", ConCr(x4));
            crds.Add("x5", ConCr(x5));
            crds.Add("x6", ConCr(x6));
            crds.Add("x7", ConCr(x7));
            crds.Add("x8", ConCr(x8));
            crds.Add("x9", ConCr(x9));
            crds.Add("x10", ConCr(x10));
            */
            /*old var crds*/

            PlayerData.Player1.boats.egyes.first egy1 = new PlayerData.Player1.boats.egyes.first("", false);

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

            Dictionary<string, dynamic> boats = new Dictionary<string, dynamic>();
            boats.Add("egyes", egyes);
            boats.Add("kettes1", kettes1);
            boats.Add("kettes2", kettes2);
            boats.Add("harmas1", harmas1);
            boats.Add("harmas2", harmas2);
            boats.Add("negyes", negyes);
            boats.Add("otos", otos);

            /*var boats = new
            {
                egyes = egyes,
                kettes1 = kettes1,
                kettes2 = kettes2,
                harmas1 = harmas1,
                harmas2 = harmas2,
                negyes = negyes,
                otos = otos,
            };*/


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

            Dictionary<string, dynamic> playerData = new Dictionary<string, dynamic>();
            playerData.Add("player1", player1);
            playerData.Add("player2", player2);

            var sess = new Games
            {
                sessionID = sessionID,
                status = 0,
                PlayerData = playerData,
                actualPlayer = 1,
                player1joined = false,
                player1ready = false,
                player2joined = false,
                player2ready = false
            };                    
            games.Add(sessionID, sess);

            return games;


        }

    }
}
