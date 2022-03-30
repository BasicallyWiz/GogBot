using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using GogBot.Modules;
using GogBot.Core.MsgQueue;
namespace GogBot.Core
{
  public static class MessageHandler
  {
    public static async Task Handle(MsgObject Message)
    {
      switch (Message.Use)
      {
        //  Core functions
        case "GB_CORE":
          switch (Message.Content)
          {
            case "GB_QUIT": //  Sets _IsRunning to false, shutting down the bot.
              Message.Bot._isRunning = false;
              break;
          }
          break;
        case "GB_SLASH":
          HandleSlashCommand.Handle(Message);
          break;
      }
    }
  }
}
