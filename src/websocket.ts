import * as WebSocket from "ws";

export interface ConnectWebSocketOptions {
    host: string;
    port: number;
}

export function connectWebSocket(
    {host, port}: ConnectWebSocketOptions
): Promise<WebSocket> {
    const ws = new WebSocket(`ws://${host}:${port}`);
    ws.on("close", () => {
        console.log('Send To Crow - Websocket close');
    });

    return new Promise((resolve, reject) => {
        ws.once("open", () => {
            console.log('Send To Crow - Websocket open');
            resolve(ws);
        });

        ws.once("error", (code: number, reason: string) => {
            console.error('Send To Crow - Websocket error', code, reason);
            reject(new Error(`code: ${code}, reason: ${reason}`));
        });
    });
}