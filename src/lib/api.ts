type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

async function request<T>(
  url: string,
  method: HttpMethod,
  body?: any
): Promise<T> {
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const res = await fetch(url, options);
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`HTTP ${method} ${url} failed: ${errorText}`);
  }

  return res.json();
}

export function apiGet<T>(url: string): Promise<T> {
  return request<T>(url, "GET");
}

export function apiPost<T>(url: string, body: any): Promise<T> {
  return request<T>(url, "POST", body);
}

export function apiPut<T>(url: string, body: any): Promise<T> {
  return request<T>(url, "PUT", body);
}

export function apiDelete<T>(url: string): Promise<T> {
  return request<T>(url, "DELETE");
}
