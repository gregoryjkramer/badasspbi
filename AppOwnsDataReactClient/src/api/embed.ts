export interface EmbedTokenResponse {
  embedToken: string;
  embedUrl: string;
  reportId: string;
  embedTokenExpiration: string;
}

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export async function getEmbedToken(): Promise<EmbedTokenResponse> {
  const workspaceId = "3405b65d-7455-4ad5-ba0f-5db626cd8f3b";
  const reportId = "67d62ff9-7478-47dd-812a-a5ac24a1166f";

  const url = new URL("/api/EmbedToken", API_BASE);
  url.searchParams.set("workspaceId", workspaceId);
  url.searchParams.set("reportId", reportId);

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Failed to fetch embed token (${response.status}): ${errorText}`
    );
  }

  return response.json();
}
console.log("API base is:", API_BASE);
