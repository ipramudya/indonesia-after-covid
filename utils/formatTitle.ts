export default function formatTitle(title: string): string {
    if (title === "DKI JAKARTA") {
        return "DKI Jakarta";
    } else if (title === "DAERAH ISTIMEWA YOGYAKARTA") {
        return "DI Yogyakarta";
    } else if (!title) {
        return "";
    } else {
        return title
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }
}
