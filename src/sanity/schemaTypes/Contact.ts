export default {
    name: "contact",
    title: "Contact Messages",
    type: "document",
    fields: [
      { name: "name", type: "string" },
      { name: "email", type: "string" },
      { name: "message", type: "text" },
      {
        name: "createdAt",
        type: "datetime",
        initialValue: () => new Date().toISOString(),
      },
    ],
  };