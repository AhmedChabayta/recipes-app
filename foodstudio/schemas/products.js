export default {
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "servingSize",
      title: "Serving Size",
      type: "string",
    },
    {
      name: "weight",
      title: "Weight",
      type: "number",
    },
    {
      name: "nutrients",
      type: "object",
      fieldsets: [
        {
          name: "nutrients",
          title: "Nutrients",
        },
      ],
      fields: [
        {
          name: "calories",
          title: "Calorie",
          type: "number",
        },
        {
          name: "fiber",
          title: "Fiber",
          type: "number",
        },
        {
          name: "vitaminA",
          title: "Vitamin A",
          type: "number",
        },
        {
          name: "vitaminC",
          title: "Vitamin C",
          type: "number",
        },
        {
          name: "potassium",
          title: "Potassium",
          type: "number",
        },
        {
          name: "folate",
          title: "Folate",
          type: "number",
        },
      ],
    },
  ],
};
