// Fridge note entry for make.fun: "Notes From a Passive-Aggressive Fridge".
// The program writes one single-line note to /output/entry.txt.
// The note is the fridge's own voice: smug about what it keeps cold,
// petty about a small domestic grudge, and it lands with a turn.

import { mkdirSync, writeFileSync } from "node:fs";

// The note: the leftovers have been in there so long they outlasted
// the owner's last relationship, and the fridge keeps them cold anyway
// out of respect for the dead. Concrete, domestic, and the sting is
// in the second sentence, which reframes cold storage as mourning.
const note =
  "Your leftovers have outlasted your last relationship. I keep them cold out of respect for the dead.";

mkdirSync("/output", { recursive: true });

// Gate guard: the entry must be one line of 1-200 characters.
// Fail loudly instead of shipping a note the scorer would refuse.
if (note.length < 1 || note.length > 200 || note.includes("\n")) {
  throw new Error(`note fails the gate: ${note.length} chars`);
}

writeFileSync("/output/entry.txt", note, "utf8");
