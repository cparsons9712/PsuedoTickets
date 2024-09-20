export const detectEngagementLoop = (interactions) => {
    // your code here
  };

  console.log(detectEngagementLoop(["like Post X", "comment Post Y", "unlike Post X", "like Post X"]));
  // true (cycle detected)

  console.log(detectEngagementLoop(["like Post X", "comment Post Y", "share Post Z"]));
  // false (no cycle)

  console.log(detectEngagementLoop(["like Post A", "unlike Post A", "like Post B", "unlike Post A"]));
  // false (no cycle)

  console.log(detectEngagementLoop([]));
  // false (no interactions)

  console.log(detectEngagementLoop(["like Post X", "unlike Post X", "like Post X", "unlike Post X"]));
  // true (cycle detected)

  console.log(detectEngagementLoop([123, "like Post X"]));
  // "Please enter a valid interaction sequence"

  console.log(detectEngagementLoop(["like Post X", "unlike Post X", "share Post Z", 42]));
  // "Please enter a valid interaction sequence"
