import express from "express";
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World! ");
// });

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Skeleton Fight",
      content:
        "Why don't skeletons fight each other? They don't have the guts.",
    },
    {
      id: 2,
      title: "Bear with No Teeth",
      content: "What do you call a bear with no teeth? A gummy bear.",
    },
    {
      id: 3,
      title: "Penguin's House",
      content: "How does a penguin build its house? Igloos it together.",
    },
    {
      id: 4,
      title: "Standing Bicycle",
      content: "Why couldn't the bicycle stand up by itself? It was two-tired.",
    },
    {
      id: 5,
      title: "Scarecrow Award",
      content:
        "Why did the scarecrow win an award? Because he was outstanding in his field.",
    },
  ];

  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
