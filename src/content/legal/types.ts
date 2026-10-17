/** A legal page. Section ids are link targets (e.g. /privacy/#link): keep them stable. */
export type LegalDoc = {
  title: string; // the browser tab
  description: string;
  heading: string; // the page's h1
  effective: string;
  intro: string; // HTML
  sections: { id: string; title: string; html: string }[];
};
