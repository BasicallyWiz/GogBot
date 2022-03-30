using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GogBot.Types
{
  internal class SlashCommandDescription
  {
    #region Variables
    readonly int[] Version = new int[3] { 1, 0, 0 };  // Version of command. Maybe useful somewhere.
    readonly string DescName = "Default Command Name"; // Displays in help menu.
    readonly string Description = "Default command. Defaults defautly."; // Displays in help and while executing.
    readonly bool RequireAdmin = false;
    #endregion

    #region Constructors
    public SlashCommandDescription(string DescName, string Description)
    {
      this.DescName = DescName;
      this.Description = Description;
    }
    public SlashCommandDescription(string DescName, string Description, bool RequireAdmin)
    {
      this.DescName = DescName;
      this.Description = Description;
      this.RequireAdmin = RequireAdmin;
    }
    public SlashCommandDescription(int[] Version, string DescName, string Description)
    {
      this.Version = Version;
      this.DescName = DescName; 
      this.Description = Description;
    }
    public SlashCommandDescription(int[] Version, string DescName, string Description, bool RequireAdmin)
    {
      this.Version = Version;
      this.DescName = DescName;
      this.Description = Description;
      this.RequireAdmin = RequireAdmin;
    }
    #endregion

    #region Methods
    public int[] GetVersion() { return Version; }
    public string GetDescName() { return DescName; }
    public string GetDescription() { return Description; }
    public bool GetRequireAdmin() { return RequireAdmin; }
    #endregion
  }
}
