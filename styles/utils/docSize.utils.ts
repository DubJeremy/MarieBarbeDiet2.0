export function getDocHeight(): string {
    if (typeof window !== "undefined") {
        return ` ${window.innerHeight}px`;
    }
    return " 100%";
}
