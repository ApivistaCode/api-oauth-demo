export const scopesACL = {
  "read:policies": [
    {
      method: "GET",
      url: "\/policies"
    },
    {
      method: "GET",
      url: "\/policies\/.*$"
    }
  ],
  "create:policies": [
    {
      method: "POST",
      url: "\/policies$"
    }
  ],
  "read:agents": [
    {
      method: "GET",
      url: "\/agents$"
    },
    {
      method: "GET",
      url: "\/agents\/.*$"
    }
  ],
  "create:agents": [
    {
      method: "POST",
      url: "\/agents$"
    }
  ],
  "remove:agents": [
    {
      method: "DELETE",
      url: "\/agents\/.*$"
    }
  ]
}
