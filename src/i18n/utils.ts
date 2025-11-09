import type { Lang } from "@types";
import { ui } from "./ui";

export function getLangFromUrl(url: URL): Lang {
    const [, lang] = url.pathname.split("/");
    if (lang === "en") return "en";
    return "es";
}

export function useTranslations(lang: Lang) {
    return function t(key: keyof (typeof ui)[typeof lang]) {
        return ui[lang][key] || ui["es"][key];
    };
}

