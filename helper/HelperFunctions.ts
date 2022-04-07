// Imports
import VendorData from "../mock/Vendors.json";

// function to get mock data for the nearby vendors
// Creator - Kartikey Vaish
export const getVendors = (latitude: number, longitude: number) => {
    return [
        {
            name: VendorData[0].name,
            latitude: latitude,
            longitude: longitude,
        },
        {
            name: VendorData[1].name,
            latitude: latitude + 0.011,
            longitude: longitude + 0.011,
        },
        {
            name: VendorData[2].name,
            latitude: latitude + 0.002,
            longitude: longitude + 0.012,
        },
        {
            name: VendorData[3].name,
            latitude: latitude - 0.011,
            longitude: longitude - 0.003,
        },
        {
            name: VendorData[4].name,
            latitude: latitude - 0.018,
            longitude: longitude - 0.004,
        },
    ];
};