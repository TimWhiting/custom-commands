/* Custom commands for Serenade

In this file, you can add custom commands in JavaScript. For example:

serenade.language("python").snippet(
  "test method <%identifier%>",
  "def test_<%identifier:underscores%>(self):<%newline%><%indent%>pass",
  "method"
);

See the docs for more: https://serenade.ai/docs#custom-commands

*/
serenade.global().command("update sawyer ws", async (api) => {
  await api.runCommand("show terminal");
  await api.wait(500);
  await api.typeText("cd ~/sawyer_ws && git pull && vcs pull src && ./update_packages.sh");
  await api.pressKey("enter");
});
serenade.global().command("open scripts", async (api) => {
  await api.runCommand("show terminal");
  await api.typeText("code ~/.serenade/scripts && git pull");
  await api.pressKey("enter");
});
serenade.global().command("open custom scripts", async (api) => {
  await api.runCommand("show terminal");
  await api.typeText("code ~/.serenade/scripts && git pull");
  await api.pressKey("enter");
});
serenade.global().command("docs serenade", async (api) => {
  await api.focus("chrome");
  await api.runCommand("go to serenade.ai/docs");
});
serenade.global().command("docs command", async (api) => {
  await api.focus("chrome");
  await api.runCommand("go to serenade.ai/docs/#custom-commands");
});
