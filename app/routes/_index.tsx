import type { V2_MetaFunction } from "@remix-run/node";
import _navigation  from "app/routes/_navigation";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Kurs Pisania" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "Borna", lineHeight: "1.8"}}>
      <_navigation />
      <h1 className="text-9xl font-bold">Amelia Pudzianowska</h1>
      <h1 className="text-8xl">Kurs Pisania</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
