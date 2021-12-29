# Logger
Class used for a large majority of debug and info logging.

## General Info
The Logger is a class that is instantiated at the beginning of the [[GogBotClass|GogBot class']] creation.

---
## Index
### [[Logger#Using this class|Using This Class]]
### [[Logger#Uses|Uses]]
### [[Logger#Arguments|Arguments]]
### [[Logger#Contructor|Constuctor]]

---
## Using this class
This class is a single method class, built entirely for object-oriented console logging.

If properly instantiated in [[GogBotClass|GogBot]], it should be accessible through client.Log, or command.Log.

While you can instantiate a new Logger, it is suggested to just use the Logger instantiated in [[GogBotClass|GogBot]].

The resson for this, is that one of Logger's primary features, is to expose and unify client.Log's and command.Log's logging method, for easier modification.

If you are to need to instantiate a new Logger, refer to the below code:
```cs
using GogBot.Modules; // Logger resides in the GogBot.Modules namespace

private Logger ?_logger; // Logger is not a static class

// A DiscordSocketClient and CommandService are meant to be written to,
// so they're required.
private DiscordSocketClient _client;
private CommandService _commandService;

class YourClass {
  _logger = new Logger(_client, _commandService_);
}
```

---
### Uses
- [[Discord]]
- [[Discord.WebSocket]]
- [[Discord.Commands]]

---
## Arguments
### client
The client argument is of [[Discord.WebSocket]]'s "WebsocketClient" type.

### cmdException
The cmdException argument is of [[Discord.Commands]]'s "CommandException" type.

---
## Contructor
The constructor of this class takes the [[Logger#client|client]] and [[Logger#cmdException|cmdException]] and sets both of those's .Log function to instead use the Logger's Log function.