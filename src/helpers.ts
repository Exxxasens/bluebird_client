import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

interface ServerErrorType {
    detail: string;
}

export function isFetchBaseQueryError(
    error: unknown
): error is FetchBaseQueryError {
    return typeof error === "object" && error != null && "status" in error;
}

export function isErrorWithMessage(
    error: unknown
): error is { message: string } {
    return (
        typeof error === "object" &&
        error != null &&
        "message" in error &&
        typeof (error as any).message === "string"
    );
}

export function getErrorMessage(error: any) {
    console.log(error);
    if (isFetchBaseQueryError(error)) {
        if (
            error.data &&
            typeof error.data === "object" &&
            "detail" in error.data
        ) {
            return (error.data as ServerErrorType).detail;
        }
    }
    if (isErrorWithMessage(error)) {
        return error.message;
    }
    if ("error" in error) {
        return String(error.error);
    }
}
