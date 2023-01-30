import RegexEntry from "@/RegexEntry";
import { useState } from "react";

export default function RegexCard({ entry }: { entry: RegexEntry }) {
  const id = entry.description.split(" ").map(d => d.toLowerCase()).join("_");

  // Copy was selected
  const [selected, setSelected] = useState(false);
  // User allowed showing sensitive content
  const [sensitiveVisible, setSensitiveVisible] = useState(false);
  // Used to return the regex to normal state after being copied
  const [timeoutObj, setTimeoutObj] = useState(0);
  // Copy the regex to clipboard & change to selected
  function copyRegex() {
    if (entry.sensitive_regex && !sensitiveVisible) return false;
    setSelected(true);
    if (timeoutObj) clearTimeout(timeoutObj);
    navigator.clipboard.writeText(entry.regex);
    setTimeoutObj(
      window.setTimeout(() => {
        setSelected(false);
      }, 2000)
    );
  }
  function copyURL() {
    navigator.clipboard.writeText(id);
    window.location.hash = `#${id}`;
  }
  function displaySensitiveRegex() {
    setSensitiveVisible(true);
  }
  return (
    <div className="card overflow-x-scroll" id={id}>
      <h2 className="text-2xl font-bold mb-2 hover:underline hover:cursor-pointer" onClick={() => copyURL()}>{entry.description}</h2>
      {entry.author_website_url ? <a className="text-lg mb-2 link" href={entry.author_website_url} target="_blank" rel="noreferrer">By: {entry.author_discord_tag}</a> : <h4 className="text-lg mb-2">By: {entry.author_discord_tag}</h4>}
      <p className="whitespace-pre-wrap">
        {entry.long_description}
      </p>
      <div className="border-b-2 border-gray-500 my-1 rounded-xl" />
      <table className="table-fixed w-full text-center">
        <thead>
          <tr>
            <th>Regex Limitations ⚠️</th>
            <th
              className={`${entry.sensitive_regex && !sensitiveVisible ? "cursor-default" : "cursor-pointer"} transition-all ${selected ? "text-green-500" : ""}`}
              onClick={() => copyRegex()}
            >
              Regex 📋 (Click to Copy)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {entry.limitations || (
                <>
                  None specified. Found one?{" "}
                  <a className="link" href="https://github.com/TechGeekGamer/discordregex.xyz" target="_blank" rel="noreferrer">
                    Please open a PR to add it!
                  </a>
                </>
              )}
            </td>
            {entry.sensitive_regex && !sensitiveVisible ? (
              <td
                className={`cursor-pointer transition-all text-red-300 hover:text-red-400`}
                onClick={() => displaySensitiveRegex()}
              >
                This regex may be sensitive content to some. Click to view
                anyways.
              </td>
            ) : (
              <td
                className={`cursor-pointer transition-all ${selected ? "text-green-500" : ""}`}
                onClick={() => copyRegex()}
              >
                {selected ? "Copied to Clipboard!" : entry.regex}
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div >
  );
}
