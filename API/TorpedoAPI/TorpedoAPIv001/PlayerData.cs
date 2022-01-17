using System;

namespace TorpedoAPIv001
{
    public class PlayerData
    {
        public string sessionID { get; set; }
        //public List<coords1> coodspl1 { get; set; }
        //public string boats { get; set; }

        public struct Player1
        {
            public struct coords
            {
                public string btype;
                public bool fired;
                public coords(string bType, bool fiRed)
                {
                    btype = bType;
                    fired = fiRed;
                }

                
            }

            public struct boats
            {
                //string[] egyes = { };

                public struct egyes
                {
                    public struct first
                    {
                        public string pos;
                        public bool fired;

                        public first(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }
                }                
                public struct kettes1
                {
                    public struct first
                    {
                        public string pos;
                        public bool fired;

                        public first(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }
                    public struct second
                    {
                        public string pos;
                        public bool fired;

                        public second(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }
                }

                public struct kettes2
                {
                    public struct first
                    {
                        public string pos;
                        public bool fired;
                        
                        public first(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }   
                    public struct second
                    {   
                        public string pos;
                        public bool fired;

                        public second(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }
                }

                public struct harmas1
                {
                    public struct first
                    {
                        public string pos;
                        public bool fired;

                        public first(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }
                    public struct second
                    {
                        public string pos;
                        public bool fired;

                        public second(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }

                    public struct third
                    {
                        public string pos;
                        public bool fired;

                        public third(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }

                }
                public struct harmas2
                {
                    public struct first
                    {
                        public string pos;
                        public bool fired;

                        public first(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }
                    public struct second
                    {
                        public string pos;
                        public bool fired;

                        public second(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }

                    public struct third
                    {
                        public string pos;
                        public bool fired;

                        public third(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }

                }
                public struct negyes
                {
                    public struct first
                    {
                        public string pos;
                        public bool fired;

                        public first(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }
                    public struct second
                    {
                        public string pos;
                        public bool fired;

                        public second(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }

                    public struct third
                    {
                       public string pos;
                       public bool fired;

                        public third(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }

                    public struct fourth
                    {
                        public string pos;
                        public bool fired;

                        public fourth(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }

                }
                public struct otos
                {
                    public struct first
                    {
                        public string pos;
                        public bool fired;

                        public first(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }
                    public struct second
                    {
                        public string pos;
                        public bool fired;

                        public second(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }

                    public struct third
                    {
                        public string pos;
                        public bool fired;

                        public third(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }

                    public struct fourth
                    {
                        public string pos;
                        public bool fired;

                        public fourth(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }

                    public struct fiveth
                    {
                        public string pos;
                        public bool fired;

                        public fiveth(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }

                }


            }
        }
        /*Player2
        public struct Player2
        {
            public struct coords
            {
                public string btype;
                public bool fired;
                public coords(string bType, bool fiRed)
                {
                    btype = bType;
                    fired = fiRed;
                }
            }

            public struct boats
            {
                //string[] egyes = { };

                public struct egyes
                {
                    public struct first
                    {
                        string pos;
                        bool fired;

                        public first(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }
                }
                public struct kettes1
                {
                    public struct first
                    {
                        string pos;
                        bool fired;

                        public first(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }
                    public struct second
                    {
                        string pos;
                        bool fired;

                        public second(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }
                }

                public struct kettes2
                {
                    public struct first
                    {
                        string pos;
                        bool fired;

                        public first(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }
                    public struct second
                    {
                        string pos;
                        bool fired;

                        public second(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }
                }

                public struct harmas1
                {
                    public struct first
                    {
                        string pos;
                        bool fired;

                        public first(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }
                    public struct second
                    {
                        string pos;
                        bool fired;

                        public second(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }

                    public struct third
                    {
                        string pos;
                        bool fired;

                        public third(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }

                }
                public struct harmas2
                {
                    public struct first
                    {
                        string pos;
                        bool fired;

                        public first(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }
                    public struct second
                    {
                        string pos;
                        bool fired;

                        public second(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }

                    public struct third
                    {
                        string pos;
                        bool fired;

                        public third(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }

                }
                public struct negyes
                {
                    public struct first
                    {
                        string pos;
                        bool fired;

                        public first(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }
                    public struct second
                    {
                        string pos;
                        bool fired;

                        public second(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }

                    public struct third
                    {
                        string pos;
                        bool fired;

                        public third(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }

                    public struct fourth
                    {
                        string pos;
                        bool fired;

                        public fourth(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }

                }
                public struct otos
                {
                    public struct first
                    {
                        string pos;
                        bool fired;

                        public first(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }
                    public struct second
                    {
                        string pos;
                        bool fired;

                        public second(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }

                    public struct third
                    {
                        string pos;
                        bool fired;

                        public third(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }

                    public struct fourth
                    {
                        string pos;
                        bool fired;

                        public fourth(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }

                    public struct fiveth
                    {
                        string pos;
                        bool fired;

                        public fiveth(string ps, bool frd)
                        {
                            pos = ps;
                            fired = frd;
                        }
                    }

                }


            }
        }

        */
    }
    /*
    public class sessionS
    {
        public List<string>
    }*/
}
