using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Discord.WebSocket;

using GogBot.Core.MsgQueue;

namespace GogBot.Modules
{
  public static class HandleSlashCommand
  {
    public async static Task Handle(MsgObject MessageObject)
    {
      SocketSlashCommand SlashCommand = MessageObject.Content as SocketSlashCommand;

      MessageObject.Bot._logger.DebugLog( SlashCommand.CommandName);

      switch (SlashCommand.CommandName)
      {
        case "testcommand":
          {
            SlashCommand.RespondAsync("Things seem to be working so far...", ephemeral:true);
          }
          break;
      }
    }
  }
}
