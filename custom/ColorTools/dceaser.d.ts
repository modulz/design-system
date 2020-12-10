declare module ceaser {
  export function createCeaser(
    canvasElement: HTMLCanvasElement,
    codeElement: HTMLElement,
    curve: string,
    onChange?: any
  );
}
