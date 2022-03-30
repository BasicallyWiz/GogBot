using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GogBot.Types
{
  internal class SlashCommand
  {
    public string SlashName = "defaultslashcommand";
    public SlashCommandDescription Description;

    public SlashCommand(string SlashName, SlashCommandDescription Description)
    {
      this.SlashName = SlashName;
      this.Description = Description;
    }
  }
}
