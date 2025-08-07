import { useState } from "react";

function ExpandableItem({ label, links }) {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setOpen(!open);
        }}
      >
        {label}
      </a>
      {open && (
        <ul className="subLinks">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default ExpandableItem;
