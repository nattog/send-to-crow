# Send To Crow (VS Code extension)

A way to send selections of text from VS Code to Monome Crow, by way of druid. It uses websockets to connect and send messages to druid.

Available for installation in the extensions tab in VS Code - search `nattog.send-to-crow`

## Requirements

Druid needs to be installed. Once installed, ensure that it is running by opening a terminal and running `druid`.

## How to use

Druid needs to be running before sending any text, as the web socket needs to be open. This just requires for `druid` to be run in a command line - there is a command available `Send To Crow: Launch Druid` which will execute this.
Then you can select some text and then run `Send To Crow: Send selected text to Crow` from the command palette.

For faster use, you can run `Send To Crow: Toggle keybinding` from the command palette. When this is toggled to active, you can use CTRL+ENTER / CMD+ENTER to send your selection. This will only run if the editor language is Lua (save your file as `.lua`).

## Commands

`sendToCrow.launch`

-   Launch Druid in your integrated terminal in VS Code
-   Command Palette: _"Send To Crow: Launch Druid"_

`sendToCrow.toggleKeybinding`

-   Adds keybinding to use CTRL/CMD + ENTER to run the command `sendToCrow.sendSelection`
-   Command Palette: _"Send To Crow: Toggle keybinding"_

`sendToCrow.sendSelection`

-   Send selected text to Druid. Possible to run with keybinding if previously toggled on
-   Command Palette: _"Send To Crow: Send selected text to Crow"_