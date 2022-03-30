using System.Drawing;

using GogBot.Core;
using GogBot.Types;

using Colorful;
using Console = Colorful.Console;

class GogBotConsole
{
  static Task Main(string[] args) => new GogBotConsole().MainAsync(args);

  async Task MainAsync(string[] args)
  {
    //  Build and centralize data required for functionality
    BotInstanceData bID = new BotInstanceData();
    bID.logger = new GogBot.Modules.Logger();
    bID._args = args;
    bID._botTokens = File.ReadAllLines("gogbot.token");
    bID.IsInConsole = true;

    GogBotInstance Instance = new GogBotInstance(bID);
    Instance._logger.OnInfoLog += HandleInfoLog;
    Instance._logger.OnDebugLog += HandleDebugLog;
    Instance._logger.OnWarnLog += HandleWarnLog;

    await Instance.Start();
  }

  async Task HandleInfoLog(BasicLog log)
  {
    string String = log.logTime + " {0}: " + log.logMessage + log.extraInfo;
    Console.WriteLineFormatted(String, Color.WhiteSmoke, Color.White, "Info");
  }
  async Task HandleDebugLog(BasicLog log)
  { 
      string String = log.logTime + " {0}: " + log.logMessage + log.extraInfo;
      Console.WriteLineFormatted(String, Color.Yellow, Color.White, "Debug");
  }
  async Task HandleWarnLog(BasicLog log)
  {
    string String = log.logTime + " {0}: " + log.logMessage + log.extraInfo;
    Console.WriteLineFormatted(String, Color.Red, Color.White, "Warning");
  }
}