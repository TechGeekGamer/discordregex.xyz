import RegexEntry from "./RegexEntry";

/**
 * author_discord_tag: Discord tag of person who created the regex
 * author_website_url (optional): website url (if any) of the author
 * description: short description of what the regex does
 * long_description (optional): long description of what the regex does (or additonal information if needed)
 * limitations (optional): what limiations does the regex have
 * regex: a regex in a string (ex. "[a-z0-9\.]{2,}\.[a-z0-9]{2,18}")
 * sensitive_regex (optional): If the regex involves sensitive content, it'll require confirmation before being shown
 */

export const regexEntries: RegexEntry[] = [
    {
        author_discord_tag: "TreeBen77#9066",
        author_website_url: "https://discord.gg/4CSc9E5uQy",
        description: "Detect 99% of links, only clickable links",
        limitations: "Only works with URLs with English characters",
        regex: "(?:https?://)[a-z0-9_\\-\\.]{2,}\\.[a-z]{2,}"
    },
    {
        author_discord_tag: "TreeBen77#9066",
        author_website_url: "https://discord.gg/4CSc9E5uQy",
        description: "Detect 99% of links, including non-clickable links",
        limitations: "Only works with URLs with English characters",
        regex: "(?:https?://)?[a-z0-9_\\-\\.]{2,}\\.[a-z]{2,}"
    },
    {
        author_discord_tag: "TreeBen77#9066",
        author_website_url: "https://discord.gg/4CSc9E5uQy",
        description: "Limit to 10 emojis in a message",
        limitations: "",
        regex: "(?s)((<a?:[a-z_0-9]+:[0-9]+>|\\p{Extended_Pictographic}).*){11,}"
    },
    {
        author_discord_tag: "TreeBen77#9066",
        author_website_url: "https://discord.gg/4CSc9E5uQy",
        description: "Detect official Discord invites",
        limitations: "",
        regex: "(?:https?://)?(?:www\\.|ptb\\.|canary\\.)?(?:discord(?:app)?\\.(?:(?:com|gg)/invite/[a-z0-9-_]+)|discord\\.gg/[a-z0-9-_]+)"
    },
    {
        author_discord_tag: "TreeBen77#9066",
        author_website_url: "https://discord.gg/4CSc9E5uQy",
        description: "Detect third party Discord invite domains",
        limitations: "There are other third party invite domains that are unknown",
        regex: "(?:https?://)?(?:www\\.)?(?:dsc\\.gg|invite\\.gg+|discord\\.link)/[a-z0-9-_]+"
    },
    {
        author_discord_tag: "TreeBen77#9066",
        author_website_url: "https://discord.gg/4CSc9E5uQy",
        description: "Detect Discord OAuth2 Link",
        limitations: "",
        regex: "(?:https?://)?(?:www.)?discord\\.com(?:/api)?/oauth2/authorize"
    },
    {
        author_discord_tag: "TreeBen77#9066",
        author_website_url: "https://discord.gg/4CSc9E5uQy",
        description: "Detect messages with JUST uppercase",
        limitations: "Messages with just numbers will be caught",
        regex: "(?-i)\\A[^a-z]+\\z"
    },
    {
        author_discord_tag: "TreeBen77#9066",
        author_website_url: "https://discord.gg/4CSc9E5uQy",
        description: "Detect Zalgo",
        long_description: `3 = less false positives, more false negatives (detects some emojis)\n1 - more false postives, less false negatives (detects more emojis, accents and)`,
        limitations: "Some emojis may be blocked",
        regex: "\\p{M}{3,}"
    }
]
