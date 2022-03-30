using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Discord;
using GogBot.Types;

namespace GogBot.Modules
{
  public class Logger
  {
    //  TODO: Provide more discord info with most log events
    //  TODO: Make events accessible directly from botInstance

    //  Event delegates (How recieving function should look)
    public delegate Task Log(BasicLog log);

    //  Event (Invoke these with: .Invoke("String text"))
    //  Many of these may not be used.
    public event Log? OnDebugLog;
    public event Log? OnInfoLog;
    public event Log? OnWarnLog;
    public event Log? OnErrorLog;
    public event Log? OnFatalLog;

    public event Log? OnBotInteractionLog;
 
 
    public void DebugLog(/*LogMessage? logMessage,*/ string text)
    {
      BasicLog log = new BasicLog(LogLevel.Debug, /*logMessage,*/ text);

      OnDebugLog?.Invoke(log);
    }
    public void InfoLog( /*LogMessage? logMessage,*/ string text)
    {
      BasicLog log = new BasicLog(LogLevel.Info, /*logMessage,*/ text);

      OnInfoLog?.Invoke(log);
    }
    public void WarnLog( /*LogMessage? logMessage,*/ string text)
    {
      BasicLog log = new BasicLog(LogLevel.Warn, /*logMessage,*/ text);

      OnWarnLog?.Invoke(log);
    }
    public void ErrorLog(/*LogMessage? logMessage,*/ string text)
    {
      BasicLog log = new BasicLog(LogLevel.Error, /*logMessage,*/ text);

      OnWarnLog?.Invoke(log);
    }
  }
}
