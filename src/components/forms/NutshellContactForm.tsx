import { useEffect } from "react";

type Nutsheller = ((command: string, options: NutshellFormOptions) => void) & {
  q?: [string, NutshellFormOptions][];
};

type NutshellFormOptions = {
  form: string;
  instance: string;
  authToken: string;
  target: string;
};

const NUTSHELL_SCRIPT_ID = "nutsheller-loader";
const FORM_OPTIONS: NutshellFormOptions = {
  form: "aheG1q",
  instance: "357174",
  authToken: "",
  target: "nutshell-form-aheG1q",
};

export function NutshellContactForm() {
  useEffect(() => {
    const nutshellWindow = window as unknown as { Nutsheller?: Nutsheller };
    let nutsheller = nutshellWindow.Nutsheller;

    if (!nutsheller) {
      nutsheller = Object.assign(
        (command: string, options: NutshellFormOptions) => {
          nutsheller?.q?.push([command, options]);
        },
        { q: [] as [string, NutshellFormOptions][] },
      );
      nutshellWindow.Nutsheller = nutsheller;
    }

    nutsheller("initForm", FORM_OPTIONS);

    if (document.getElementById(NUTSHELL_SCRIPT_ID)) {
      return;
    }

    const script = document.createElement("script");
    script.id = NUTSHELL_SCRIPT_ID;
    script.type = "module";
    script.src = "https://loader.nutshell.com/nutsheller-esm.js";
    document.body.append(script);
  }, []);

  return <div id={FORM_OPTIONS.target} className="nutshell-form-shell" />;
}
