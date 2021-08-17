export const SELECTED_COFFEE = "SELECTED_COFFEE"

export const selectedCoffee = (id) => {
    return {
        type: SELECTED_COFFEE,
        coffeeId: id,
    }
}