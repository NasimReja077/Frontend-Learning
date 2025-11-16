import React, { useState } from "react";

// Nested Tabs Component
// Outer Tabs → Inside each tab, you can have Inner Tabs
// Pure React + JavaScript + Tailwind

//* Reusable Simple Tabs Component */
function SimpleTabs({ tabs }) {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex border-b gap-2 mb-3">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-3 py-1 rounded-t-lg text-sm transition
              ${active === i ? "bg-white border-b-0 border shadow-sm" : "bg-gray-200 hover:bg-gray-300"}`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-3 border rounded-b-lg bg-white">
        {tabs[active].content}
      </div>
    </div>
  );
}

// Main Nested Tabs Component */
export default function NestedTabs() {
  const outerTabs = [
    {
      title: "Profile",
      content: (
        <SimpleTabs
          tabs={[
            { title: "Overview", content: <div>Profile Overview Content</div> },
            { title: "Activity", content: <div>User recent Activity</div> },
            { title: "Settings", content: <div>Profile Settings Content</div> },
          ]}
        />
      ),
    },
    {
      title: "Products",
      content: (
        <SimpleTabs
          tabs={[
            { title: "All", content: <div>All Products list here</div> },
            { title: "Featured", content: <div>Featured Products List</div> },
            { title: "Archived", content: <div>Archived Products List</div> },
          ]}
        />
      ),
    },
    {
      title: "Settings",
      content: (
        <SimpleTabs
          tabs={[
            { title: "General", content: <div>General Settings</div> },
            { title: "Security", content: <div>Security Settings</div> },
            { title: "Billing", content: <div>Billing Info</div> },
          ]}
        />
      ),
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Nested Tabs Example</h2>
      <SimpleTabs tabs={outerTabs} />
    </div>
  );
}
