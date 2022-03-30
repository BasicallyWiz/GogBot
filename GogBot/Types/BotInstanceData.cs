using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Discord.WebSocket;
using GogBot.Interfaces;
using GogBot.Modules;

namespace GogBot.Types
{
  public class BotInstanceData : IBotInstanceData
  {
    public string[] _botTokens { get; set; }
    public string[] _args { get; set; }
    public Logger logger { get; set; }
    public DiscordSocketClient client { get; set; }
    public bool IsInConsole { get; set; }
  }
}
