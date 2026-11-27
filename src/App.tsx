import { useState } from "react";
import { Accordion, ArrowRightIcon, Button, InputField, Tabs, TeamMemberCard } from "./index";

const section = { display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center", margin: "16px 0 40px" } as const;

export function App() {
  const [tab, setTab] = useState("one");
  const items = [
    { id: "one", label: "Option" },
    { id: "two", label: "Option" },
    { id: "three", label: "Disabled", disabled: true },
  ];
  return (
    <main style={{ padding: 32, background: "var(--background-invert)", minHeight: "100vh" }}>
      <h1 className="ib-headline-web-small">IB Design System</h1>

      <h2 className="ib-title-large">Button</h2>
      <div style={section}>
        <Button>WOW Podcast</Button>
        <Button variant="primary-light">WOW Podcast</Button>
        <Button variant="secondary">WOW Podcast</Button>
        <Button variant="tertiary">WOW Podcast</Button>
        <Button disabled>WOW Podcast</Button>
        <Button variant="secondary" disabled>WOW Podcast</Button>
      </div>
      <div style={section}>
        <Button icon={<ArrowRightIcon />}>WOW Podcast</Button>
        <Button variant="secondary" icon={<ArrowRightIcon />}>WOW Podcast</Button>
        <Button variant="tertiary" icon={<ArrowRightIcon />}>WOW Podcast</Button>
        <Button iconOnly icon={<ArrowRightIcon />} aria-label="Next" />
        <Button variant="secondary" iconOnly icon={<ArrowRightIcon />} aria-label="Next" />
      </div>

      <h2 className="ib-title-large">Input field</h2>
      <div style={section}>
        <InputField label="First Name *" placeholder="First Name" size="small" />
        <InputField label="First Name *" placeholder="First Name" />
        <InputField label="First Name *" placeholder="First Name" size="large" error="This field is required" />
        <InputField label="First Name *" defaultValue="Jane" disabled />
      </div>

      <h2 className="ib-title-large">Tabs</h2>
      <div style={{ margin: "16px 0 40px" }}>
        <Tabs items={items} value={tab} onChange={setTab} size="sm" />
        <br />
        <Tabs items={items} value={tab} onChange={setTab} size="md" />
        <br />
        <Tabs items={items} value={tab} onChange={setTab} size="lg" />
      </div>

      <h2 className="ib-title-large">Accordion</h2>
      <div style={{ margin: "16px 0 40px" }}>
        <Accordion title="Accordion">Accordion content goes here.</Accordion>
        <Accordion title="Accordion" defaultOpen>Accordion content goes here.</Accordion>
      </div>

      <h2 className="ib-title-large">Team member card</h2>
      <TeamMemberCard
        name="Siddharth Sethi"
        role="Co-founder"
        wowMoment="Watching my 2 sons play without a care in the world."
        aimsTo="Make InfoBeans the best place to work in the entire universe. (phrase borrowed from my 5-year-old)"
        philosophy="Think beyond and big. Act immediately. Deliver thoughtfully."
      />
    </main>
  );
}
