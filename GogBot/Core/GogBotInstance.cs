using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Drawing;
using Color = System.Drawing.Color;

using Colorful;
using Console = Colorful.Console;
using Discord;
using Discord.WebSocket;
using GogBot.Types;
using GogBot.Modules;
using GogBot.Core.MsgQueue;

namespace GogBot.Core
{
  public class GogBotInstance
  {
    #region Variables
    //  Public variables, meant to be changed at any time.
    public Logger _logger;
    public bool _isRunning = false;

    //  Variables meant to be assigned only ever once.
    private string[] _botTokens;
    private string[] _args;
    protected bool _isDebug = false;
    protected DiscordSocketClient _client;
    protected bool _isInConsole = false;
    protected Queue _MsgQueue;
    #endregion

    public GogBotInstance(BotInstanceData InstanceData)
    {
      //  Private
      _logger = InstanceData.logger;

      //  Private
      _botTokens = InstanceData._botTokens;
      _args = InstanceData._args;
      _isInConsole = InstanceData.IsInConsole;

#if DEBUG
      _isDebug = true;
#endif
      HandleArgs();
    }

    //  Handles login, and command setup. Do not use this, if you plan on implementing your own system.
    public async Task Start()
    {
      _logger.InfoLog("Starting GogBot...If nothing appears, re-check that the tokens are correct.");
      HandleArgs();

      _MsgQueue = new Queue();
      _isRunning = true;

      
      if (_isDebug)
      {
        _logger.DebugLog("We are running in debug mode...");
      }
      

      _client = new DiscordSocketClient();
      if (!_isDebug) await _client.LoginAsync(Discord.TokenType.Bot, _botTokens[0]);
      if (_isDebug) await _client.LoginAsync(Discord.TokenType.Bot, _botTokens[1]);
      await _client.StartAsync();

      //  Assign message handlers
      _client.Ready += OnReady;
      _client.SlashCommandExecuted += QueueSlash;

      while (_isRunning)
      {
        if (_MsgQueue.Count > 0 && _MsgQueue.Peek().GetType() == typeof(MsgObject))
        {
          MsgObject msgObject = (MsgObject)_MsgQueue.Dequeue();
          msgObject.Bot = this;
          MessageHandler.Handle(msgObject);
        }
        else if (_MsgQueue.Count > 0 && _MsgQueue.Peek().GetType() != typeof(MsgObject))
        {
          _logger.WarnLog("Bot message queue is reserved for objects of type MsgObject. Alien objects will be ignored and removed.");
          _MsgQueue.Dequeue();
        }
      }
    }

    void HandleArgs()
    {
      for (int i = 0; i < _args.Length; i++)
      {
        switch (_args[i])
        {
          case "--debug":
            _isDebug = true;
            break;
        }
      }
    }
    async Task OnReady()
    {
      if (_isInConsole) {
        Figlet figlet = new Figlet(FigletFont.Load("big.flf"));
        Console.WriteLine(figlet.ToAscii(_client.CurrentUser.Username), Color.Purple);
        Console.WriteLine("This means we're on the road to gog town");
      }

      CreateCommands();
    }
    async Task CreateCommands()
    {
      List<SlashCommand> commands = new List<SlashCommand>();

      commands.Add(new SlashCommand("testcommand", new SlashCommandDescription("Test Command", "Command for testing super-basic functionality.")));

      if (this._isDebug)
      {
        foreach (SlashCommand gogCommand in commands)
        {
          var command = new SlashCommandBuilder();
          command.WithName(gogCommand.SlashName);
          command.WithDescription(gogCommand.Description.GetDescription());

          try
          {
            var guild = _client.GetGuild(603162720199639061);
            await guild.CreateApplicationCommandAsync(command.Build());
          }
          catch (Exception ex)
          {
            _logger?.ErrorLog(ex.Message);
          }
        }
      }
      else
      {
        foreach (SlashCommand gogCommand in commands)
        {
          var command = new SlashCommandBuilder();
          command.WithName(gogCommand.SlashName);
          command.WithDescription(gogCommand.Description.GetDescription());

          try
          {

            await _client.CreateGlobalApplicationCommandAsync(command.Build());
          }
          catch (Exception ex)
          {
            _logger?.ErrorLog(ex.Message);
          }
        }
      }
    }
    async Task QueueSlash(SocketSlashCommand slashCommand)
    { _MsgQueue.Enqueue(new MsgObject("GB_SLASH", slashCommand)); }
  }
}
