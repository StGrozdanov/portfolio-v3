import { Visitation } from "@/app/api/analytics/route";

export interface ValidationResponse {
    isValid: boolean,
    errors: string[],
}

/**
 * validates visitation input. 
 * @returns ValidationResponse interface
 */
export function analyticsParamsAreValid(input: Visitation) {
    const validationResponse: ValidationResponse = {
        isValid: true,
        errors: [],
    }

    if (stringIsNotEmpty(input.ipAddress) === false) {
        validationResponse.errors.push('IP Address is empty or not present');
    }
    if (stringIsNotEmpty(input.deviceType) === false) {
        validationResponse.errors.push('Device type is empty or not present');
    }
    if (stringIsNotEmpty(input.originCountry) === false) {
        validationResponse.errors.push('Origin country is empty or not present');
    }
    if (validationResponse.errors.length > 0) {
        validationResponse.isValid = false;
    }

    return validationResponse;
}

/**
 * validates if the string is empty or not
 * @returns true if the string is not empty
 * @returns false if the string is empty
 */
function stringIsNotEmpty(input: string) {
    return input?.trim().length > 0;
}