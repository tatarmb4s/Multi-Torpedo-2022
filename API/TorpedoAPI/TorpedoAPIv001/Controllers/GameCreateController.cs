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

            

            return Ok(NewGame("Test"));
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

        public static dynamic NewGame(string sessionID)
        {
            

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
                a2 = a2,
                a3 = a3,
                a4 = a4,
                a5 = a5,
                a6 = a6,
                a7 = a7,
                a8 = a8,
                a9 = a9,
                a10 = a10,

                b1 = b1,
                b2 = b2,
                b3 = b3,
                b4 = b4,
                b5 = b5,
                b6 = b6,
                b7 = b7,
                b8 = b8,
                b9 = b9,
                b10 = b10,

                c1 = c1,
                c2 = c2,
                c3 = c3,
                c4 = c4,
                c5 = c5,
                c6 = c6,
                c7 = c7,
                c8 = c8,
                c9 = c9,
                c10 = c10,

                d1 = d1,
                d2 = d2,
                d3 = d3,
                d4 = d4,
                d5 = d5,
                d6 = d6,
                d7 = d7,
                d8 = d8,
                d9 = d9,
                d10 = d10,

                e1 = e1,
                e2 = e2,
                e3 = e3,
                e4 = e4,
                e5 = e5,
                e6 = e6,
                e7 = e7,
                e8 = e8,
                e9 = e9,
                e10 = e10,

                f1 = f1,
                f2 = f2,
                f3 = f3,
                f4 = f4,
                f5 = f5,
                f6 = f6,
                f7 = f7,
                f8 = f8,
                f9 = f9,
                f10 = f10,

                g1 = g1,
                g2 = g2,
                g3 = g3,
                g4 = g4,
                g5 = g5,
                g6 = g6,
                g7 = g7,
                g8 = g8,
                g9 = g9,
                g10 = g10,

                h1 = h1,
                h2 = h2,
                h3 = h3,
                h4 = h4,
                h5 = h5,
                h6 = h6,
                h7 = h7,                 
                h8 = h8,
                h9 = h9,
                h10 = h10,
                
                i1 = i1,
                i2 = i2,
                i3 = i3,
                i4 = i4,
                i5 = i5,
                i6 = i6,
                i7 = i7,

                i8 = i8,
                i9 = i9,
                i10 = i10,

                j1 = j1,
                j2 = j2,
                j3 = j3,
                j4 = j4,
                j5 = j5,
                j6 = j6,
                j7 = j7,
                j8 = j8,
                j9 = j9,
                j10 = j10,


            };

            PlayerData.Player1.boats.egyes.first egy1 = new PlayerData.Player1.boats.egyes.first("a1", false);

            List<dynamic> egyes = new List<dynamic>();
            egyes.Add(egy1);

            PlayerData.Player1.boats.kettes1.first kett11 = new PlayerData.Player1.boats.kettes1.first("", false);
            PlayerData.Player1.boats.kettes1.second kett12 = new PlayerData.Player1.boats.kettes1.second("", false);
            List<dynamic> kettes1 = new List<dynamic>();
            kettes1.Add(kett11);
            kettes1.Add(kett12);

            PlayerData.Player1.boats.kettes2.first kett21 = new PlayerData.Player1.boats.kettes2.first("", false);
            PlayerData.Player1.boats.kettes2.second kett22 = new PlayerData.Player1.boats.kettes2.second("", false);
            List<dynamic> kettes2 = new List<dynamic>();
            kettes2.Add(kett21);
            kettes2.Add(kett22);

            PlayerData.Player1.boats.harmas1.first harm11 = new PlayerData.Player1.boats.harmas1.first("", false);
            PlayerData.Player1.boats.harmas1.second harm12 = new PlayerData.Player1.boats.harmas1.second("", false);
            PlayerData.Player1.boats.harmas1.third harm13 = new PlayerData.Player1.boats.harmas1.third("", false);
            List<dynamic> harmas1 = new List<dynamic>();
            harmas1.Add(harm11);
            harmas1.Add(harm12);
            harmas1.Add(harm13);

            PlayerData.Player1.boats.harmas2.first harm21 = new PlayerData.Player1.boats.harmas2.first("", false);
            PlayerData.Player1.boats.harmas2.second harm22 = new PlayerData.Player1.boats.harmas2.second("", false);
            PlayerData.Player1.boats.harmas2.third harm23 = new PlayerData.Player1.boats.harmas2.third("", false);
            List<dynamic> harmas2 = new List<dynamic>();
            harmas2.Add(harm21);
            harmas2.Add(harm22);
            harmas2.Add(harm23);

            PlayerData.Player1.boats.negyes.first negy1 = new PlayerData.Player1.boats.negyes.first("", false);
            PlayerData.Player1.boats.negyes.second negy2 = new PlayerData.Player1.boats.negyes.second("", false);
            PlayerData.Player1.boats.negyes.third negy3 = new PlayerData.Player1.boats.negyes.third("", false);
            PlayerData.Player1.boats.negyes.fourth negy4 = new PlayerData.Player1.boats.negyes.fourth("", false);
            
            List<dynamic> negyes = new List<dynamic>();
            negyes.Add(negy1);
            negyes.Add(negy2);
            negyes.Add(negy3);
            negyes.Add(negy4);


            PlayerData.Player1.boats.otos.first ot1 = new PlayerData.Player1.boats.otos.first("", false);
            PlayerData.Player1.boats.otos.second ot2 = new PlayerData.Player1.boats.otos.second("", false);
            PlayerData.Player1.boats.otos.third ot3 = new PlayerData.Player1.boats.otos.third("", false);
            PlayerData.Player1.boats.otos.fourth ot4 = new PlayerData.Player1.boats.otos.fourth("", false);
            PlayerData.Player1.boats.otos.fiveth ot5 = new PlayerData.Player1.boats.otos.fiveth("", false);

            List<dynamic> otos = new List<dynamic>();
            otos.Add(ot1);
            otos.Add(ot2);
            otos.Add(ot3);
            otos.Add(ot4);
            otos.Add(ot5);


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
                boats = boats.otos[1],
            };

            var sess = new
            {
                sessionID = sessionID,
                player1 = player1
            };

            return sess;


        }

        public struct sessions
        {
            public struct coordCon
            {
                PlayerData.Player1.coords a1 = new PlayerData.Player1.coords("none", false);

            }
        }

    }
}
