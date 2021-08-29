import { info } from "./util";
import { connectWebSocket, ConnectWebSocketOptions } from "./websocket";

export interface SendCommandOptions extends ConnectWebSocketOptions {
    command: string;
}

export async function executeSendCommand(options: SendCommandOptions) {
    info("send");
    const webSocket = await connectWebSocket(options);
    webSocket.send(options.command);
    webSocket.close();
}