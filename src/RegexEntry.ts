export default interface RegexEntry {
    /** Discord tag of person who created the regex */
    author_discord_tag: string;
    /** website url (if any) of the author */
    author_website_url?: string;
    /** short description of what the regex does */
    description: string;
    /** long description of what the regex does */
    long_description?: string;
    /** what limiations does the regex have */
    limitations?: string;
    /** a regex in a string (ex. "[a-z0-9\.]{2,}\.[a-z0-9]{2,18}") */
    regex: string;
    /** If the regex involves sensitive content, it'll require clicking before being shown */
    sensitive_regex?: boolean;
}