using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using GogBot.Modules;

namespace GogBot.Interfaces
{
  internal interface IBotInstanceData
  {
    //  Variables meant to be changed at any time.
    Logger logger { get; set; }

    //  Variables, meant to be set only ever once.
    abstract string[] _botTokens { get; }
    abstract string[] _args { get; }  //  Command arguments, used when starting up the bot.
    abstract Discord.WebSocket.DiscordSocketClient client { get; }  //Namespaces are included to provide easier to access detail for where a data type derives from.
    abstract bool IsInConsole { get; }  //  Enables extra features for Console applications. (Such as cmd or Terminal)
  }
}
