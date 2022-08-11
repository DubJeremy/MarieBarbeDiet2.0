export function getDocHeight(): string {
    if (typeof window !== "undefined") {
        return ` ${window.innerHeight}px`;
    }
    return " 100%";
}
export function getDocWidth(): number {
    if (typeof window !== "undefined") {
        return window.innerWidth;
    }
    return 1500;
}
