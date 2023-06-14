const useDate = (date: any): string => {
    const fullDate: any = new Date(date?.toString().replace("-", "/"));
    const year: number = fullDate.getFullYear();
    const month: number = fullDate.getMonth() + 1;
    const day: number = fullDate.getDate();

    const dateFormated: string =
        month.toString().padStart(2, "0") +
        "/" +
        day.toString().padStart(2, "0") +
        "/" +
        year;

    return dateFormated;
};

export default useDate;
