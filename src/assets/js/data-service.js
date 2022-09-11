export default class dataService {
    static LIST_KEY = 'values';
    static readData() {
        const data = localStorage.getItem(dataService.LIST_KEY);
        if (!data) return [];

        return JSON.parse(data);
    }
    static writeData(data) {
        localStorage.setItem(dataService.LIST_KEY, JSON.stringify(data));
    }
}