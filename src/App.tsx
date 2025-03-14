import { DarkThemeToggle } from "flowbite-react";
import { Button } from "flowbite-react";
import { Component } from "./Card";

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
      <Button>Click me</Button>;
      <DarkThemeToggle />
      <Component />
    </main>
  );
}

export default App;
