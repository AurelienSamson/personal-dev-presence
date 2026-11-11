import { Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, contactHref } from "@/data/contact";

export function ContactLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="outline" onClick={() => { window.location.href = contactHref; }}><Mail />Me contacter</Button>
      {contact.cvUrl ? <Button asChild variant="outline"><a href={contact.cvUrl} target="_blank" rel="noopener noreferrer"><Download />Mon CV</a></Button> : null}
    </div>
  );
}
