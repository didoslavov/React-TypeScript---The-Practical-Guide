export async function get(url: string) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return (await response.json()) as unknown;
    } catch (error) {
        console.error(error);
    }
}
