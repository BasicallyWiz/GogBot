# Context Based Commands
Commands and sub-commands will only be available under specific contexts.

---
## Index
### [[Context-based-commands#Lifecycle|LifeCycle]]
### [[Context-based-commands#How it'll be done|The How]]
### [[Context-based-commands#Pros and Cons of Context Based Commands|Pros and Cons]]
---
## Lifecycle
1. Create context
2. Read Context
3. View Available commands in context
4. Use command from context || End context, return to step one
5. End context && Create New, Return to step two || End context, return to step one
---
## How it'll be done
Recieve Command,
Get info of user using command,
view context user is in using the info,
compare available commands in context with that the user is using
```cs
if(command in context == valid) {
	expectedScripts();
} else {
	somethingElse();
}
```

## Pros and Cons of Context Based Commands
### Pros:
- Using contexts, command loops can last longer than single-message commands.
- Commands can be instantiated by other contexts, making contexts more versatile.
- Contexts in context trees can be deleted, but tree roots can be kept.
### Cons:
- Contexts must be stored, accessed, and deleted at proper times, to make this system functional, but may be difficult to make efficient.
- Contexts must include contexts that created them, so that once a context is complete, parent contexts can be deleted.