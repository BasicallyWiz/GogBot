using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Discord;
using Discord.WebSocket;

using GogBot.Modules;

namespace GogBot
{
  public class GogBot
  {
    public static Task Main(string[] args) => new GogBot().asyncMain();

    private DiscordSocketClient ?_client;
    private Logger ?_logger;

    public async Task asyncMain()
    {
      _client = new DiscordSocketClient();
      _logger = new Logger(_client);

      //  You can assign your bot token to a string, and pass that in to connect.
      //  This is, however, insecure, particularly if you plan to have your code hosted in a public repository.
      var token = "I'm not giving you my token, cunt";

      // Some alternative options would be to keep your token in an Environment Variable or a standalone file.
      // var token = Environment.GetEnvironmentVariable("NameOfYourEnvironmentVariable");
      // var token = File.ReadAllText("token.txt");
      // var token = JsonConvert.DeserializeObject<AConfigurationClass>(File.ReadAllText("config.json")).Token;

      await _client.LoginAsync(TokenType.Bot, token);
      await _client.StartAsync();

      // Block this task until the program is closed.
      await Task.Delay(-1);
    }
  }
}
