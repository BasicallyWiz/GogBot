using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GogBot.Core.MsgQueue
{
  public class MsgObject
  {
    public readonly string Use; // Cock and ball.
    public readonly object Content; //  Singular.
    public GogBot.Core.GogBotInstance Bot; // Do not write to this, this will be set for you, when you add this to the message queue.

    //  Create.   Y E S .
    public MsgObject(string Use, object Content)
    {
      this.Use = Use;
      this.Content = Content;
    }
  }
}
