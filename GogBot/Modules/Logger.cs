using Discord;
using Discord.WebSocket;
using Discord.Commands;

namespace GogBot.Modules
{
	public class Logger
	{

		public Logger(DiscordSocketClient client/*, CommandService command*/)
		{
			client.Log += Log;
			//command.Log += Log;
		}

		private Task Log(LogMessage message)
		{
			if (message.Exception is CommandException cmdException)
			{
				Console.WriteLine($"[Command/{message.Severity}] {cmdException.Command.Aliases.First()}"
					+ $" failed to execute in {cmdException.Context.Channel}.");
				Console.WriteLine(cmdException);
			}
			else
				Console.WriteLine($"[General/{message.Severity}] {message}");

			return Task.CompletedTask;
		}
	}
}