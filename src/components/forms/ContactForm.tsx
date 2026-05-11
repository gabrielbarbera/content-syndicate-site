import { useEffect } from "react";

declare global {
  interface Window {
    Nutsheller?: (...args: unknown[]) => void;
  }
}

const NUTSHELL_FORM_ID = "CarbIj";
const NUTSHELL_INSTANCE_ID = "357174";
const NUTSHELL_TARGET_ID = `nutshell-form-${NUTSHELL_FORM_ID}`;

function convertCountryRegionToSelector(root: HTMLElement) {
  const fieldsets = Array.from(root.querySelectorAll("fieldset"));
  const countryFieldset = fieldsets.find((fieldset) => {
    const legend = fieldset.querySelector("legend");
    return legend?.textContent?.trim().toLowerCase().includes("country/region");
  });

  if (!countryFieldset || countryFieldset.dataset.countrySelectorReady === "true") {
    return;
  }

  const optionLabels = Array.from(countryFieldset.querySelectorAll("label")).filter((label) =>
    label.querySelector('input[type="checkbox"]')
  );

  if (optionLabels.length === 0) {
    return;
  }

  const select = document.createElement("select");
  select.id = "nutshell-country-selector";
  select.className = "nutshell-country-selector";

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Select country/region";
  select.appendChild(placeholder);

  const checkboxes: HTMLInputElement[] = [];

  optionLabels.forEach((label) => {
    const checkbox = label.querySelector<HTMLInputElement>('input[type="checkbox"]');
    if (!checkbox) return;

    checkboxes.push(checkbox);

    const option = document.createElement("option");
    option.value = checkbox.value;
    option.textContent = label.textContent?.trim() ?? "";
    select.appendChild(option);
  });

  const selectedCheckbox = checkboxes.find((checkbox) => checkbox.checked);
  if (selectedCheckbox) {
    select.value = selectedCheckbox.value;
  }

  select.addEventListener("change", () => {
    checkboxes.forEach((checkbox) => {
      const shouldCheck = checkbox.value === select.value;
      if (checkbox.checked !== shouldCheck) {
        checkbox.checked = shouldCheck;
        checkbox.dispatchEvent(new Event("change", { bubbles: true }));
      }
    });
  });

  const labelsContainer = optionLabels[0]?.parentElement;
  if (labelsContainer) {
    labelsContainer.insertBefore(select, optionLabels[0]);
  } else {
    countryFieldset.appendChild(select);
  }

  optionLabels.forEach((label) => {
    label.style.display = "none";
  });

  countryFieldset.dataset.countrySelectorReady = "true";
}

export function ContactForm() {
  useEffect(() => {
    const w = window as Window & {
      Nutsheller?: { (...args: unknown[]): void; q?: unknown[] };
    };

    w.Nutsheller =
      w.Nutsheller ||
      function nutshellQueue(...args: unknown[]) {
        w.Nutsheller!.q = w.Nutsheller!.q || [];
        w.Nutsheller!.q!.push(args);
      };

    w.Nutsheller("initForm", {
      form: NUTSHELL_FORM_ID,
      instance: NUTSHELL_INSTANCE_ID,
      authToken: "",
      target: NUTSHELL_TARGET_ID,
    });

    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://loader.nutshell.com/nutsheller-esm.js";
    script.async = true;
    script.dataset.nutshellLoader = "true";
    document.body.appendChild(script);

    const target = document.getElementById(NUTSHELL_TARGET_ID);
    let observer: MutationObserver | null = null;

    if (target) {
      observer = new MutationObserver(() => {
        convertCountryRegionToSelector(target);
      });
      observer.observe(target, { childList: true, subtree: true });
      convertCountryRegionToSelector(target);
    }

    return () => {
      observer?.disconnect();
      script.remove();
      const targetNode = document.getElementById(NUTSHELL_TARGET_ID);
      if (targetNode) {
        targetNode.innerHTML = "";
      }
    };
  }, []);

  return <div id={NUTSHELL_TARGET_ID} className="nutshell-form-shell" />;
}
