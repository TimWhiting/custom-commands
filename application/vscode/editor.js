serenade.global().command("show hints", async (api) => {
  await api.pressKey("k", ["command"]);
  await api.pressKey("i", ["command"]);
});
