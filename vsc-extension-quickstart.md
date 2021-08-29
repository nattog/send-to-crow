# Send To Crow (VS Code extension)

A way to send selections of text from VS Code to Monome Crow, by way of druid. It uses websockets to connect and send messages to druid.

## Requirements

Druid needs to be installed. Once installed, ensure that it is running by opening a terminal and running `druid`.

## Sending text 

Druid needs to be running before sending any text, as the web socket needs to be open. 
Then you can select some text and then run `Send selected text to Crow` from your command palette.

## Go further

 * Reduce the extension size and improve the startup time by [bundling your extension](https://code.visualstudio.com/api/working-with-extensions/bundling-extension).
 * [Publish your extension](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) on the VSCode extension marketplace.
 * Automate builds by setting up [Continuous Integration](https://code.visualstudio.com/api/working-with-extensions/continuous-integration).
