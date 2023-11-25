export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    token: string;
}

export interface RegisterRequest {
    name: string;
    username: string;
    email: string;
    password: string;
}

export interface RegisterResponse {
    name: string;
    username: string;
    email: string;
    id: number;
    created_at: string;
    is_active: number;
}

class BlueBirdApi {
    public baseURI: string;

    constructor(baseURI: string = "") {
        this.baseURI = baseURI;
    }

    parseResponse<T>(request: Promise<Response>): Promise<T> {
        return request.then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json() as Promise<T>;
        });
    }

    login = async ({
        username,
        password
    }: LoginRequest): Promise<LoginResponse> => {
        const req = fetch(this.baseURI + "/token", {
            method: "POST",
            body: JSON.stringify({
                username,
                password
            })
        });
        const parsedData = await this.parseResponse<string>(req);
        return {
            token: parsedData
        };
    };

    register({
        name,
        username,
        email,
        password
    }: RegisterRequest): Promise<RegisterResponse> {
        const req = fetch(this.baseURI + "/", {
            method: "POST",
            body: JSON.stringify({
                name,
                username,
                email,
                password
            })
        });

        return this.parseResponse<RegisterResponse>(req);
    }
}

export default BlueBirdApi;
