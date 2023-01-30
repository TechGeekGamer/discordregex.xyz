import RegexCard from "@/components/RegexCard";
import { regexEntries } from "@/regexes";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  function scrollToCard() {
    const id = window.location.hash.split("#")[1];
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("hashchange", scrollToCard);
    return () => {
      window.removeEventListener("hashchange", scrollToCard);
    }
  }, [])
  return (
    <div className="lg:px-40 min-h-screen">
      <Head>
        <title>Discord AutoMod Regexes</title>
        <meta
          name="description"
          content="A list of regexes that can be used with Discord AutoMod"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="p-5 rounded-xl">
        <h1 id="title" className="text-4xl text-center mb-5 font-bold">
          Discord AutoMod Regexes
        </h1>
        <input
          type="text"
          id="search"
          placeholder="Search for a Regex Description"
          autoComplete="off"
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-md border border-gray-300 bg-[#2A2A2A] py-1 my-2 px-3 text-base outline-none"
        />
        <div className="flex flex-col space-y-2">
          {regexEntries
            .filter(entry => search ? (entry.description.toLowerCase().includes(search.toLowerCase()) || entry.regex.toLowerCase().includes(search.toLowerCase())) : true)
            .map((entry) => <RegexCard entry={entry} key={entry.description} />)}
          {regexEntries
            .filter(entry => search ? (entry.description.toLowerCase().includes(search.toLowerCase()) || entry.regex.toLowerCase().includes(search.toLowerCase())) : true).length === 0
            &&
            (<div className="card">
              <h2 className="text-2xl font-bold mb-2">No Results Found</h2>
              <h4 className="text-lg mb-2">Few things you can do...</h4>
              <p className="whitespace-pre-wrap">
                - Generate your own Regex with TreeBen77#9066&apos;s <a className="link" href="https://treeben77.github.io/automod-regex-generator/" target="_blank" rel="noreferrer">AutoMod Regex Generator</a> (and <a className="link" href="https://github.com/TechGeekGamer/discordregex.xyz" target="_blank" rel="noreferrer">PR it on GitHub</a> after? 👀)
                <br />
                - <a className="link" href="https://github.com/TechGeekGamer/discordregex.xyz" target="_blank" rel="noreferrer">Contribute to this site on GitHub</a>
                <br />
                - Try different search terms
              </p>
            </div>)}
        </div>
        <footer className="mt-2 text-center">
          Created by{" "}
          <a
            className="link"
            href="https://daniel.is-coding-on-the.net"
            target="_blank"
            rel="noreferrer"
          >
            Daniel💻#7205
          </a>
          <br />
          <a
            className="link"
            href="https://github.com/TechGeekGamer/discordregex.xyz"
            target="_blank"
            rel="noreferrer"
          >
            Contribute on GitHub
          </a>
          <br />
          This is not affiliated with Discord
        </footer>
      </div>
    </div >
  );
}
