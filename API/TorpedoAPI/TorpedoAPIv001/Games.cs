namespace TorpedoAPIv001
{
    public class Games
    {
        public string sessionID { get; set; }
        public dynamic status { get; set; }
        public dynamic PlayerData { get; set; }
        public int actualPlayer { get; set; }
        public bool player1joined { get; set; }
        public bool player1ready { get; set; }
        public bool player2joined { get; set; }
        public bool player2ready { get; set; }
    }

    public class PutBoat
    {
        public string sessionID { get; set; }
        public string targetor { get; set; }
        public string boatName { get; set; }
        public List<dynamic> boatPos { get; set; }
    }

   
}
