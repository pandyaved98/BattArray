// function to get mock data for the nearby vendors
// Creator - Kartikey Vaish
export const getVendors = (latitude: number, longitude: number) => {
    return [
        {
            name: "Vendor 1",
            latitude: latitude,
            longitude: longitude,
        },
        {
            name: "Vendor 2",
            latitude: latitude + 0.011,
            longitude: longitude + 0.011,
        },
        {
            name: "Vendor 3",
            latitude: latitude + 0.002,
            longitude: longitude + 0.012,
        },
        {
            name: "Vendor 4",
            latitude: latitude - 0.011,
            longitude: longitude - 0.003,
        },
        {
            name: "Vendor 5",
            latitude: latitude - 0.018,
            longitude: longitude - 0.004,
        },
    ];
};