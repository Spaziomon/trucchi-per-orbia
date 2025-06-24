/**
 * SpaziomonUnits - Simple Space Unit Conversion Utility
 * Author: Spaziomon
 * License: Custom
 */

const SpaziomonUnits = {
    /**
     * Converts kilometers to astronomical units (AU).
     * @param {number} km - The distance in kilometers.
     * @returns {number} - The distance in astronomical units.
     */
    kmToAU(km) {
        if (typeof km !== 'number' || km < 0) {
            console.error('[SpaziomonUnits] Invalid distance.');
            return NaN;
        }
        const AU_IN_KM = 149597870.7;
        return km / AU_IN_KM;
    },

    /**
     * Converts light-years to kilometers.
     * @param {number} ly - The distance in light-years.
     * @returns {number} - The distance in kilometers.
     */
    lightYearsToKm(ly) {
        if (typeof ly !== 'number' || ly < 0) {
            console.error('[SpaziomonUnits] Invalid distance.');
            return NaN;
        }
        const KM_IN_LY = 9.4607e12;
        return ly * KM_IN_LY;
    }
};

// Example usage:
// console.log(SpaziomonUnits.kmToAU(300000000)); // Output: ~2.005 AU
// console.log(SpaziomonUnits.lightYearsToKm(4.2)); // Output: ~3.973e13 km

module.exports = SpaziomonUnits;
