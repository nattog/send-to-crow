import { connectWebSocket, ConnectWebSocketOptions } from "./websocket";

export interface SendCommandOptions extends ConnectWebSocketOptions {
    command: string;
}

export async function executeSendCommand(options: SendCommandOptions) {
    const webSocket = await connectWebSocket(options);
    webSocket.send(options.command);
    webSocket.close();
}