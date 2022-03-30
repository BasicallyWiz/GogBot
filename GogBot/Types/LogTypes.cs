using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Discord;

namespace GogBot.Types
{
  public static class LogLevel
  {
    public static bool IsLogLevel(int logLevel)
    {
      if (logLevel == 0 || logLevel == 1 || logLevel == 2 || logLevel == 3 || logLevel == 4)
      {
        return true;
      }
      return false;
    }

    public static int Info = 0;
    public static int Debug = 1;
    public static int Warn = 2;
    public static int Error = 3;
    public static int Fatal = 4;
  }

  public class BasicLog
  {
    public readonly int logLevel = LogLevel.Warn;
    public readonly string logTime = DateTime.Now.ToString();
    public readonly LogMessage? logMessage;
    public readonly string? extraInfo;

    public BasicLog(int logLevel, /*LogMessage? logMessage,*/ string text)
    {
      if (!LogLevel.IsLogLevel(logLevel))
      {
        throw new ArgumentException("Log level must be within 0 and 4. Try using a level using LogLevel.<level>");
      }

      this.logLevel = logLevel;
      this.logMessage = logMessage;
      this.extraInfo = text;
    }
  }
}
